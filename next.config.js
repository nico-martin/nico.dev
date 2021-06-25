const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');
const withImages = require('next-images');

module.exports = withPreact(
  withImages({
    experimental: {
      modern: true,
    },
    images: {},
  })
);
