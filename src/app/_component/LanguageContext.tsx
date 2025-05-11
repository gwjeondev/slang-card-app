'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { getDefaultLang } from '@/app/_lib/getDefaultLang'

export type Lang = 'ko' | 'ja' | 'en' | 'zh' | 'hi' | 'fr' | 'de' | 'pt' | 'es'

const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({
  lang: 'ko',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang
    console.log('saved', saved)
    console.log(getDefaultLang())
    if (saved) setLang(saved)
    else setLang(getDefaultLang())
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
