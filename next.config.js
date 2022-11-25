/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.notion.so"],
  },
};
const { i18n } = require("./next-i18next.config");
module.exports = {
  i18n,
};
// module.exports = {
//   i18n: {
//     locales: ['en','kr'],
//     defaultLocale: 'en-US',
//   },
// }
module.exports = nextConfig;
