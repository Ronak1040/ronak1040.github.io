/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"]
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  experimental: {
    optimizePackageImports: ["@radix-ui/react-switch", "@radix-ui/react-slot", "@radix-ui/react-progress"],
  },
};

export default nextConfig;
