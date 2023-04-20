/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['api.omise.co'],
  },
};

module.exports = nextConfig;
