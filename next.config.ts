import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Static export — required for GitHub Pages (no Node.js server).
   * Generates pure HTML/CSS/JS files into the `out/` directory.
   */
  output: "export",

  /*
   * Custom subdomain hosting (spear.thecodeconsortium.com) serves from root,
   * so basePath and assetPrefix are not needed.
   */
  basePath: "",
  assetPrefix: "",

  /*
   * Trailing slash — GitHub Pages resolves routes correctly as /about/index.html
   */
  trailingSlash: true,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },

  experimental: {},

  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;