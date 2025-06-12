import type { NextConfig } from "next";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Add bundle analyzer to identify large packages
  webpack: (config, { isServer, dev }) => {
    // Only run bundle analyzer in production build
    if (!dev && !isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
  // Configure image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-robots-tag',
            value: 'index, follow', 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
