# eslint-config-hardesty

This package provides Zach Hardesty's .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-hardesty@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-hardesty
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-hardesty@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.
2. Add `"extends": "hardesty"` to your .eslintrc

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
