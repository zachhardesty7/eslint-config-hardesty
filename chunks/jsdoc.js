/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  settings: {
    jsdoc: {
      ignorePrivate: true,
      preferredTypes: {
        '*': false,
      },
    },
  },

  rules: {
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-allow-private-to-disable-rules-for-that-comment-block
    'jsdoc/check-syntax': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        exemptEmptyFunctions: true,
      },
    ],
    // TS inferred types are often enough
    'jsdoc/require-returns': 'off',
    // incorrectly reports bolded words (eg **NOTE**)
    'jsdoc/no-multi-asterisks': ['warn', { preventAtMiddleLines: false }],
    // handled by prettier
    'jsdoc/tag-lines': 'off',
  },
}
