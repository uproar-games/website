/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#ebe8e2",
				secondary: "#121922",
				tertiary: "#6c333a",
				accent: "#e1565b",
				border_light: "#ebe7e080",
				border_dark: "#0f192333",
			},
		},
	},
	plugins: [],
};
