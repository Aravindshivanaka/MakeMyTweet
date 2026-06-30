const sharp = require('sharp');
sharp('public/images/favicon_png.png').metadata().then(metadata => {
  console.log(metadata);
});
