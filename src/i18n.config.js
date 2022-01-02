import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './resources/en.json';
import zh from './resources/zh.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
      /**
       * Add interpolation format method to customize the formatting
       */
      format: (value, format, lng) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        return value;
      },
    },

    // backend: {
    //   loadPath: '/resources/{{lng}}.json',
    // },
  });
