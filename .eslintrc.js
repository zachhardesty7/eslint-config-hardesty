// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  // TODO: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },

  // https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
  plugins: ['@babel', 'jsdoc', 'optimize-regex', 'markdown', 'unicorn'],

  extends: [
    'airbnb',
    'standard',
    'airbnb/hooks',
    'plugin:jsdoc/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],

  env: {
    es2021: true,
    browser: true,
    node: true,
  },

  settings: {
    jsdoc: {
      mode: 'typescript',
      ignorePrivate: true,
      preferredTypes: {
        '*': false,
      },
    },
  },

  rules: {
    // #region - unicorn
    // https://github.com/sindresorhus/eslint-plugin-unicorn
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
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignorePattern: '^ \\* @.+',
        ignoreStrings: true,
      },
    ],
    'optimize-regex/optimize-regex': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'standard/array-bracket-even-spacing': 'off',
    'standard/computed-property-even-spacing': 'off',
    'standard/object-curly-even-spacing': 'off',
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
    // #region - jsdoc
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-allow-private-to-disable-rules-for-that-comment-block
    'jsdoc/check-syntax': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        exemptEmptyFunctions: true,
      },
    ],
    // incorrectly reports bolded words (eg **NOTE**)
    'jsdoc/no-multi-asterisks': ['warn', { preventAtMiddleLines: false }],
    // use temporarily until `types.d.ts` can be processed
    'jsdoc/no-undefined-types': 'off',
    // include typescript globals https://www.typescriptlang.org/docs/handbook/utility-types.html
    // 'jsdoc/no-undefined-types': ['warn', { definedTypes: ['Partial', 'Readonly',
    // 'Record', 'Pick', 'Omit', 'Exclude', 'Extract', 'NonNullable', 'Parameters',
    // 'ConstructorParameters', 'ReturnType', 'InstanceType', 'Required',
    // 'ThisParameterType', 'OmitThisParameter', 'ThisType'] }],

    // handled by prettier
    'jsdoc/tag-lines': 'off',
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
  ],
}
