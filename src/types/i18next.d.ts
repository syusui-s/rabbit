import 'i18next';

import type ja from '@/locales/ja';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof ja;
    };
  }
}
