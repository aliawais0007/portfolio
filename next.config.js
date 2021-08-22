
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/"
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
