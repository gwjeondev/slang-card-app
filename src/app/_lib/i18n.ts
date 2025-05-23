// ✅ app/_lib/i18n.ts
import type { Lang } from '@/app/_component/LanguageContext'

export const langLabel: Record<Lang, string> = {
  ko: '🌐 언어를 선택하세요',
  ja: '🌐 言語を選択してください',
  en: '🌐 Select Language',
  zh: '🌐 请选择语言',
  hi: '🌐 भाषा चुनें',
  fr: '🌐 Choisissez la langue',
  de: '🌐 Sprache wählen',
  pt: '🌐 Selecione o idioma',
  es: '🌐 Selecciona el idioma',
}

export const langTitle: Record<Lang, string> = {
  ko: '🎯 미국 애들, 이렇게 말한다고?!',
  ja: '🎯 ネイティブ、こう言うらしいよ？',
  en: '🎯 They actually say this?!',
  zh: '🎯 他们真的这么说?!',
  hi: '🎯 क्या वे सच में ऐसा बोलते हैं?!',
  fr: '🎯 Ils disent vraiment ça ?!',
  de: '🎯 Sagen die das wirklich?!',
  pt: '🎯 Eles realmente dizem isso?!',
  es: '🎯 ¿De verdad dicen eso?!',
}

export const langSubtitle: Record<Lang, string> = {
  ko: '✨ 무작위로 따라나오는 리얼 슬랭, 예문까지 찾아보자!',
  ja: '✨ ランダムで出てくるリアルスラング、例文付きで覚えよう！',
  en: '✨ Real slang, served randomly — with juicy examples!',
  zh: '✨ 随机展示真实俚语，还附带例句！',
  hi: '✨ रैंडम स्लैंग के साथ मजेदार उदाहरण भी देखें!',
  fr: '✨ Du slang authentique, servi au hasard — avec des exemples croustillants !',
  de: '✨ Echter Slang, zufällig serviert – mit saftigen Beispielen!',
  pt: '✨ Gírias reais, exibidas aleatoriamente — com exemplos suculentos!',
  es: '✨ Jerga real, servida al azar — ¡con ejemplos jugosos!',
}

export const contentLabel: Record<
  'meaning' | 'example' | 'note',
  Record<Lang, string>
> = {
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

export const langFlag: Record<Lang, string> = {
  ko: '🇰🇷',
  ja: '🇯🇵',
  en: '🇺🇸',
  zh: '🇨🇳',
  hi: '🇮🇳',
  fr: '🇫🇷',
  de: '🇩🇪',
  pt: '🇵🇹',
  es: '🇪🇸',
}

export const refreshLabel: Record<string, string> = {
  ko: '🔁 다른 표현 보기',
  ja: '🔁 他の表現を見る',
  en: '🔁 Show another expression',
  zh: '🔁 看看其他表达',
  hi: '🔁 एक और वाक्य देखें',
  fr: '🔁 Voir une autre expression',
  de: '🔁 Weitere Redewendung anzeigen',
  pt: '🔁 Ver outra expressão',
  es: '🔁 Ver otra expresión',
}

export const langNameByLang: Record<Lang, Record<Lang, string>> = {
  ko: {
    ko: '한국어',
    ja: '일본어',
    en: '영어',
    zh: '중국어',
    hi: '힌디어',
    fr: '프랑스어',
    de: '독일어',
    pt: '포르투갈어',
    es: '스페인어',
  },
  en: {
    ko: 'Korean',
    ja: 'Japanese',
    en: 'English',
    zh: 'Chinese',
    hi: 'Hindi',
    fr: 'French',
    de: 'German',
    pt: 'Portuguese',
    es: 'Spanish',
  },
  ja: {
    ko: '韓国語',
    ja: '日本語',
    en: '英語',
    zh: '中国語',
    hi: 'ヒンディー語',
    fr: 'フランス語',
    de: 'ドイツ語',
    pt: 'ポルトガル語',
    es: 'スペイン語',
  },
  zh: {
    ko: '韩语',
    ja: '日语',
    en: '英语',
    zh: '中文',
    hi: '印地语',
    fr: '法语',
    de: '德语',
    pt: '葡萄牙语',
    es: '西班牙语',
  },
  hi: {
    ko: 'कोरियाई',
    ja: 'जापानी',
    en: 'अंग्रेज़ी',
    zh: 'चीनी',
    hi: 'हिंदी',
    fr: 'फ़्रेंच',
    de: 'जर्मन',
    pt: 'पुर्तगाली',
    es: 'स्पेनिश',
  },
  fr: {
    ko: 'Coréen',
    ja: 'Japonais',
    en: 'Anglais',
    zh: 'Chinois',
    hi: 'Hindi',
    fr: 'Français',
    de: 'Allemand',
    pt: 'Portugais',
    es: 'Espagnol',
  },
  de: {
    ko: 'Koreanisch',
    ja: 'Japanisch',
    en: 'Englisch',
    zh: 'Chinesisch',
    hi: 'Hindi',
    fr: 'Französisch',
    de: 'Deutsch',
    pt: 'Portugiesisch',
    es: 'Spanisch',
  },
  pt: {
    ko: 'Coreano',
    ja: 'Japonês',
    en: 'Inglês',
    zh: 'Chinês',
    hi: 'Hindi',
    fr: 'Francês',
    de: 'Alemão',
    pt: 'Português',
    es: 'Espanhol',
  },
  es: {
    ko: 'Coreano',
    ja: 'Japonés',
    en: 'Inglés',
    zh: 'Chino',
    hi: 'Hindi',
    fr: 'Francés',
    de: 'Alemán',
    pt: 'Portugués',
    es: 'Español',
  },
}

export const langAllList: Record<string, string> = {
  ko: '📚 전체 슬랭 보기',
  ja: '📚 スラング一覧を見る',
  en: '📚 View All Slang',
  zh: '📚 查看所有俚语',
  hi: '📚 सभी स्लैंग देखें',
  fr: '📚 Voir tous les argots',
  de: '📚 Alle Slangs anzeigen',
  pt: '📚 Ver todos os gírias',
  es: '📚 Ver todos los modismos',
}
