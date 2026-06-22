const sharp = require('sharp');
const path = require('path');

const source = path.join(__dirname, 'public', 'Logo.webp');

async function generate() {
  try {
    console.log('Generating PWA icons from:', source);
    
    // 192x192 app icon
    await sharp(source)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 11, g: 45, b: 107, alpha: 0 } // transparent background
      })
      .png()
      .toFile(path.join(__dirname, 'public', 'pwa-192x192.png'));
    console.log('Generated public/pwa-192x192.png');

    // 512x512 splash icon
    await sharp(source)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 11, g: 45, b: 107, alpha: 0 } // transparent background
      })
      .png()
      .toFile(path.join(__dirname, 'public', 'pwa-512x512.png'));
    console.log('Generated public/pwa-512x512.png');

    // apple-touch-icon 180x180 (iOS requires solid background, solid theme color #0B2D6B)
    await sharp(source)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 11, g: 45, b: 107, alpha: 1 }
      })
      .png()
      .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'));
    console.log('Generated public/apple-touch-icon.png');
    
    console.log('All icons generated successfully!');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generate();
