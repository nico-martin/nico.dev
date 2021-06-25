const path = require('path');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'styles/mixins'),
      },
    ],
    'autoprefixer',
    'postcss-preset-env',
  ],
};
