export const EN: Language = { code: 'en-US', language: 'English', locale: 'en-US' }

export const languages = {
  'en-US': EN,
}

export const allLanguages = Object.values(languages)

// Export this here to avoid dependency cycle
export type LanguageCode = keyof typeof languages
export interface Language {
  code: LanguageCode
  language: string,
  locale: string,
}
