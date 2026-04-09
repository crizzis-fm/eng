import { useId, useState, type ReactNode } from 'react'

type Props = {
  title: ReactNode
  summary?: string
  children: ReactNode
  defaultOpen?: boolean
}

export function ExpandableCard({ title, summary, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className={`expandable-card${open ? ' expandable-card--open' : ''}`}>
      <button
        type="button"
        id={buttonId}
        className="expandable-card__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="expandable-card__chevron" aria-hidden>
          {open ? '▼' : '▶'}
        </span>
        <span className="expandable-card__title">{title}</span>
        {summary && !open && <span className="expandable-card__summary">{summary}</span>}
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="expandable-card__panel"
        hidden={!open}
      >
        {children}
      </div>
    </div>
  )
}
