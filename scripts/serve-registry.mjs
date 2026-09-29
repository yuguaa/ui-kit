/**
 * 本地静态服务器：把仓库根目录通过 HTTP 暴露，用于在本地验证
 * shadcn / shadcn-vue CLI 从 registry 目录消费组件。
 * 用法：pnpm serve:registry（默认端口 8123）
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const port = Number(process.env.PORT ?? 8123);

const mime = {
  ".json": "application/json",
  ".ts": "text/plain",
  ".tsx": "text/plain",
  ".vue": "text/plain",
  ".css": "text/css",
  ".js": "text/javascript",
  ".md": "text/plain",
};

createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${port}`);
  const path = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, "");
  const file = join(root, path);
  if (!file.startsWith(root)) {
    res.writeHead(403).end();
    return;
  }
  readFile(file)
    .then((data) => {
      res.writeHead(200, { "content-type": mime[extname(file)] ?? "application/octet-stream" });
      res.end(data);
    })
    .catch(() => {
      res.writeHead(404).end("not found");
    });
}).listen(port, () => {
  console.log(`registry server: http://localhost:${port}`);
});
