import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8080;
const distDir = path.join(__dirname, 'build');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

const sendFile = async (res, filePath) => {
  try {
    const data = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(404);
    res.end('Not found');
  }
};

const server = http.createServer(async (req, res) => {
  const reqPath = req.url.split('?')[0];
  let filePath = path.join(distDir, reqPath === '/' ? '/index.html' : reqPath);

  try {
    const fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    await sendFile(res, filePath);
  } catch (err) {
    // SPA fallback to index.html
    await sendFile(res, path.join(distDir, 'index.html'));
  }
});

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
