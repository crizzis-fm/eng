import { getMergedErrors } from '../content/ru'
import { useBookletLanguage } from '../context/useBookletLanguage'
import { ExpandableCard } from './ExpandableCard'
import { Section } from './Section'

export default function ErrorsLayer() {
  const { langId } = useBookletLanguage()
  const merged = getMergedErrors(langId)

  return (
    <Section id="errors" title="Слой 2 — синтаксис и сообщения об ошибках">
      <p className="section-lead">
        Английские фразы в стектрейсе — не «шум», а подсказка. Сначала общие шаблоны, затем типичные формулировки для выбранного языка.
      </p>
      <div className="card-stack">
        {merged.map((e) => (
          <ExpandableCard
            key={e.phrase}
            title={<span className="error-phrase">{e.phrase}</span>}
            summary={e.gistRu}
          >
            <p>
              <strong>Обычно имеется в виду:</strong> {e.gistRu}
            </p>
            <p>
              <strong>Куда смотреть:</strong> {e.whereToLook}
            </p>
          </ExpandableCard>
        ))}
      </div>
    </Section>
  )
}
