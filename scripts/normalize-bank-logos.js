import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GIVE_DIR = path.join(__dirname, '../public/give');

const LOGO_CONFIGS = [
  {
    filename: 'axis_bank_logo.png',
    targetHeight: 76,
    description: 'Axis Bank (Aspect Ratio ~3.96:1)'
  },
  {
    filename: 'hdfc_bank_logo.png',
    targetHeight: 72,
    description: 'HDFC Bank (Aspect Ratio ~5.88:1)'
  },
  {
    filename: 'icici_bank_logo.png',
    targetHeight: 76,
    description: 'ICICI Bank (Aspect Ratio ~4.98:1)'
  }
];

const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 120;

async function normalizeLogos() {
  console.log('=== Normalizing Bank Logos ===');
  console.log(`Canvas dimensions: ${CANVAS_WIDTH}x${CANVAS_HEIGHT}px (Transparent)\n`);

  const results = [];

  for (const config of LOGO_CONFIGS) {
    const inputPath = path.join(GIVE_DIR, 'orig_' + config.filename);
    const outputPath = path.join(GIVE_DIR, config.filename);

    if (!fs.existsSync(inputPath)) {
      fs.copyFileSync(outputPath, inputPath);
    }

    // 1. Trim transparent borders
    const trimmed = await sharp(inputPath).trim().toBuffer({ resolveWithObject: true });
    
    // 2. Resize to target height maintaining aspect ratio
    const resized = await sharp(trimmed.data)
      .resize({
        height: config.targetHeight,
        width: CANVAS_WIDTH - 20, // ensure padding on edges if wide
        fit: 'inside'
      })
      .toBuffer({ resolveWithObject: true });

    // 3. Composite centered onto standardized canvas
    const composited = await sharp({
      create: {
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{
        input: resized.data,
        gravity: 'center'
      }])
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toBuffer();

    // 4. Save to destination
    fs.writeFileSync(outputPath, composited);

    const meta = await sharp(outputPath).metadata();

    results.push({
      file: config.filename,
      trimmed: `${trimmed.info.width}x${trimmed.info.height}`,
      markResized: `${resized.info.width}x${resized.info.height}`,
      finalCanvas: `${meta.width}x${meta.height}`,
      fileSize: `${Math.round(composited.length / 1024)} KB`
    });
  }

  console.table(results);

  // Generate a preview grid showing how all 3 look on white cards
  const cardWidth = 240;
  const cardHeight = 80;
  const gap = 20;
  const previewWidth = cardWidth * 3 + gap * 4;
  const previewHeight = cardHeight + gap * 2;

  const cardComposites = [];

  for (let i = 0; i < LOGO_CONFIGS.length; i++) {
    const logoBuffer = fs.readFileSync(path.join(GIVE_DIR, LOGO_CONFIGS[i].filename));
    const cardLogo = await sharp(logoBuffer)
      .resize(200, 54, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    // Create a card box with light gray border
    const cardBg = await sharp({
      create: {
        width: cardWidth,
        height: cardHeight,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
      .composite([{
        input: cardLogo,
        gravity: 'center'
      }])
      .png()
      .toBuffer();

    cardComposites.push({
      input: cardBg,
      left: gap + i * (cardWidth + gap),
      top: gap
    });
  }

  await sharp({
    create: {
      width: previewWidth,
      height: previewHeight,
      channels: 4,
      background: { r: 243, g: 244, b: 246, alpha: 1 } // Tailwind gray-100
    }
  })
    .composite(cardComposites)
    .png()
    .toFile(path.join(GIVE_DIR, 'logos_normalized_preview.png'));

  console.log(`\nVerification preview saved to: ${path.join(GIVE_DIR, 'logos_normalized_preview.png')}`);
}

normalizeLogos().catch(err => {
  console.error('Error normalizing logos:', err);
  process.exit(1);
});
