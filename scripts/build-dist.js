const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..');
const DIST = path.join(SRC, 'dist');

const KEEP = [
  'index.html',
  'assets',
  'CNAME'
];

if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true });
}

fs.mkdirSync(DIST);

for (const item of KEEP) {
  const srcPath = path.join(SRC, item);
  const destPath = path.join(DIST, item);
  if (!fs.existsSync(srcPath)) continue;
  const stat = fs.statSync(srcPath);
  if (stat.isDirectory()) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, destPath);
  }
}

const count = fs.readdirSync(DIST).length;
console.log(`dist/ created with ${count} items`);
