import { useCallback, useState } from 'react'

type Props = {
  code: string
  language?: string
  label?: string
}

export function CodeBlock({ code, language = 'text', label }: Props) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = code
      ta.setAttribute('aria-hidden', 'true')
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        window.setTimeout(() => setCopied(false), 2000)
      } finally {
        document.body.removeChild(ta)
      }
    }
  }, [code])

  return (
    <div className="code-block">
      <div className="code-block__bar">
        {label && <span className="code-block__label">{label}</span>}
        <span className="code-block__lang">{language}</span>
        <button
          type="button"
          className="code-block__copy"
          onClick={copy}
          aria-label={copied ? 'Пример скопирован' : 'Скопировать пример кода в буфер обмена'}
        >
          {copied ? 'Скопировано' : 'Копировать'}
        </button>
      </div>
      <pre className="code-block__pre">
        <code>{code}</code>
      </pre>
    </div>
  )
}
