import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BHARAT_POSTER, BHARAT_ROUTES } from './constants'
import { warmImageCache } from '../../utils/preloadImage'

const POSTER_BG = '#ebe4d4'
const POSTER_WIDTH = 1536
const POSTER_HEIGHT = 1024

const posterImgClass =
  'absolute inset-0 block h-full w-full min-h-full min-w-full object-cover object-center select-none !transition-none'

const BharatViewHero: React.FC = () => {
  const navigate = useNavigate()

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
          className={posterImgClass}
        />
      </div>

      <div className="absolute bottom-[5%] sm:bottom-[6%] left-0 right-0 z-10 flex justify-center items-center gap-2 sm:gap-2.5 px-4">
        <button
          type="button"
          onClick={() => navigate(BHARAT_ROUTES.event)}
          className="bharat-btn-secondary bharat-btn-sm shadow-md hover:shadow-lg"
        >
          Discover More
        </button>
        <button
          type="button"
          onClick={() => navigate(BHARAT_ROUTES.event)}
          className="bharat-btn-primary bharat-btn-sm bg-white text-[var(--bharat-primary)] hover:bg-gray-50 shadow-md hover:shadow-lg"
        >
          View Awards
        </button>
      </div>
    </section>
  )
}

export default BharatViewHero
