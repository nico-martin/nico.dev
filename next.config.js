const withPrefresh = require('@prefresh/next');
const withPWA = require('next-pwa');

const preact = require('preact');
const withPreact = require('next-plugin-preact');
const withClassNamesMap = require('@nico-martin/class-names-map/nextjs.js');

module.exports = withPWA(
  withPreact(
    withClassNamesMap({
      pwa: {
        dest: 'public',
      },
      classNamesMap: {
        separator: '',
      },
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
    })
  )
);
