import { languageOptions } from '../content/languages'
import { useBookletLanguage } from '../context/useBookletLanguage'

export function LanguagePicker() {
  const { langId, setLangId } = useBookletLanguage()

  return (
    <div className="lang-picker" role="group" aria-label="Язык программирования для примеров и подсказок">
      <p className="lang-picker__label">Ваш основной язык / стек</p>
      <div className="lang-picker__grid">
        {languageOptions.map((opt) => {
          const selected = opt.id === langId
          return (
            <button
              key={opt.id}
              type="button"
              className={`lang-card${selected ? ' lang-card--active' : ''}`}
              aria-pressed={selected}
              aria-label={`${opt.label}. ${opt.tagline}`}
              onClick={() => setLangId(opt.id)}
            >
              <span className="lang-card__name">{opt.label}</span>
              <span className="lang-card__tag">{opt.tagline}</span>
            </button>
          )
        })}
      </div>
      <p className="lang-picker__hint">Выбор сохраняется в браузере и влияет на блоки ниже: лексика, ошибки, ссылки и глоссарий.</p>
    </div>
  )
}
