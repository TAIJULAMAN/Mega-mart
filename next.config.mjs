/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "standalone",
    reactStrictMode: false,
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
          pathname: "**",
        },
        {
          protocol: "http",
          hostname: "**",
          pathname: "**",
        },
      ],
      formats: ["image/avif", "image/webp"],
    },
  };
  
  export default nextConfig;