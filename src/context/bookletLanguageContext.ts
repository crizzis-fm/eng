import { createContext } from 'react'
import type { LanguagePack, ProgLangId } from '../content/types'

export type BookletLanguageContextValue = {
  langId: ProgLangId
  setLangId: (id: ProgLangId) => void
  pack: LanguagePack
}

export const BookletLanguageContext = createContext<BookletLanguageContextValue | null>(null)
