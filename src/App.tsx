
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import TopNextGenAwards from './pages/TopNextGenAwards'
import GrandMastersRealEstate2026 from './pages/GrandMastersRealEstate2026'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      <Route path="/event" element={<EventDetail />} />
      <Route path="/top-next-gen-awards" element={<TopNextGenAwards />} />
      <Route path="/grand-masters-real-estate-2026" element={<GrandMastersRealEstate2026 />} />
    </Routes>
  )
}

export default App
