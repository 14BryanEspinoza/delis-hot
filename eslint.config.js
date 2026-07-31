import js from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-throw-literal": "error",
      "prefer-template": "warn",
    },
  },

  {
    ignores: ["node_modules/", ".git/", ".github/"],
  },

  prettierConfig,
];
