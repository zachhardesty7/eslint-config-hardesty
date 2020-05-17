module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'jsdoc',
    'optimize-regex',
    'markdown',
  ],

  extends: [
    'airbnb',
    'standard',
    'airbnb/hooks',
    'plugin:jsdoc/recommended',
  ],

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  globals: {
    fetch: true,
  },

  settings: {
    jsdoc: {
      ignorePrivate: true,
      preferredTypes: {
        '*': false,
      },
    },
  },

  rules: {
    // react
    'react/state-in-constructor': ['warn', 'never'],
    'react/prop-types': [
      'warn',
      {
        skipUndeclared: true,
      },
    ],
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'react/jsx-indent': [
      'error',
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'no-unused-vars': 'warn',
    'standard/array-bracket-even-spacing': 'off',
    'standard/computed-property-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
    'optimize-regex/optimize-regex': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'no-param-reassign': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/always-return': 'warn',
    'import/prefer-default-export': 'off',
    'import/namespace': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-allow-private-to-disable-rules-for-that-comment-block
    'jsdoc/check-syntax': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': [
      'warn', {
        exemptEmptyFunctions: true,
      },
    ],
  },

  overrides: [{
    files: ['**/*.md'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-no-undef': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-indent-props': 'off',
      indent: 'off',
      semi: 'off',
      'no-unused-expressions': 'off',
    },
  }],
}
