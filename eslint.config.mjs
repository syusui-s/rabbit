import eslint from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11Y from 'eslint-plugin-jsx-a11y';
import pluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import pluginSolid from 'eslint-plugin-solid';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import typescriptEslint, {
  configs as typescriptEslintConfigs,
  parser as typescriptEslintParser,
} from 'typescript-eslint';

export default typescriptEslint.config(
  {
    ignores: ['dist/', 'node_modules/'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  eslint.configs.recommended,
  typescriptEslintConfigs.recommended,
  pluginSolid.configs['flat/typescript'],
  pluginJsxA11Y.flatConfigs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  ...pluginTailwindcss.configs['flat/recommended'],
  configPrettier,
  {
    plugins: {
      'no-relative-import-paths': pluginNoRelativeImportPaths,
    },
    settings: {
      'import/resolver': {
        typescript: {
          extensions: ['.json', '.ts', '.tsx', '.d.ts'],
        },
      },
      'jsx-a11y': {
        attributes: {
          for: ['for'],
        },
      },
      linkComponents: ['Link'],
      tailwindcss: {
        whitelist: [
          'h-fill-available',
          'form-input',
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
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'solid-js*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/',
              group: 'internal',
              position: 'before',
            },
          ],
        },
      ],
      'no-alert': ['off'],
      'no-console': ['off'],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          rootDir: 'src',
          prefix: '@',
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash',
              message: 'please use lodash/... instead',
            },
            {
              name: 'nostr-tools',
              message: 'please use nostr-tools/... instead',
            },
          ],
        },
      ],
      'tailwindcss/classnames-order': 'error',
    },
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      'func-names': 'off',
    },
  },
);
