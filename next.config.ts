import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blackwateraquatics.ca",
      },
    ],
  },
};

export default nextConfig;