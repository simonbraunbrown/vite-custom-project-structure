module.exports = {
	content: ['./templating/**/*.html', './templating/src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
			{
				candystore: {
					primary: '#d84187',

					secondary: '#bf8518',

					accent: '#8ae278',

					neutral: '#342B3B',

					'base-100': '#FFFFFF',

					'base-200': '#c3c3c3',

					'base-300': '#707070',

					info: '#8B9DDF',

					success: '#146B43',

					warning: '#FC9A31',

					error: '#E1234C',
					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '0.95', // scale transform of button when you focus on it
					'--border-btn': '1px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem', // border radius of tabs
				},
				candystoredark: {
					primary: '#947dce',

					secondary: '#eacc70',

					accent: '#e031d4',

					neutral: '#22272A',

					'base-100': '#40484F',

					'base-200': '#2e3439',

					'base-300': '#22252a',

					info: '#83C7E7',

					success: '#119258',

					warning: '#EEA83F',

					error: '#D92656',
				},
			},
			'light',
			'black',
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'candystoredark',
	},
};
