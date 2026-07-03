import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', 'dist', '.git'].includes(file)) {
        walkDir(fullPath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Fix var(--gold) references → var(--ink)
      if (content.includes('var(--gold)')) {
        content = content.replace(/var\(--gold\)/g, 'var(--ink)');
        changed = true;
      }

      // Replace gray hex colors with black or near-white
      // #737373 (medium gray) → #111111 (black)
      if (content.includes('#737373')) {
        content = content.replace(/#737373/g, '#111111');
        changed = true;
      }
      // #a3a3a3 (light gray) → #d9d9d9 (very light gray for borders)
      if (content.includes('#a3a3a3')) {
        content = content.replace(/#a3a3a3/g, '#d9d9d9');
        changed = true;
      }
      // #333333 → #111111
      if (content.includes('#333333')) {
        content = content.replace(/#333333/g, '#111111');
        changed = true;
      }
      // #6b6b6b → #111111
      if (content.includes('#6b6b6b')) {
        content = content.replace(/#6b6b6b/g, '#111111');
        changed = true;
      }
      // #5a5a5a → #111111
      if (content.includes('#5a5a5a')) {
        content = content.replace(/#5a5a5a/g, '#111111');
        changed = true;
      }
      // #4a4a4a → #111111
      if (content.includes('#4a4a4a')) {
        content = content.replace(/#4a4a4a/g, '#111111');
        changed = true;
      }
      // #8a8a8a → #111111
      if (content.includes('#8a8a8a')) {
        content = content.replace(/#8a8a8a/g, '#111111');
        changed = true;
      }
      // #999999 → #111111
      if (content.includes('#999999')) {
        content = content.replace(/#999999/g, '#111111');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated:', fullPath);
      }
    }
  }
}

walkDir(process.argv[2] || '.');
