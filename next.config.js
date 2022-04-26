/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const nextTranslate = require('next-translate')
module.exports = nextTranslate({
  webpack: (nextConfig, { isServer, webpack }) => {
    return nextConfig;
  }
})