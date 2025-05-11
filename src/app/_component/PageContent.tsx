'use client'

import { useLang } from '@/app/_component/LanguageContext'
import LangAwareHeader from '@/app/_component/LangAwareHeader'
import SlangCardSwitcher from '@/app/_component/SlangCardSwitcher'
import { langAllList } from '@/app/_lib/i18n'
import Link from 'next/link'

export default function PageContent({
  expressions,
  initial,
}: {
  expressions: any[]
  initial: any
}) {
  const { lang } = useLang()

  return (
    <main className='p-6 max-w-xl mx-auto'>
      <LangAwareHeader />
      <SlangCardSwitcher expressions={expressions} initial={initial} />

      <div className='mt-8 text-center'>
        <Link href='/expression'>
          <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'>
            {langAllList[lang]}
          </button>
        </Link>
      </div>
    </main>
  )
}
