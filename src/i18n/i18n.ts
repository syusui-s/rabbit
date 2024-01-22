import i18next, { type i18n } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en';
import ja from '@/locales/ja';

const i18nextInstance = async (): Promise<i18n> => {
  try {
    // TODO use createInstance instead
    await i18next.use(LanguageDetector).init({
      fallbackLng: 'en',
      debug: import.meta.env.DEV,
      resources: {
        ja: { translation: ja },
        en: { translation: en satisfies typeof ja },
      },
    });
    return i18next;
  } catch (err) {
    console.error('failed to setup i18next', err);
    throw err;
  }
};

export default i18nextInstance;
