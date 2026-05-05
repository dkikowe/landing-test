import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const MAX_EDGE = 2200;
const JPEG_QUALITY = 78;
const WEBP_QUALITY = 76;
const PNG_QUALITY = 80;
const SKIP_FILES = new Set(["logowhite.png", "engineering_intro.png", "intro_kompetencii.png"]);
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const bytesToMb = (bytes) => (bytes / 1024 / 1024).toFixed(2);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTS.has(ext) || SKIP_FILES.has(entry.name)) continue;
    files.push(fullPath);
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const input = sharp(filePath, { sequentialRead: true });
  const metadata = await input.metadata();

  const resizeOptions =
    metadata.width && metadata.height
      ? {
          width: metadata.width > metadata.height ? MAX_EDGE : null,
          height: metadata.height >= metadata.width ? MAX_EDGE : null,
          fit: "inside",
          withoutEnlargement: true,
        }
      : undefined;

  let pipeline = sharp(filePath, { sequentialRead: true, limitInputPixels: false });
  if (resizeOptions) {
    pipeline = pipeline.resize(resizeOptions);
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });
  } else if (ext === ".png") {
    pipeline = pipeline.png({
      quality: PNG_QUALITY,
      compressionLevel: 9,
      adaptiveFiltering: true,
      effort: 10,
      palette: metadata.hasAlpha ? false : true,
    });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY, effort: 6 });
  }

  const tempPath = `${filePath}.tmp`;
  await pipeline.toFile(tempPath);
  await fs.rename(tempPath, filePath);
}

async function main() {
  const files = await walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const before = (await fs.stat(file)).size;
    totalBefore += before;
    await optimizeImage(file);
    const after = (await fs.stat(file)).size;
    totalAfter += after;
    const change = (((before - after) / before) * 100).toFixed(1);
    console.log(`${path.relative(process.cwd(), file)}: ${bytesToMb(before)}MB -> ${bytesToMb(after)}MB (${change}% saved)`);
  }

  const saved = totalBefore - totalAfter;
  const savedPct = ((saved / totalBefore) * 100).toFixed(1);
  console.log("\nOptimization complete");
  console.log(`Before: ${bytesToMb(totalBefore)}MB`);
  console.log(`After:  ${bytesToMb(totalAfter)}MB`);
  console.log(`Saved:  ${bytesToMb(saved)}MB (${savedPct}%)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
