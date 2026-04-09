import { docsSection, getMergedSearchTemplates } from '../content/ru'
import { useBookletLanguage } from '../context/useBookletLanguage'
import { Section } from './Section'

export default function DocsLayer() {
  const { pack, langId } = useBookletLanguage()
  const templates = getMergedSearchTemplates(langId)

  return (
    <Section id="docs" title="Слой 3 — документация и поиск">
      <div className="doc-primary surface-panel surface-panel--accent">
        <p className="doc-primary__label">Главная точка входа для вашего стека</p>
        <h3 className="doc-primary__title">
          <a href={pack.docPrimary.url} target="_blank" rel="noopener noreferrer">
            {pack.docPrimary.name}
          </a>
        </h3>
        <p className="doc-primary__note">{pack.docPrimary.note}</p>
      </div>

      <p className="section-lead">{docsSection.readingHeadings.intro}</p>
      <h3 className="subsection-title">Типичные заголовки разделов</h3>
      <ul className="theses">
        {docsSection.readingHeadings.patterns.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h3 className="subsection-title">Мини-глоссарий для логов и README</h3>
      <div className="glossary-grid">
        {pack.glossary.map((g) => (
          <div key={g.term} className="glossary-tile">
            <code className="glossary-tile__term">{g.term}</code>
            <p className="glossary-tile__mean">{g.meaningRu}</p>
          </div>
        ))}
      </div>

      <h3 className="subsection-title">Шаблоны запросов (копируйте и подставляйте)</h3>
      <p className="section-lead section-lead--tight">В конце — варианты под ваш язык.</p>
      <ul className="search-templates">
        {templates.map((q) => (
          <li key={q}>
            <code className="term-code term-code--block">{q}</code>
          </li>
        ))}
      </ul>
      <h3 className="subsection-title">Универсальные ресурсы</h3>
      <ul className="resource-list">
        {docsSection.resources.map((r) => (
          <li key={r.url}>
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {r.name}
            </a>
            <span className="resource-note"> — {r.note}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
