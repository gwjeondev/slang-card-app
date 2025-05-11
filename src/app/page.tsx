import expressions from '@/app/_data/expressions.json'
import SlangCardSwitcher from '@/app/_component/SlangCardSwitcher'
import { LangProvider } from '@/app/_component/LanguageContext'
import LangAwareHeader from './_component/LangAwareHeader'

export default function Page() {
  const initial = expressions[Math.floor(Math.random() * expressions.length)]

  const title = {
    ko: '🎯 미국 애들, 이렇게 말한다고?!',
    ja: '🎯 ネイティブ、こう言うらしいよ？',
    en: '🎯 They actually say this?!',
  }

  const subtitle = {
    ko: '✨ 무작위로 따라나오는 리얼 슬랭, 예문까지 찾아보자!',
    ja: '✨ ランダムで出てくるリアルスラング、例文付きで覚えよう！',
    en: '✨ Real slang, served randomly — with juicy examples!',
  }

  return (
    <LangProvider>
      <main className='p-6 max-w-xl mx-auto'>
        <LangAwareHeader />
        <SlangCardSwitcher expressions={expressions} initial={initial} />
      </main>
    </LangProvider>
  )
}
