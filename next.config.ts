import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root: without this, Turbopack walks up past the repo and
  // picks up the parent Cafena app's middleware and lockfiles.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
