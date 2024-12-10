/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches all hostnames
      },
    ],
  },
  experimental: {
    appDir: true, // Only if using the App Router
  },
  future: {
    webpack5: true, // Explicitly use Webpack
  },
};

export default nextConfig;