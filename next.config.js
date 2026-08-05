/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.vercel.app' },
      { protocol: 'https', hostname: '**.vercel.dev' },
    ],
  },
};

module.exports = nextConfig;
