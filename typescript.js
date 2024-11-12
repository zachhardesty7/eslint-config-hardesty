// TODO: review https://github.com/xojs/eslint-config-xo/blob/main/browser.js

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict-type-checked.ts
    'plugin:@typescript-eslint/strict-type-checked',
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/stylistic-type-checked.ts
    'plugin:@typescript-eslint/stylistic-type-checked',
    // https://github.com/prettier/eslint-config-prettier - includes:
    // - https://github.com/prettier/eslint-config-prettier/blob/main/index.js
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      // https://github.com/gajus/eslint-plugin-jsdoc/blob/288f0ae5d45183321493131ecf8c377fd6a5a5f3/src/index.js#L221
      extends: ['plugin:jsdoc/recommended-typescript', './chunks/jsdoc.js'],
      rules: {
        // REVIEW: fixes `no-unused-vars` false positives for type only imports for jsdoc! `disableReporting` prevents false positive problems by not actually running the rule, just marking types as used for jsdoc
        'jsdoc/no-undefined-types': ['warn', { disableReporting: true }],
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
    // we don't allow non-nullable assertions, so this sometimes autofixes into an error
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-floating-promises': 'off', // false positives in try/catch & more
    // allow numbers since they're always readable & it's extremely unlikely someone overrode the `.toString()` method
    // REVIEW: preferably should allow `Date` since it produces a readable string
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],
  },
}

module.exports = config
