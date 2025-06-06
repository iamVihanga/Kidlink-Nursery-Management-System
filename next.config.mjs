import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kidlink.s3.ap-south-1.amazonaws.com"
      }
    ]
  }
};

export default withPlaiceholder(nextConfig);
