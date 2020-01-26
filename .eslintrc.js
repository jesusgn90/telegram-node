module.exports = {
  root: true,

  env: {
    node: true,
  },

  // Not a Vue project, but I love its ESLint rules :)
  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
  ],

  // Nice for GitHub reviews, also add observers to Arrays
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: [
        '**/tests/unit/**/*',
      ],
      env: {
        jest: true,
      },
    },
  ]
}
