/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.notion.so", "i.ibb.co"],
  },
  i18n,
};

module.exports = nextConfig;

// module.exports = {
//   i18n,
// };
