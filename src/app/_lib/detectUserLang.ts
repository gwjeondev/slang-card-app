export function detectUserLang(): 'ko' | 'ja' | 'en' {
  if (typeof window === 'undefined') return 'en' // 서버 측 렌더링 보호

  const lang = navigator.language.toLowerCase()

  if (lang.startsWith('ko')) return 'ko'
  if (lang.startsWith('ja')) return 'ja'
  return 'en'
}
