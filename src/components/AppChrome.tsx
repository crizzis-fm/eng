import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { languageOptions } from '../content/languages'
import { buildSearchHaystack, navItems, siteMeta } from '../content/ru'
import { useBookletLanguage } from '../context/useBookletLanguage'
import { useTheme } from '../context/useTheme'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  el?.focus({ preventScroll: true })
}

export function AppChrome({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme()
  const { langId } = useBookletLanguage()
  const stackLabel = languageOptions.find((o) => o.id === langId)?.label ?? langId
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searchHit, setSearchHit] = useState<string | null>(null)
  const [searchAttempted, setSearchAttempted] = useState(false)

  const haystack = useMemo(() => buildSearchHaystack(langId), [langId])

  const runSearch = useCallback(() => {
    const q = query.trim().toLowerCase()
    setSearchAttempted(true)
    if (!q) {
      setSearchHit(null)
      return
    }
    const words = q.split(/\s+/).filter(Boolean)
    for (const chunk of haystack) {
      const t = chunk.text.toLowerCase()
      if (words.every((w) => t.includes(w))) {
        setSearchHit(chunk.id)
        scrollToId(chunk.id)
        setMobileOpen(false)
        return
      }
    }
    setSearchHit(null)
  }, [haystack, query])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const themeLabel = theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        К основному содержимому
      </a>
      <header className="top-header">
        <div className="top-header__brand">
          <h1 className="site-title">{siteMeta.title}</h1>
          <p className="site-subtitle">
            {siteMeta.subtitle}
            <span className="stack-chip" title="Текущий язык для примеров в буклете">
              Стек: {stackLabel}
            </span>
          </p>
        </div>
        <div className="top-header__actions">
          <label className="search-field">
            <span className="visually-hidden">Поиск по разделам и терминам</span>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setSearchAttempted(false)
                setSearchHit(null)
              }}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), runSearch())}
              placeholder="Поиск…"
              aria-label="Поиск по разделам и терминам на странице"
            />
            <button type="button" className="btn-secondary" onClick={runSearch} aria-label="Найти на странице">
              Найти
            </button>
          </label>
          <button
            type="button"
            className="btn-theme"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <span className="btn-theme__icon" aria-hidden>
              {theme === 'dark' ? '◐' : '◑'}
            </span>
            <span className="btn-theme__text">{theme === 'dark' ? 'Светлая' : 'Тёмная'}</span>
          </button>
          <button
            type="button"
            className="btn-menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Закрыть меню разделов' : 'Открыть меню разделов'}
          >
            <span className="btn-menu__glyph" aria-hidden>
              {mobileOpen ? '×' : '≡'}
            </span>
            <span className="btn-menu__text">Разделы</span>
          </button>
        </div>
      </header>
      {searchHit && (
        <p className="search-hit" role="status">
          Переход к разделу: {navItems.find((n) => n.id === searchHit)?.label ?? searchHit}
        </p>
      )}
      {searchAttempted && !searchHit && query.trim() && (
        <p className="search-miss" role="status">
          Совпадений не найдено — упростите запрос или откройте оглавление.
        </p>
      )}

      <div className="shell__grid">
        <aside className="side-nav" aria-label="Оглавление">
          <nav>
            <p className="side-nav__title">Оглавление</p>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => scrollToId(item.id)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main id="main" className="main-column" tabIndex={-1}>
          {children}
        </main>
      </div>

      <div
        id="mobile-drawer"
        className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {mobileOpen && (
          <button
            type="button"
            className="mobile-drawer__backdrop"
            aria-label="Закрыть меню"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <div className="mobile-drawer__panel">
          <p className="side-nav__title">Разделы</p>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => {
                      scrollToId(item.id)
                      setMobileOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <footer className="site-footer">
        <p>Статическая сборка — можно открыть локально, распечатать или сохранить как PDF из браузера.</p>
      </footer>
    </div>
  )
}
