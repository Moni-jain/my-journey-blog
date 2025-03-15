/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/my-journey-blog' : '',
  images: { unoptimized: true },
};

module.exports = nextConfig;
