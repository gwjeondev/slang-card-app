// ✅ app/expression/page.tsx
import { LangProvider } from '@/app/_component/LanguageContext'
import InnerListPage from '@/app/expression/_component/InnerListPage'

export default function ExpressionListPage() {
  return (
    <LangProvider>
      <InnerListPage />
    </LangProvider>
  )
}
