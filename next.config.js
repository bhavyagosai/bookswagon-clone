/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["https://pixabay.com/"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:5000/api/:slug*",
      },
    ];
  },
};
