/** @type {import('next').NextConfig} */
const nextConfig = {
  darkMode: ["class", '[data-theme="dark"]'],

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
