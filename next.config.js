const withPreact = require('next-plugin-preact');

const nextConfig = withPreact({
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/workshops',
        destination: '/workshops/ai-agents',
        permanent: false,
      },
    ];
  },
});

module.exports = nextConfig;
