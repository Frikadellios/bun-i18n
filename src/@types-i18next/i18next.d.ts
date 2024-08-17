import type { MyInterface } from './locals'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en', // default language
    resources: {
      en: MyInterface,
      fr: MyInterface,
      es: MyInterface,
      de: MyInterface, 
    }
  }
}