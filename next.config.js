//const withPrefresh = require('@prefresh/next');
const withPWA = require('next-pwa');

const preact = require('preact');
const withPreact = require('next-plugin-preact');
const withClassNamesMap = require('@nico-martin/class-names-map/nextjs.js');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, e) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const config = withPreact(
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
      redirects: async () => {
        return [
          {
            source: '/m',
            destination: 'https://mas.to/@nicomartin',
            permanent: false,
          },
        ];
      },
    })
  );

  if (isDev) {
    return config;
  }
  return withPWA(config);
};
