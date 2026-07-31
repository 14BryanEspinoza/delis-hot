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

      "no-constant-binary-expression": "error",
      "no-promise-executor-return": "error",
      "no-self-compare": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "require-atomic-updates": "error",

      "array-callback-return": "error",
      "block-scoped-var": "error",
      "default-case-last": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implied-eval": "error",
      "no-iterator": "error",
      "no-lone-blocks": "error",
      "no-new-wrappers": "error",
      "no-proto": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-unused-expressions": "error",
      "no-useless-concat": "error",
      "prefer-regex-literals": "error",
      "require-await": "warn",
      yoda: "error",

      "consistent-return": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-nested-ternary": "error",
      "no-unneeded-ternary": "error",
      "one-var": ["error", "never"],
      "prefer-destructuring": "warn",
      "prefer-object-spread": "error",
      "sort-imports": ["warn", { ignoreDeclarationSort: true }],
    },
  },

  {
    ignores: ["node_modules/", ".git/", ".github/"],
  },

  prettierConfig,
];
