import React from 'react'
import BharatViewPosterShell from '../components/BharatViewPosterShell'
import { useTheme } from '../hooks/useTheme'

const COMING_SOON_WEBP = '/images/commingSoon.webp'
const COMING_SOON_JPG = '/images/commingSoon.jpg'

const BharatViewComingSoon: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <BharatViewPosterShell
      theme={theme}
      toggleTheme={toggleTheme}
      preloadWebp={COMING_SOON_WEBP}
      poster={{
        webp: COMING_SOON_WEBP,
        jpg: COMING_SOON_JPG,
        alt: 'Bharat View Summit & Excellence Awards 2026 — Coming Soon',
        width: 1536,
        height: 1024
      }}
    />
  )
}

export default BharatViewComingSoon
