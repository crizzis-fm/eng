import { history } from '../content/ru'
import { Section } from './Section'

export default function HistoryLayer() {
  return (
    <Section id="history" title={history.title}>
      <div className="history-blocks">
        {history.blocks.map((b) => (
          <article key={b.title} className="history-block">
            <h3 className="subsection-title">{b.title}</h3>
            <p>{b.text}</p>
          </article>
        ))}
      </div>
      <p className="lead-out">{history.closing}</p>
    </Section>
  )
}
