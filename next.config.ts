import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    preloadEntriesOnStart: false,
    webpackMemoryOptimizations: true,
    turbopackFileSystemCacheForDev: false,
  },
  transpilePackages: ["lucide-react", "framer-motion"],
};

export default nextConfig;