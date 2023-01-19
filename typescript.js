// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [],
  ignorePatterns: '*.js',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
      },
    },
  ],
  rules: {
    // REVIEW: eslint-import-resolver-node
    'no-unused-vars': 'off',
    quotes: 'off',
    semi: 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-var-requires': 'off',
    'promise/catch-or-return': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    // REVIEW: jsdoc commenter rules
    // 'unicorn/import-style': 'off',
  },
}
