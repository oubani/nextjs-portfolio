module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,tsx,jsx}',
		'./sections/**/*.{js,ts,tsx,jsx}',
		'./components/**/*.{js,ts,tsx,jsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
