import type { Config } from 'tailwindcss'

const config: Config = {

  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      '4xl': { min: '1919px' },
      '3xl': { min: '1880px' },
      '2xl': { min: '1535px' },
      '1.5xl': { min: '1360px' },
      // => @media (min-width: 1535px) { ... }
      xl: { min: '1280px' },
      // => @media (min-width: 1279px) { ... }
      lg: { min: '1023px' },
      upLg: { min: '1023px', max: '1365px' },
      upMobileScreen: { min: '831px' },
      // => @media (min-width: 1023px) { ... }
      mobileScreen: { max: '830px' },
      md: { min: '768px' },
      // => @media (min-width: 767px) { ... }
      sm: { min: '600px' },
      // => @media (min-width: 639px) { ... }
      xs: { max: '599px' },
      xxs: { max: '400px' },
  },
  },
  plugins: [],
}
export default config
