import type { Locale } from 'i18n-type-safe'

// 1.1
export interface MyInterface {
  welcome: '{{username}}'
  password: string
  // ... add other translation keys as needed
}

// 1.2
export type TypeSafeLocal = Locale<MyInterface>