const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

imagemin(['assets/icons/svg/**/*.svg'], 'dist/svg', {
  use: [
    imageminSvgo({
      plugins: [
        {cleanupIDs: {remove: false}},
        {cleanupNumericValues: {floatPrecision: 2}},
        {removeStyleElement: true},
        {removeTitle: true},
        {removeViewBox: true}
      ],
      multipass: true
    })
  ]
}).then(function () {
  console.log('SVG-Icons were successfully optimized');
});