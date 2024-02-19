module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
      parser: "@typescript-eslint/parser",
      project: "./tsconfig.json",
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
  },
}
