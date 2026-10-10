import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ExcelJS from "exceljs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const XLSX_FILE = path.join(__dirname, "logins.xlsx");

const app = express();
app.use(cors());
app.use(express.json());

// Runs reads/writes one at a time so two logins can't corrupt the Excel file
let queue = Promise.resolve();

const HEADERS = [
  "Username / Phone",
  "Provider",
  "Successful Logins",
  "Failed Logins",
  "Last Activity"
];

async function openWorkbook() {
  const workbook = new ExcelJS.Workbook();
  let sheet;

  if (fs.existsSync(XLSX_FILE)) {
    await workbook.xlsx.readFile(XLSX_FILE);
    sheet = workbook.getWorksheet("Logins");
  } else {
    sheet = workbook.addWorksheet("Logins");
    sheet.addRow(HEADERS);
    sheet.getRow(1).font = { bold: true };
    [28, 14, 20, 16, 24].forEach((width, i) => {
      sheet.getColumn(i + 1).width = width;
    });
  }

  return { workbook, sheet };
}

async function recordLogin({ provider, identifier, status, timestamp }) {
  const { workbook, sheet } = await openWorkbook();
  const isSuccess = status === "success";

  let target = null;
  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1 && String(row.getCell(1).value) === identifier) {
      target = row;
    }
  });

  if (target) {
    const col = isSuccess ? 3 : 4;
    target.getCell(2).value = provider;
    target.getCell(col).value = (Number(target.getCell(col).value) || 0) + 1;
    target.getCell(5).value = timestamp;
  } else {
    sheet.addRow([identifier, provider, isSuccess ? 1 : 0, isSuccess ? 0 : 1, timestamp]);
  }

  await workbook.xlsx.writeFile(XLSX_FILE);
}

app.post("/api/log-login", (req, res) => {
  const { provider, identifier, status = "success" } = req.body;

  if (!provider) {
    return res.status(400).json({ ok: false, error: "Missing provider" });
  }

  const cleanIdentifier = String(identifier ?? "").trim() || "(blank)";
  const timestamp = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" });

  queue = queue
    .then(() =>
      recordLogin({
        provider,
        identifier: cleanIdentifier,
        status,
        timestamp
      })
    )
    .catch((err) => console.error("Log error:", err.message));

  res.json({ ok: true });
});

app.get("/api/logins", async (req, res) => {
  try {
    await queue; // wait for any pending write first

    if (!fs.existsSync(XLSX_FILE)) return res.json([]);

    const { sheet } = await openWorkbook();
    const rows = [];

    sheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      rows.push({
        identifier: String(row.getCell(1).value ?? ""),
        provider: String(row.getCell(2).value ?? ""),
        successful: Number(row.getCell(3).value) || 0,
        failed: Number(row.getCell(4).value) || 0,
        lastActivity: String(row.getCell(5).value ?? "")
      });
    });

    res.json(rows);
  } catch (err) {
    console.error("Read error:", err);
    res.status(500).json({ ok: false });
  }
});

app.listen(3001, () => console.log("Login logger running on http://localhost:3001"));