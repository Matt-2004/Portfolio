/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress response bodies
  compress: true,
  // Enables deeper SWC minification and drops bundle sizes for heavier packages
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-github-calendar",
    ],
  },
  images: {
    qualities: [75, 85, 90, 95],
  },
};

export default nextConfig;
