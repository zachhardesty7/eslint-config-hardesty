module.exports = {
  // parser: 'babel-eslint',
  // TODO: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // "project": "./tsconfig.json" // <-- Point to your project's tsconfig.json or create new one
  },
  plugins: ['@typescript-eslint', 'jsdoc', 'optimize-regex', 'markdown'],

  extends: [
    'plugin:@typescript-eslint/recommended',
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
      mode: 'typescript',
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

    // misc & recommended overrides
    // 'no-unused-vars': 'warn', // overridden via TS
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
    'import/namespace': 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'space-before-function-paren': ['error', 'never'],

    // typescript
    'no-unused-vars': 'off',
    quotes: 'off',
    // note you must disable the base rule as it can report incorrect errors
    semi: 'off',
    '@typescript-eslint/semi': [
      'error',
      'never',
      { beforeStatementContinuationChars: 'always' },
    ],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        // default
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // only use in TS, see below override
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // jsdoc
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-allow-private-to-disable-rules-for-that-comment-block
    'jsdoc/check-syntax': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        exemptEmptyFunctions: true,
      },
    ],
    // use temporarily until `types.d.ts` can be processed
    'jsdoc/no-undefined-types': 'off',
    // include typescript globals https://www.typescriptlang.org/docs/handbook/utility-types.html
    // 'jsdoc/no-undefined-types': ['warn', { definedTypes: ['Partial', 'Readonly',
    // 'Record', 'Pick', 'Omit', 'Exclude', 'Extract', 'NonNullable', 'Parameters',
    // 'ConstructorParameters', 'ReturnType', 'InstanceType', 'Required',
    // 'ThisParameterType', 'OmitThisParameter', 'ThisType'] }],
  },

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
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
