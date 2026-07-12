import { readdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".webp")) files.push(fullPath);
  }
  return files;
}

async function optimizeWebp(file, { maxWidth, quality }) {
  const before = (await stat(file)).size;
  const temporary = `${file}.tmp-${process.pid}.webp`;

  await sharp(file)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toFile(temporary);

  const after = (await stat(temporary)).size;
  if (after < before) {
    let removed = false;
    try {
      await rm(file);
      removed = true;
      await rename(temporary, file);
    } catch (error) {
      if (removed) {
        await rename(temporary, file);
        throw error;
      }
      await rm(temporary, { force: true });
      console.warn(`Skipped locked file: ${path.relative(root, file)}`);
      return { before, after: before };
    }
    return { before, after };
  }

  await rm(temporary, { force: true });
  return { before, after: before };
}

async function convertJpeg(source, destination, { maxWidth, quality }) {
  await sharp(source)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toFile(destination);
}

async function processWithLimit(files, options, limit = 4) {
  let cursor = 0;
  let before = 0;
  let after = 0;

  async function worker() {
    while (cursor < files.length) {
      const file = files[cursor++];
      const result = await optimizeWebp(file, options);
      before += result.before;
      after += result.after;
    }
  }

  await Promise.all(Array.from({ length: limit }, () => worker()));
  return { before, after };
}

const catalogDirectory = path.join(root, "public", "optimized", "catalog-images");
const bannerDirectory = path.join(root, "public", "optimized", "gani-home");
const catalogFiles = await walk(catalogDirectory);
const bannerFiles = await walk(bannerDirectory);

const catalogResult = await processWithLimit(catalogFiles, { maxWidth: 1600, quality: 70 });
const bannerResult = await processWithLimit(bannerFiles, { maxWidth: 1600, quality: 68 });

await convertJpeg(
  path.join(root, "public", "视频封面.jpg"),
  path.join(root, "public", "optimized", "视频封面.webp"),
  { maxWidth: 1600, quality: 72 },
);
await convertJpeg(
  path.join(root, "public", "首页最底图.jpg"),
  path.join(root, "public", "optimized", "首页最底图.webp"),
  { maxWidth: 1600, quality: 72 },
);

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(`Catalog: ${catalogFiles.length} files, ${mb(catalogResult.before)} MB -> ${mb(catalogResult.after)} MB`);
console.log(`Banners: ${bannerFiles.length} files, ${mb(bannerResult.before)} MB -> ${mb(bannerResult.after)} MB`);
