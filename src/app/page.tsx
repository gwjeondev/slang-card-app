// ✅ app/page.tsx (홈 페이지)
import expressions from '@/app/_data/expressions.json'
import { LangProvider } from '@/app/_component/LanguageContext'
import PageContent from '@/app/_component/PageContent'

export default function Page() {
  const initial = expressions[Math.floor(Math.random() * expressions.length)]

  return (
    <LangProvider>
      <PageContent expressions={expressions} initial={initial} />
    </LangProvider>
  )
}
