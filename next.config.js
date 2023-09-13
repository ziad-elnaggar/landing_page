/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: ["class", '[data-theme="dark"]'],
  eslint: {
    ignoreDuringBuilds: truncate
  },

  async redirects() {
    return [
      {
          source: '/',
          destination: '/en',
          permanent: false,
        },
        
    ];
  },
  };
  
  

module.exports = nextConfig
