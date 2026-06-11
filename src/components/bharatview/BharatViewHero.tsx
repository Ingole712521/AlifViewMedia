import React, { useEffect } from 'react'
import { BHARAT_POSTER } from './constants'
import { warmImageCache } from '../../utils/preloadImage'

const POSTER_BG = '#ebe4d4'
const POSTER_WIDTH = 1536
const POSTER_HEIGHT = 1024

const BharatViewHero: React.FC = () => {
  useEffect(() => {
    warmImageCache(BHARAT_POSTER)

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyBg = document.body.style.backgroundColor
    const prevHtmlBg = document.documentElement.style.backgroundColor

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.style.backgroundColor = POSTER_BG
    document.documentElement.style.backgroundColor = POSTER_BG

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.backgroundColor = prevBodyBg
      document.documentElement.style.backgroundColor = prevHtmlBg
    }
  }, [])

  return (
    <section
      className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: POSTER_BG }}
    >
      <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: POSTER_BG }}>
        <img
          src={BHARAT_POSTER}
          alt="BharatView Business Summit & Awards 2026"
          width={POSTER_WIDTH}
          height={POSTER_HEIGHT}
          draggable={false}
          fetchPriority="high"
          decoding="sync"
          className="bharat-hero-poster absolute inset-0 block h-full w-full min-h-full min-w-full object-cover select-none !transition-none"
        />
      </div>
    </section>
  )
}

export default BharatViewHero
