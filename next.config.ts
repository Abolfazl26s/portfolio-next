/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abolfazl26s.github.io",
        port: "",
        pathname: "/project_data/images/**", // این بخش برای امنیت بیشتر است
      },
    ],
  },
};

module.exports = nextConfig;
