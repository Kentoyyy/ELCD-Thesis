//edit tailwind.config.ts
import type { Config } from 'tailwindcss'
import { title } from "process";
import { Montserrat } from 'next/font/google';
 
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'primary-color': '#0D7C66', 
        'secondary-color': '#41B3A2',
        'third-color': '#BDE8CA',
        'sub-color': '#000',
        'ghost-white': '#f8f8ff',
      },
      fontFamily:{
        title:["Roboto", "sans-serif"],
        robotoserif:["Roboto Serf", "serif"],
        Montserrat:["Montserrat", "sans-serif"],
        HeadlineFontRoboto: ["Roboto" , "serif"],
      }
    },
  },
  plugins: [require('daisyui')],
}
export default config