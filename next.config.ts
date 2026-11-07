import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // YouTube thumbnails on the Beat the Lightning collection pages are
  // resized by Next.js so phones download small images
  images: {
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
  // Beat The Lightning game: a self-contained page in public/lightning/
  async rewrites() {
    return [{ source: "/lightning", destination: "/lightning/index.html" }];
  },
};

export default nextConfig;
