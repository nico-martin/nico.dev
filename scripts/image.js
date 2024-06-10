const path = require('path');
const SIZES = [500, 700, 1000, 1500, 2000];
const im = require('imagemagick');

const image = path.dirname(__filename) + '/../public/img/nico-martin.jpeg';

im.resize(
  {
    srcPath: image,
    dstPath: path.dirname(__filename) + `/../public/img/nico-martin-thumb.jpeg`,
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
      dstPath:
        path.dirname(__filename) + `/../public/img/nico-martin-${size}.jpeg`,
      width: size,
    },
    function (err, stdout, stderr) {
      if (err) throw err;
      console.log('generated ' + size + 'px image');
      im.convert(
        [
          path.dirname(__filename) + `/../public/img/nico-martin-${size}.jpeg`,
          '-strip',
          path.dirname(__filename) + `/../public/img/nico-martin-${size}.webp`,
        ],
        function (err, stdout, stderr) {
          if (err) throw err;
          console.log('generated ' + size + 'px webp image');
        }
      );
      im.convert(
        [
          path.dirname(__filename) + `/../public/img/nico-martin-${size}.jpeg`,
          '-strip',
          path.dirname(__filename) + `/../public/img/nico-martin-${size}.avif`,
        ],
        function (err, stdout, stderr) {
          if (err) throw err;
          console.log('generated ' + size + 'px avif image');
        }
      );
    }
  );
});
