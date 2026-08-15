import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/Grey_School" : "",
  assetPrefix: isGitHubPages ? "/Grey_School/" : undefined,
  turbopack: {
    root: process.env.GREY_RUNTIME_ROOT ?? process.cwd(),
  },
  outputFileTracingRoot: process.env.GREY_RUNTIME_ROOT ?? process.cwd(),
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
