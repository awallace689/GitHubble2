module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [".eslintrc.cjs"],
  parserOptions: {
      parser: "@typescript-eslint/parser",
      project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  rules: {
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
  },
};
