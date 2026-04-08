
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import TopNextGenAwards from './pages/TopNextGenAwards'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      <Route path="/event" element={<EventDetail />} />
      <Route path="/top-next-gen-awards" element={<TopNextGenAwards />} />
    </Routes>
  )
}

export default App
