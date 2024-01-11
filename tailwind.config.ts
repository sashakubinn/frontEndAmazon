import type { Config } from 'tailwindcss'

const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#2E3239',
	gray: '#CDCDCD',
	white: twColors.white,
	primary: '#FF9902',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697',
	red: '#C81E28',
	thirdly: '#212927',
	purple: '#7D22EA',
}

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors,
		extend: {
			backgroundImage: {},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [],
}
export default config
