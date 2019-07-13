module.exports = {
  extends: [
    // 'plugin:promise/recommended',
    'eslint-config-airbnb',
    'eslint-config-standard',
    './rules.js',
  ].map(require.resolve),
  rules: {}
};
