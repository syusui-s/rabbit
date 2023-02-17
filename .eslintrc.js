module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:solid/typescript',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
  },
  plugins: ['import', 'solid', 'jsx-a11y', 'prettier', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'prettier/prettier': 'error',
  },
  settings: {
    linkComponents: ['Link'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'src/types/**', group: 'internal', position: 'before' },
          {
            pattern: 'src/repositories/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    tailwindcss: {
      whitelist: ['form-input'],
    },
  },
  overrides: [
    {
      files: ['*.test.ts'],
      rules: {
        // See https://mochajs.org/#arrow-functions
        'func-names': 'off',
      },
    },
  ],
};
