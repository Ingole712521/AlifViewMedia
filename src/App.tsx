
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      <Route path="/event" element={<EventDetail />} />
    </Routes>
  )
}

export default App
