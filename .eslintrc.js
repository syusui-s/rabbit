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
  plugins: [
    'import',
    'no-relative-import-paths',
    'solid',
    'jsx-a11y',
    '@typescript-eslint',
    'tailwindcss',
  ],
  rules: {
    'no-alert': ['off'],
    'no-console': ['off'],
    'no-relative-import-paths/no-relative-import-paths': ['error', { rootDir: 'src', prefix: '@' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          { pattern: 'solid-js*', group: 'external', position: 'before' },
          { pattern: '@/', group: 'internal', position: 'before' },
        ],
      },
    ],
    // disabled because jsx-a11y doesn't recognize <label for=...>
    'jsx-a11y/label-has-associated-control': ['off'],
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
    tailwindcss: {
      whitelist: [
        'h-fill-available',
        'form-input',
        // rabbit parts
        'nostr-textnote',
        'author',
        'author-icon',
        'author-name',
        'author-username',
        'created-at',
        'actions',
        'content',
        'profile',
        'profile-icon',
        'profile-name',
        'profile-username',
        'notification-icon',
        'notification-user',
        'notification-event',
        'twitter-tweet',
      ],
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
