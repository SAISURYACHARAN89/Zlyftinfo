import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip TypeScript errors during build
    ignoreBuildErrors: true,
  },
  // Optional: Disable React strict mode if it causes warnings
  reactStrictMode: false,
  // Optional: Disable telemetry (just to clean logs)
  telemetry: false,
};

export default nextConfig;
