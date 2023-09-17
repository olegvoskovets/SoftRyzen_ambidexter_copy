/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds (next build)
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
