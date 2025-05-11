'use client'

import { useLang } from '@/app/_component/LanguageContext'
import { langTitle, langSubtitle } from '@/app/_lib/i18n'

export default function LangAwareHeader() {
  const { lang } = useLang()

  return (
    <div className='text-center mb-6 whitespace-pre-wrap'>
      <h1 className='text-3xl font-bold'>{langTitle[lang]}</h1>
      <p className='text-sm text-gray-600 mt-2'>{langSubtitle[lang]}</p>
    </div>
  )
}
