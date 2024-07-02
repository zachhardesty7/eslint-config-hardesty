// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  // TODO: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },

  // https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
  // TODO: fix markdown linting support, maybe split into separate config
  plugins: ['@babel', 'optimize-regex', 'markdown'],

  extends: [
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb',
    'standard',
    'airbnb/hooks',
    // https://github.com/gajus/eslint-plugin-jsdoc / https://github.com/gajus/eslint-plugin-jsdoc#rules
    'plugin:jsdoc/recommended-typescript-flavor',
    // https://github.com/sindresorhus/eslint-plugin-unicorn - https://github.com/sindresorhus/eslint-plugin-unicorn#rules
    'plugin:unicorn/recommended',
    './chunks/jsdoc.js',
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],

  env: {
    es2021: true,
    browser: true,
    node: true,
  },

  rules: {
    // #region - unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    // FIXME: DOM API supposed to implement, but doesn't so suggestion breaks code, see: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2098
    'unicorn/prefer-at': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/prefer-node-protocol': 'off', // too soon
    'unicorn/prefer-module': 'off', // too soon
    'unicorn/template-indent': 'off',
    // #endregion
    // #region - react
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
        extensions: ['.js', '.jsx'],
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
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    // #endregion
    // #region - misc & recommended overrides
    'no-unused-vars': 'warn', // overridden via TS
    // could be simplified since mostly only issue with JSDoc tags
    'optimize-regex/optimize-regex': 'warn',
    'no-console': 'off',
    'no-param-reassign': 'warn',
    'promise/catch-or-return': 'warn',
    'promise/always-return': 'warn',
    'import/prefer-default-export': 'off',
    'import/namespace': 'off', // <- warn
    /** `type="module"` requires ext, plus this is more style than anything else */
    'import/extensions': 'off',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'space-before-function-paren': ['error', 'never'],
    curly: ['error', 'all'],
    'max-statements-per-line': 'error',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    // #endregion
    // REVIEW: jsdoc commenter rules
    // 'unicorn/import-style': 'off',
    // 'promise/catch-or-return': 'off',

    // #region - imports
    'import/no-unresolved': 'off',
    // #endregion
  },

  overrides: [
    // {
    //   // enable the rule specifically for TypeScript files
    //   files: ['*.ts', '*.tsx'],
    //   rules: {
    //     '@typescript-eslint/explicit-module-boundary-types': ['error'],
    //   },
    // },
    {
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
    },
    {
      files: ['*.cjs', '*.mjs', '*.js', '*.jsx'],
      rules: {
        'jsdoc/require-param-description': 'off',
      },
    },
  ],
}
