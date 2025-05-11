'use client'

import { useLang } from '@/app/_component/LanguageContext'

interface LangTextProps {
  dict: any
  type: 'meaning' | 'note' | 'example'
}

export default function LangText({ dict, type }: LangTextProps) {
  const { lang } = useLang()

  if (type === 'example') {
    return (
      <div className='mt-1'>
        <p className='text-gray-800'>{dict.en}</p>
        {lang !== 'en' && (
          <p className='text-gray-500 text-sm'>→ {dict.translation?.[lang]}</p>
        )}
      </div>
    )
  }

  return <span>{dict[lang]}</span>
}
