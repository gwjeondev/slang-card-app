// ✅ app/_component/SlangCard.tsx
import LangText from '@/app/_component/LangText'
import type { Expression } from '@/app/_lib/types'
import { useLang } from '@/app/_component/LanguageContext'

export default function SlangCard({ data }: { data: Expression }) {
  const { lang } = useLang()

  const label = {
    meaning: {
      ko: '📘 의미',
      ja: '📘 意味',
      en: '📘 Meaning',
      zh: '📘 含义',
      hi: '📘 अर्थ',
      fr: '📘 Signification',
      de: '📘 Bedeutung',
      pt: '📘 Significado',
      es: '📘 Significado',
    },
    example: {
      ko: '💬 예문',
      ja: '💬 例文',
      en: '💬 Example',
      zh: '💬 例句',
      hi: '💬 उदाहरण',
      fr: '💬 Exemple',
      de: '💬 Beispiel',
      pt: '💬 Exemplo',
      es: '💬 Ejemplo',
    },
    note: {
      ko: '📝 설명',
      ja: '📝 説明',
      en: '📝 Note',
      zh: '📝 注释',
      hi: '📝 नोट',
      fr: '📝 Remarque',
      de: '📝 Hinweis',
      pt: '📝 Nota',
      es: '📝 Nota',
    },
  }

  return (
    <div className='bg-white border p-4 rounded-lg shadow-md mt-10'>
      <h1 className='text-2xl font-bold text-center mb-3'>{data.expression}</h1>

      <div className='space-y-4 text-gray-700'>
        <p>
          <strong>{label.meaning[lang]}:</strong>{' '}
          <LangText dict={data.meaning} type='meaning' />
        </p>
        <div>
          <strong>{label.example[lang]}:</strong>
          <LangText dict={data.example} type='example' />
        </div>
        <p>
          <strong>{label.note[lang]}:</strong>{' '}
          <LangText dict={data.note} type='note' />
        </p>
      </div>
    </div>
  )
}
