import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Beat The Lightning game: a self-contained page in public/lightning/
  async rewrites() {
    return [{ source: "/lightning", destination: "/lightning/index.html" }];
  },
};

export default nextConfig;
