'use client'

import expressions from '@/app/_data/expressions.json'
import LangText from '@/app/_component/LangText'
import BackButton from '@/app/_component/BackButton'

export default function InnerListPage() {
  return (
    <main className='max-w-2xl mx-auto p-6'>
      <div className='mb-4'>
        <BackButton href='/' label='홈으로' />
      </div>

      <h1 className='text-2xl font-bold mb-4'>📚 모든 슬랭 표현</h1>

      <ul className='space-y-6'>
        {expressions.map((item) => (
          <li key={item.id} className='border rounded p-4 shadow'>
            <h2 className='text-xl font-semibold mb-2'>{item.expression}</h2>
            <p>
              <strong>📘 의미:</strong>{' '}
              <LangText dict={item.meaning} type='meaning' />
            </p>
            <p className='mt-2'>
              <strong>💬 예문:</strong>{' '}
              <LangText dict={item.example} type='example' />
            </p>
            <p className='mt-2'>
              <strong>📝 설명:</strong>{' '}
              <LangText dict={item.note} type='note' />
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
