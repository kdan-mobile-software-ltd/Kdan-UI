module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "jest": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true,
      "arrowFunctions": true
    },
    "sourceType": "module"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  "rules": {
    "prettier/prettier": ["error", {"jsxSingleQuote": false}],
  }
}
