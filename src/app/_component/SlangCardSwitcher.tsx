'use client'

import { useState } from 'react'
import SlangCard from '@/app/_component/SlangCard'
import LangSelector from '@/app/_component/LangSelector'
import type { Expression } from '@/app/_lib/types'
import { useLang } from '@/app/_component/LanguageContext'
import { refreshLabel } from '@/app/_lib/i18n'

export default function SlangCardSwitcher({
  expressions,
  initial,
}: {
  expressions: Expression[]
  initial: Expression
}) {
  const [slang, setSlang] = useState(initial)
  const { lang } = useLang()

  const pickAnother = () => {
    let next
    do {
      next = expressions[Math.floor(Math.random() * expressions.length)]
    } while (next.id === slang.id)

    setSlang(next)
  }

  return (
    <>
      <SlangCard data={slang} />
      <div className='flex justify-center mt-4'>
        <button
          onClick={pickAnother}
          className='bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded'
        >
          {refreshLabel[lang]}
        </button>
      </div>
      <LangSelector />
    </>
  )
}
