/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd-mobile"],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
