/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exportTrailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
