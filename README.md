# eslint-config-hardesty

This package provides Zach Hardesty's .eslintrc as an extensible shared config.

[NPM Package Listing](https://npmjs.com/eslint-config-hardesty)

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires
`eslint`, `babel-eslint`. If you see strange errors, try adding `eslint-plugin-react` and/or
`escape-regex-string` as peer-dependencies. If you don't need React, see
[eslint-config-airbnb-base](https://npmjs.com/eslint-config-airbnb-base).

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-hardesty@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-hardesty
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "eslint-config-hardesty@latest" peerDependencies` to list the
  peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for
  each listed peer dependency.
2. Add `"extends": "hardesty"` to your .eslintrc or set `eslintConfig: { "extends": "hardesty" },`
   in your `package.json`.
   If you want to use Prettier, use `"hardesty/prettier"` instead. It's expected that
   you will also add the following to your `package.json`.

   ```json
   "prettier": {
     "semi": false
   },
    ```
