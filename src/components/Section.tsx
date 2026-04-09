import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`book-section ${className}`.trim()}
      aria-labelledby={`${id}-heading`}
      tabIndex={-1}
    >
      <h2 id={`${id}-heading`} className="book-section__title">
        {title}
      </h2>
      <div className="book-section__body">{children}</div>
    </section>
  )
}
