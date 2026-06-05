import React from 'react'
import BharatViewPosterShell from '../components/BharatViewPosterShell'
import { useTheme } from '../hooks/useTheme'

const BHARAT_HOME_POSTER = {
  webp: '/images/bharatBackroundImage.webp',
  jpg: '/images/bharatBackroundImage.jpg',
  mobileWebp: '/images/mobileview.webp',
  mobileJpg: '/images/mobileview.jpg',
  alt: 'Bharat View Summit & Excellence Awards 2026',
  width: 1536,
  height: 1024
} as const

const BHARAT_COMING_SOON_POSTER = {
  webp: '/images/commingSoon.webp',
  jpg: '/images/commingSoon.jpg',
  alt: 'Bharat View Summit & Excellence Awards 2026 — Coming Soon',
  width: 1536,
  height: 1024
} as const

export const BharatViewSummit2026: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <BharatViewPosterShell
      theme={theme}
      toggleTheme={toggleTheme}
      poster={BHARAT_HOME_POSTER}
    />
  )
}

export const BharatViewComingSoon: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <BharatViewPosterShell
      theme={theme}
      toggleTheme={toggleTheme}
      poster={BHARAT_COMING_SOON_POSTER}
    />
  )
}
