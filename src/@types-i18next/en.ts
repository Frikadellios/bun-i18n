import type { TypeSafeLocal } from './locals'

export const en: TypeSafeLocal = {
  welcome: 'Welcome, {{username}}!', // ✅ Correct!
  //wellcome: 'Welcome, {{usename}}!', ❌ Wrong key OR/AND placeholder detected!
  password: 'Password', // ✅ Correct!
  //pasword: 'Password', // ❌ Wrong OR missing key detected!
}