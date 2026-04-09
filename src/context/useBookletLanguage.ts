import { useContext } from 'react'
import { BookletLanguageContext } from './bookletLanguageContext'

export function useBookletLanguage() {
  const ctx = useContext(BookletLanguageContext)
  if (!ctx) throw new Error('useBookletLanguage must be used within LanguageProvider')
  return ctx
}
