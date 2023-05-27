/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary_text: "#495057",
				border_color: "#f0eff5",
				primary_bg: "#7269ef",
				secondary_bg: "#f5f7fb",
				icon_color: "#878a92",
				f7: "#f7f7ff",
			},
			screens: {
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1024px",
			},
		},
	},
	plugins: [],
};
