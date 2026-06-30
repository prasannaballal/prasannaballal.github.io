/* eslint-env node */
const path = require('path');

const nextConfig = {
  turbopack: {},
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  trailingSlash: false,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'images.unsplash.com'},
      {protocol: 'https', hostname: 'source.unsplash.com'},
    ],
  },
};

module.exports = nextConfig;
