/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Required for Docker deployment
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
