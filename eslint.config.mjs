import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import eslintConfigPrettier from "eslint-config-prettier"
import vueParser from "vue-eslint-parser"

export default [
  // 1. Global ignores (replaces .eslintignore)
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "**/.nuxt/**",
      "**/.output/**"
    ]
  },

  // 2. Base JavaScript Setup
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,

  // 3. TypeScript Setup (For Elysia & Nuxt)
  ...tseslint.configs.recommended,

  // 4. Vue Setup (For Nuxt)
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        sourceType: "module"
      }
    },
    rules: {
      // Nuxt uses multi-word component names, but pages often don't. Disable this pain.
      "vue/multi-word-component-names": "off"
    }
  },

  {
    files: ["**/*.vue"],
    rules: {
      "no-undef": "off"
    }
  },

  // 5. Prettier Override (Must be last)
  eslintConfigPrettier
]
