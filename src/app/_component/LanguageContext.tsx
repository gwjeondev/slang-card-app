'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'ko' | 'ja' | 'en' | 'zh' | 'hi' | 'fr' | 'de' | 'pt' | 'es'

const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({
  lang: 'ko',
  setLang: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null
    if (stored) setLang(stored)
  }, [])

  const changeLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
