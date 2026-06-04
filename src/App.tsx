
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const EventDetail = lazy(() => import('./pages/EventDetail'))
const TopNextGenAwards = lazy(() => import('./pages/TopNextGenAwards'))
const GrandMastersRealEstate2026 = lazy(() => import('./pages/GrandMastersRealEstate2026'))
const BharatViewSummit2026 = lazy(() => import('./pages/BharatViewSummit2026'))

const PageFallback = () => (
  <div className="min-h-screen w-full" style={{ backgroundColor: 'var(--bg-primary, #fff)' }} />
)

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<EventDetail />} />
        <Route path="/event" element={<EventDetail />} />
        <Route path="/top-next-gen-awards" element={<TopNextGenAwards />} />
        <Route path="/grand-masters-real-estate-2026" element={<GrandMastersRealEstate2026 />} />
        <Route path="/bharatview-summit-2026" element={<BharatViewSummit2026 />} />
      </Routes>
    </Suspense>
  )
}

export default App
