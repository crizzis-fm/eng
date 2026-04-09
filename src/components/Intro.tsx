import { languageOptions } from '../content/languages'
import { abbreviations, hero, intro, readingTips } from '../content/ru'
import { useBookletLanguage } from '../context/useBookletLanguage'
import { LanguagePicker } from './LanguagePicker'
import { Section } from './Section'

export default function Intro() {
  const { pack } = useBookletLanguage()
  const stackLabel = languageOptions.find((o) => o.id === pack.id)?.label ?? pack.id

  return (
    <>
      <div className="hero-panel" id="intro">
        <div className="hero-panel__inner">
          <p className="hero-panel__kicker">{hero.kicker}</p>
          <h1 className="hero-panel__title">{hero.title}</h1>
          <p className="hero-panel__lead">{hero.lead}</p>
          <LanguagePicker />
        </div>
      </div>

      <Section id="intro-why" title={intro.title} className="book-section--tight-top">
        <ul className="theses">
          {intro.theses.map((t) => (
            <li key={t.slice(0, 48)}>{t}</li>
          ))}
        </ul>
        <p className="lead-out">{intro.closing}</p>
      </Section>

      <section className="stack-focus surface-panel" aria-labelledby="stack-focus-heading">
        <h2 id="stack-focus-heading" className="surface-panel__title">
          Под ваш стек: {stackLabel}
        </h2>
        <ul className="theses theses--compact">
          {pack.focusRu.map((line) => (
            <li key={line.slice(0, 52)}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="abbr-section surface-panel surface-panel--muted" aria-labelledby="abbr-heading">
        <h2 id="abbr-heading" className="surface-panel__title">
          Частые аббревиатуры
        </h2>
        <p className="section-lead section-lead--tight">
          В логах, тикетах и документации они встречаются чаще, чем «длинные» английские предложения.
        </p>
        <div className="abbr-grid">
          {abbreviations.map((a) => (
            <article key={a.abbr} className="abbr-tile">
              <div className="abbr-tile__abbr">{a.abbr}</div>
              <div className="abbr-tile__read">{a.readEn}</div>
              <p className="abbr-tile__mean">{a.meaningRu}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reading-tips surface-panel" aria-labelledby="read-tips-heading">
        <h2 id="read-tips-heading" className="surface-panel__title">
          Как читать англоязычную страницу docs
        </h2>
        <ul className="theses theses--compact">
          {readingTips.map((t) => (
            <li key={t.slice(0, 48)}>{t}</li>
          ))}
        </ul>
      </section>
    </>
  )
}
