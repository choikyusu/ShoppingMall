const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the custom server directory to the module search path
    config.resolve.modules.push(path.resolve("./server"));
    return config;
  },
};

module.exports = nextConfig;
