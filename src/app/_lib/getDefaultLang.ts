// app/_lib/getDefaultLang.ts
import type { Lang } from '@/app/_component/LanguageContext'
import { langLabel } from './i18n'

export function getDefaultLang(): Lang {
  if (typeof window !== 'undefined') {
    const lang = navigator.language.split('-')[0] // e.g. "en-US" → "en"
    if (lang in langLabel) return lang as Lang
  }
  return 'ko'
}
