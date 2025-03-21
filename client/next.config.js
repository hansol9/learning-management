/**  @types {import('next').NextConfig}  */
const nextConfig = {
  eslint: {
    // ESLint 에러가 있어도 빌드 진행
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
