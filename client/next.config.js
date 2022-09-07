/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: true,
    };

    return config;
  },
};

module.exports = nextConfig;
