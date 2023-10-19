/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"blue-one": "hsl(218, 23%, 16%)",
				"blue-two": "hsl(217, 19%, 24%)",
				"blue-three": "hsl(217, 19%, 38%)",
				"neon-one": "hsl(150, 100%, 66%)",
			},
		},
	},
	plugins: [],
};
