const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');
const withImages = require('next-images');

module.exports = withPreact({
  experimental: {
    modern: true,
  },
  images: {},
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
