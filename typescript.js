// TODO: review https://github.com/xojs/eslint-config-xo/blob/main/browser.js

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts
    'plugin:@typescript-eslint/strict-type-checked',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      extends: ['plugin:jsdoc/recommended-typescript', './chunks/jsdoc.js'],
      rules: {
        'jsdoc/require-param': 'off',
        'jsdoc/require-property': 'off',

        // rules that don't play nicely with javascript files
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
  rules: {
    // REVIEW: eslint-import-resolver-node
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-var-requires': 'off',
    'promise/catch-or-return': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    // REVIEW: jsdoc commenter rules
    // 'unicorn/import-style': 'off',

    '@typescript-eslint/no-floating-promises': 'off', // false positives in try/catch & more
  },
}

module.exports = config
