export function logLogin(provider, identifier, status = "success") {
  fetch("/api/log-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ provider, identifier, status })
  }).catch(() => {});
}