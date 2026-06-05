
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import BharatViewSummit2026 from './pages/BharatViewSummit2026'
import BharatViewComingSoon from './pages/BharatViewComingSoon'

const TopNextGenAwards = lazy(() => import('./pages/TopNextGenAwards'))
const GrandMastersRealEstate2026 = lazy(() => import('./pages/GrandMastersRealEstate2026'))

const PageFallback = () => (
  <div
    className="min-h-screen w-full flex items-center justify-center"
    style={{ backgroundColor: 'var(--bg-primary, #ffffff)' }}
  >
    <div
      className="h-10 w-10 rounded-full border-2 border-[var(--primary-color,#dc2626)] border-t-transparent animate-spin"
      aria-label="Loading"
    />
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      <Route path="/event" element={<EventDetail />} />
      <Route
        path="/top-next-gen-awards"
        element={
          <Suspense fallback={<PageFallback />}>
            <TopNextGenAwards />
          </Suspense>
        }
      />
      <Route
        path="/grand-masters-real-estate-2026"
        element={
          <Suspense fallback={<PageFallback />}>
            <GrandMastersRealEstate2026 />
          </Suspense>
        }
      />
      <Route path="/bharatview-summit-2026" element={<BharatViewSummit2026 />} />
      <Route path="/bharatview-summit-2026/event" element={<BharatViewComingSoon />} />
      <Route path="/bharatview-summit-2026/jury" element={<BharatViewComingSoon />} />
      <Route path="/bharatview-summit-2026/registration" element={<BharatViewComingSoon />} />
    </Routes>
  )
}

export default App
