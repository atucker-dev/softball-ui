module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "eslint:recommended", // Use the recommended rules from ESLint
    "plugin:@typescript-eslint/recommended", // Use the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:astro/recommended", // Use the recommended rules from eslint-plugin-astro
  ],
  rules: {
    "semi": ["error", "always"], // Require semicolons at the end of statements
    "no-unused-vars": ["warn"], // Warn about variables that are declared but not used
    "no-console": ["warn"], // Warn when console statements are used
    "indent": ["error", 2], // Enforce 2-space indentation


