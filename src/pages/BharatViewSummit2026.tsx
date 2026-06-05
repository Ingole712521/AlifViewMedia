import React from 'react'
import BharatViewPosterShell from '../components/BharatViewPosterShell'
import { useTheme } from '../hooks/useTheme'

const BHARAT_DESKTOP_WEBP = '/images/bharatBackroundImage.webp'
const BHARAT_DESKTOP_JPG = '/images/bharatBackroundImage.jpg'
const BHARAT_MOBILE_WEBP = '/images/mobileview.webp'
const BHARAT_MOBILE_JPG = '/images/mobileview.jpg'

const BharatViewSummit2026: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <BharatViewPosterShell
      theme={theme}
      toggleTheme={toggleTheme}
      preloadWebp={BHARAT_DESKTOP_WEBP}
      poster={{
        webp: BHARAT_DESKTOP_WEBP,
        jpg: BHARAT_DESKTOP_JPG,
        mobileWebp: BHARAT_MOBILE_WEBP,
        mobileJpg: BHARAT_MOBILE_JPG,
        alt: 'Bharat View Summit & Excellence Awards 2026',
        width: 1536,
        height: 1024
      }}
    />
  )
}

export default BharatViewSummit2026
