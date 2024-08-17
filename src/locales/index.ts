import en from "./en.json"
import es from "./es.json"
import fr from "./fr.json"
import de from "./de.json"


import i18next from "i18next";
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/es/zod.json";


i18next.init({
  lng: "es",
  resources: {
    es: { zod: translation },
  },
});
z.setErrorMap(zodI18nMap);

const schema = z.string().email();
// Translated into Spanish (es)
schema.parse("foo"); // => correo inválido

export const DEFAULT_LOCALE_SETTING: string = "en";
export const LOCALES_SETTING: LocaleSetting = {
  "en": {
    "label": "English"
  },
  "ja": {
    "label": "日本語"
  },
  "zh-cn": {
    "label": "简体中文",
    "lang": "zh-CN"
  },
  "ar": {
    "label": "العربية",
    "dir": "rtl"
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
} 