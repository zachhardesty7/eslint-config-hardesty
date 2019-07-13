module.exports = {
	extends: [
		// 'eslint-plugin-promise/recommended',
		'eslint-config-airbnb',
		'eslint-config-standard',
		'./rules.js',
	].map(require.resolve),
	rules: {}
}
