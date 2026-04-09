import { selfStudy } from '../content/ru'
import { Section } from './Section'

export default function SelfStudyLayer() {
  return (
    <Section id="self-study" title="Слой 4 — самообразование">
      <h3 className="subsection-title">Краткая стратегия</h3>
      <ul className="theses">
        {selfStudy.strategy.map((s) => (
          <li key={s.slice(0, 48)}>{s}</li>
        ))}
      </ul>

      <div className="surface-panel surface-panel--muted habits-panel">
        <h3 className="surface-panel__title">Ежедневные привычки (5–10 минут)</h3>
        <ul className="theses theses--compact">
          {selfStudy.habits.map((h) => (
            <li key={h.slice(0, 48)}>{h}</li>
          ))}
        </ul>
      </div>

      <h3 className="subsection-title">Чеклист на неделю</h3>
      <ol className="checklist">
        {selfStudy.weekChecklist.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ol>
    </Section>
  )
}
