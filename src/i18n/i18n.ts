import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en';
import ja from '@/locales/ja';

const i18nextInstance = (): Promise<void | typeof i18next.t> =>
  i18next
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      debug: true,
      resources: {
        ja: { translation: ja },
        en: { translation: en satisfies typeof ja },
      },
    })
    .catch((err) => {
      console.error('failed to setup i18next', err);
    });

export default i18nextInstance;
