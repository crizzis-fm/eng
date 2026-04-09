export type KeywordCard = {
  term: string
  readAs: string
  meaningRu: string
  example: string
  exampleLang: string
  memoryTip: string
}

export type ApiVerb = { en: string; meaningRu: string }

export type ErrorPhrase = {
  phrase: string
  gistRu: string
  whereToLook: string
}

export type NavItem = { id: string; label: string }

export type ProgLangId = 'javascript' | 'typescript' | 'python' | 'csharp' | 'java' | 'cpp'

export type LanguageOption = {
  id: ProgLangId
  label: string
  tagline: string
}

export type LanguagePack = {
  id: ProgLangId
  /** Что именно в английском чаще всего встречается в этом стеке */
  focusRu: string[]
  /** С чего начать чтение документации */
  docPrimary: { name: string; url: string; note: string }
  extraKeywords: KeywordCard[]
  extraErrors: ErrorPhrase[]
  extraVerbs: ApiVerb[]
  searchTemplates: string[]
  /** Короткий глоссарий «как в логах и README» */
  glossary: { term: string; meaningRu: string }[]
}
