module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-shadow': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'react/button-has-type': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['Input'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': 2,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
