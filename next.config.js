/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Set this to your repo name if deploying to github.io/repo-name
  // Remove if using a custom domain
  basePath: '/green-with-giri',
  assetPrefix: '/green-with-giri/',
};

module.exports = nextConfig;
