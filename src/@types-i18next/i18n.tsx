import { zodI18nMap } from "zod-i18n-map/dist";


import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {en} from '@/@types-i18next/en'
// import {de} from './locales/de' // German

const resources = {
  en: {
    translation: en,
  },
  // de: {
  //   translation: de,
  // }
}

i18n
.use(initReactI18next)
.init({
  compatibilityJSON: 'v3',
  lng: 'en', // (default lang)
  resources,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n