
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/"
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === 'development',
    register: true,
    sw: '/sw.js',
    skipWaiting: true,
  },
});
