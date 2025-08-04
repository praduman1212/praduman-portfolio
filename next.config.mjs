/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber', 'three-mesh-bvh'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'three-mesh-bvh': false,
    };
    return config;
  },
};

export default nextConfig;
