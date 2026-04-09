import { lazy, Suspense } from 'react'
import { AppChrome } from './components/AppChrome'
import Intro from './components/Intro'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/ThemeProvider'
import './App.css'

const LexicalLayer = lazy(() => import('./components/LexicalLayer'))
const ErrorsLayer = lazy(() => import('./components/ErrorsLayer'))
const DocsLayer = lazy(() => import('./components/DocsLayer'))
const SelfStudyLayer = lazy(() => import('./components/SelfStudyLayer'))
const HistoryLayer = lazy(() => import('./components/HistoryLayer'))

function SectionFallback() {
  return <div className="section-fallback" aria-busy="true" />
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppChrome>
          <Intro />
          <Suspense fallback={<SectionFallback />}>
            <LexicalLayer />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ErrorsLayer />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <DocsLayer />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <SelfStudyLayer />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <HistoryLayer />
          </Suspense>
        </AppChrome>
      </LanguageProvider>
    </ThemeProvider>
  )
}
