module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SheredArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {}, // Adicione esta linha
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'default-param-last': 0,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-plusplus': 0,
    'no-unused-vars': 0, // descomentar depois
    'empty-function': 0, // descomentar depois
    'consistent-return': 0,
    'react/no-unescaped-entities': 0,
    'no-promise-executor-return': 0,
    'react/self-closing-comp': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-duplicates': 0,
    'no-nested-ternary': 0,
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    camelcase: 0,
    'react/function-component-definition': 0, // deletar depois
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
  },
};
