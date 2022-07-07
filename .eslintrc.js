module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: { '@typescript-eslint/no-var-requires': ['off'] },
    },
  ],
};
