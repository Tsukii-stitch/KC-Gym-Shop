import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./LoginLogs.css";

function LoginLogs() {
  const { user } = useAuth();
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/logins")
      .then((res) => res.json())
      .then(setRows)
      .catch(() => setError("Could not reach the log server."));
  }, []);

  if (user?.identifier !== "admin") {
    return (
      <div className="logs-page">
        <p>Admin access only. Log in as admin to view this page.</p>
      </div>
    );
  }

  return (
    <div className="logs-page">
      <h2>Login Records</h2>
      {error && <p className="logs-error">{error}</p>}

      <div className="logs-table-wrap">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Username / Phone</th>
              <th>Provider</th>
              <th>Successful Logins</th>
              <th>Failed Logins</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.identifier}</td>
                <td>{r.provider}</td>
                <td className="status-ok">{r.successful}</td>
                <td className="status-failed">{r.failed}</td>
                <td>{r.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoginLogs;