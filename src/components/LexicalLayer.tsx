import { getMergedApiVerbs, getMergedKeywords } from '../content/ru'
import { useBookletLanguage } from '../context/useBookletLanguage'
import { CodeBlock } from './CodeBlock'
import { ExpandableCard } from './ExpandableCard'
import { Section } from './Section'

export default function LexicalLayer() {
  const { langId } = useBookletLanguage()
  const mergedKeywords = getMergedKeywords(langId)
  const mergedVerbs = getMergedApiVerbs(langId)

  return (
    <Section id="lexical" title="Слой 1 — лексика: язык как набор команд">
      <p className="section-lead">
        Ключевые слова читаются как короткие команды. Ниже — общие конструкции и дополнительные карточки для выбранного языка: смысл по-русски и как
        произносить по-английски.
      </p>
      <div className="card-stack">
        {mergedKeywords.map((k) => (
          <ExpandableCard
            key={`${langId}-${k.term}`}
            title={<span className="term-inline">{k.term}</span>}
            summary={k.meaningRu}
          >
            <p>
              <strong>Как читается:</strong> {k.readAs}
            </p>
            <p>{k.meaningRu}</p>
            <CodeBlock code={k.example} language={k.exampleLang} label="Пример" />
            <p className="memory-tip">
              <strong>Как запомнить:</strong> {k.memoryTip}
            </p>
          </ExpandableCard>
        ))}
      </div>
      <h3 className="subsection-title">Стандартные глаголы в API и именах</h3>
      <p className="section-lead">Шаблон: слово → что обычно делает в коде. В конце списка — глаголы, типичные для вашего стека.</p>
      <ul className="verb-list verb-list--columns">
        {mergedVerbs.map((v) => (
          <li key={v.en}>
            <code className="term-code">{v.en}</code>
            <span className="verb-dash"> — </span>
            <span>{v.meaningRu}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
