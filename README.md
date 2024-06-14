# eslint-config-hardesty

This package provides Zach Hardesty's `.eslintrc` as an extensible shared config.

[NPM Package Listing](https://npmjs.com/eslint-config-hardesty)

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React,
but excludes TypeScript. In the future, React may be split into a separate config in
this repo.

1. Ensure your project has `eslint` installed: `npm install eslint --save-dev`. Not all
   versions are compatible with this config.
2. Add `"extends": ["hardesty"]` to your .eslintrc or set
   `eslintConfig: { "extends": ["hardesty"] },` in your `package.json`.
   - If you're using TypeScript, additionally add `"hardesty/typescript"` as a new item
     in the "extends" array after `"hardesty"`.
