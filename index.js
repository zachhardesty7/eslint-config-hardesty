module.exports = {
	extends: [
		'eslint-config-airbnb',
		'eslint-config-standard',
		'./rules.js',
	].map(require.resolve),
	rules: {}
}
