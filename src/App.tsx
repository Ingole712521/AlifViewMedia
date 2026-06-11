
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EventDetail from './pages/EventDetail'
import TopNextGenAwards from './pages/TopNextGenAwards'
import GrandMastersRealEstate2026 from './pages/GrandMastersRealEstate2026'
import {
  BharatViewSummit2026,
  BharatViewOverviewPage,
  BharatViewAdvisoryBoardPage,
  BharatViewJuryMembersPage,
  BharatViewSpeakersPage,
  BharatViewAwardsPage,
  BharatViewLeadershipAwardsPage,
  BharatViewPartnersPage,
  BharatViewContactPage
} from './pages/BharatViewPages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event/:eventId" element={<EventDetail />} />
      <Route path="/event" element={<EventDetail />} />
      <Route path="/top-next-gen-awards" element={<TopNextGenAwards />} />
      <Route path="/grand-masters-real-estate-2026" element={<GrandMastersRealEstate2026 />} />
      <Route path="/bharatview-summit-2026" element={<BharatViewSummit2026 />} />
      <Route path="/bharatview-summit-2026/overview" element={<BharatViewOverviewPage />} />
      <Route path="/bharatview-summit-2026/advisory-board" element={<BharatViewAdvisoryBoardPage />} />
      <Route path="/bharatview-summit-2026/jury-members" element={<BharatViewJuryMembersPage />} />
      <Route path="/bharatview-summit-2026/speakers" element={<BharatViewSpeakersPage />} />
      <Route path="/bharatview-summit-2026/awards" element={<BharatViewAwardsPage />} />
      <Route path="/bharatview-summit-2026/leadership-awards" element={<BharatViewLeadershipAwardsPage />} />
      <Route path="/bharatview-summit-2026/partners" element={<BharatViewPartnersPage />} />
      <Route path="/bharatview-summit-2026/contact" element={<BharatViewContactPage />} />
      <Route path="/bharatview-summit-2026/event" element={<Navigate to="/bharatview-summit-2026/overview" replace />} />
      <Route path="/bharatview-summit-2026/jury" element={<Navigate to="/bharatview-summit-2026/jury-members" replace />} />
      <Route path="/bharatview-summit-2026/registration" element={<Navigate to="/bharatview-summit-2026/contact" replace />} />
    </Routes>
  )
}

export default App
