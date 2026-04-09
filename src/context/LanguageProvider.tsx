import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { getDefaultLanguageId, getLanguagePack, type ProgLangId } from '../content/languages'
import { BookletLanguageContext } from './bookletLanguageContext'

const STORAGE_KEY = 'booklet-proglang'

function readStoredLang(): ProgLangId | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (
      raw === 'javascript' ||
      raw === 'typescript' ||
      raw === 'python' ||
      raw === 'csharp' ||
      raw === 'java' ||
      raw === 'cpp'
    ) {
      return raw
    }
  } catch {
    /* ignore */
  }
  return null
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [langId, setLangIdState] = useState<ProgLangId>(() => readStoredLang() ?? getDefaultLanguageId())

  const setLangId = useCallback((id: ProgLangId) => {
    setLangIdState(id)
    try {
      localStorage.setItem(STORAGE_KEY, id)
    } catch {
      /* ignore */
    }
  }, [])

  const pack = useMemo(() => getLanguagePack(langId), [langId])

  const value = useMemo(() => ({ langId, setLangId, pack }), [langId, setLangId, pack])

  return <BookletLanguageContext.Provider value={value}>{children}</BookletLanguageContext.Provider>
}
