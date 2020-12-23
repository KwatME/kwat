module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    yoda: [2, "never", { onlyEquality: true }],
    "prefer-destructuring": ["error", { object: false, array: false }],
    "react/prop-types": 0,
  },
};
