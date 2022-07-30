module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true, optionalDependencies: false, peerDependencies: false },
		],
	},
};
