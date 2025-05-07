import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Allow Cloudinary images
  },
};

export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   trailingSlash: true, // 👈 IMPORTANT
// };

// export default nextConfig;
