module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
	],
	'rules': {
		'react/jsx-filename-extension': [
			'error',
			{ extensions: ['.js', '.jsx'] },
		],
		/*'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'double'
		],
		'semi': [
			'error',
			'always'
		]*/
	}
};
