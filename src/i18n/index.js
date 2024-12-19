import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./en.json";
import idTranslations from "./id.json";

const detectLanguageFromUrl = () => {
  // check if wpApiSettings.homeUrl end with id or no id
  return wpApiSettings.homeUrl.endsWith("/id/") ? "id" : "en";
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    id: { translation: idTranslations },
  },
  lng: detectLanguageFromUrl(), // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
