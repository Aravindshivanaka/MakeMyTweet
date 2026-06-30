const sharp = require('sharp');
const fs = require('fs');

async function generateIcons() {
  const sourceImage = 'public/images/favicon_png.png';
  
  // Create 16x16 and 32x32 from the center "MY" block
  // The center block is approximately at y: 235, height: 236
  const centerCrop = await sharp(sourceImage)
    .extract({ left: 0, top: 235, width: 594, height: 236 })
    .toBuffer();

  // favicon-16x16.png
  await sharp(centerCrop)
    .resize(16, 16, { fit: 'cover' })
    .toFile('public/favicon-16x16.png');

  // favicon-32x32.png
  await sharp(centerCrop)
    .resize(32, 32, { fit: 'cover' })
    .toFile('public/favicon-32x32.png');

  // Generate favicon.ico (combining 16 and 32 or just use 32)
  // Sharp doesn't support writing .ico directly, we can use 32x32 png renamed, or just the png format.
  // Actually, many modern browsers accept a png named as .ico. 
  // Let's just create a 32x32 PNG and name it favicon.ico.
  await sharp(centerCrop)
    .resize(32, 32, { fit: 'cover' })
    .toFile('public/favicon.ico');

  // Create larger icons using the full logo
  // apple-touch-icon.png (180x180)
  await sharp(sourceImage)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile('public/apple-touch-icon.png');

  // android-chrome-192x192.png
  await sharp(sourceImage)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile('public/android-chrome-192x192.png');

  // android-chrome-512x512.png
  await sharp(sourceImage)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile('public/android-chrome-512x512.png');

  console.log("Icons generated successfully.");
}

generateIcons().catch(console.error);
