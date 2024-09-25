/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			blue: '#2997FF',
  			gray: {
  				'100': '#94928d',
  				'200': '#afafaf',
  				'300': '#42424570',
  				DEFAULT: '#86868b'
  			},
  			zinc: '#101010'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"]
    }
  }
};
