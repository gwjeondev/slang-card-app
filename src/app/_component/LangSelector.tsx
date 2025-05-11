'use client'

import { Lang, useLang } from '@/app/_component/LanguageContext'
import { langLabel, langFlag, langNameByLang } from '@/app/_lib/i18n'

export default function LangSelector() {
  const { lang, setLang } = useLang()

  return (
    <div className='flex justify-center flex-col items-center mt-6'>
      <label htmlFor='lang-select' className='mb-2 text-sm text-gray-600'>
        {langLabel[lang]}
      </label>
      <select
        id='lang-select'
        value={lang}
        onChange={(e) => setLang(e.target.value as typeof lang)}
        className='border border-gray-300 rounded px-3 py-2 text-sm'
      >
        {(Object.keys(langFlag) as Lang[]).map((code) => (
          <option key={code} value={code}>
            {langFlag[code]} {langNameByLang[lang][code]}
          </option>
        ))}
      </select>
    </div>
  )
}
