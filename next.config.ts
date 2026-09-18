import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd && repoName ? `/${repoName}` : "",
  assetPrefix: isProd && repoName ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
