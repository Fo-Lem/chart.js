module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: '2021',
  },

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],

  plugins: ['vue'],

  rules: {
    rules: {
      //...
      'vue/require-default-prop': 'off',
    },
  },
};
