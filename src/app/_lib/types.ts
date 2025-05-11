export type Lang = 'ko' | 'ja' | 'en'

export interface Expression {
  id: string
  expression: string
  meaning: Record<Lang, string>
  example: {
    en: string
    translation: Record<Lang, string>
  }
  note: Record<Lang, string>
}
