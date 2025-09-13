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
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      }, // این را هم اضافه کنید
    ],
  },
};

module.exports = nextConfig;
