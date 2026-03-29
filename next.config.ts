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
  turbopack: {
    root: "/home/jarvis/msyntra-website",
  },
};

export default nextConfig;
