// Minimal static server for ./out (Cloudflare Pages simulation).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = new URL("../out/", import.meta.url);
const PORT = Number(process.argv[2] || 3105);
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".txt": "text/plain", ".xml": "application/xml", ".webmanifest": "application/manifest+json" };

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = path.join(ROOT.pathname.replace(/^\//, ""), urlPath);
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  } catch {}
  if (!fs.existsSync(file) && fs.existsSync(file + ".html")) file += ".html";
  if (!fs.existsSync(file)) { res.writeHead(404); res.end("nf"); return; }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, "127.0.0.1", () => console.log("OUT-SRV:" + PORT));
