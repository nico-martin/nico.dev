const path = require('path');
const SIZES = [500, 700, 1000, 1500, 2000];
const im = require('imagemagick');

const folder = path.dirname(__filename) + '/../public/img-67t723';
const image = `${folder}/nico-martin.jpeg`;
const imageSizeName = (size, ext = 'jpeg') =>
  `${folder}/nico-martin-${size}.${ext}`;

im.resize(
  {
    srcPath: image,
    dstPath: imageSizeName('thumb'),
    width: 50,
    quality: 0.2,
  },
  function (err, stdout, stderr) {
    if (err) throw err;
    console.log('generated thumb image');
  }
);

SIZES.forEach((size) => {
  im.resize(
    {
      srcPath: image,
      dstPath: imageSizeName(size),
      width: size,
    },
    function (err, stdout, stderr) {
      if (err) throw err;
      console.log('generated ' + size + 'px image');
      im.convert(
        [imageSizeName(size), '-strip', imageSizeName(size, 'webp')],
        function (err, stdout, stderr) {
          if (err) throw err;
          console.log('generated ' + size + 'px webp image');
        }
      );
      im.convert(
        [imageSizeName(size), '-strip', imageSizeName(size, 'avif')],
        function (err, stdout, stderr) {
          if (err) throw err;
          console.log('generated ' + size + 'px avif image');
        }
      );
    }
  );
});
