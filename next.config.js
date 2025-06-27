/** @type {import('next').NextConfig} */
const path = require("path");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['portfolio-55a42.web.app', 'res.cloudinary.com'],
    unoptimized: true
  },
  output: 'export'
};

module.exports = nextConfig;