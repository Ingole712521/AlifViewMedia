import React, { useEffect, useState } from 'react'
import { Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const BHARAT_DESKTOP_WEBP = '/images/bharatBackroundImage.webp'
const BHARAT_DESKTOP_JPG = '/images/bharatBackroundImage.jpg'
const BHARAT_MOBILE_WEBP = '/images/mobileview.webp'
const BHARAT_MOBILE_JPG = '/images/mobileview.jpg'
const MOBILE_POSTER_MEDIA = '(max-width: 767px)'

const posterImgClass =
  'absolute inset-0 block h-full w-full min-h-full min-w-full object-cover object-center select-none'

const BharatViewSummit2026: React.FC = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    window.scrollTo(0, 0)
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    const isMobile = window.matchMedia(MOBILE_POSTER_MEDIA).matches
    const preload = document.createElement('link')
    preload.rel = 'preload'
    preload.as = 'image'
    preload.type = 'image/webp'
    preload.href = isMobile ? BHARAT_MOBILE_WEBP : BHARAT_DESKTOP_WEBP
    document.head.appendChild(preload)

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      preload.remove()
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div
      className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: '#f8f6f1' }}
    >
      <div className="fixed inset-0 z-0 overflow-hidden">
        <picture className="absolute inset-0 block h-full w-full">
          <source media={MOBILE_POSTER_MEDIA} srcSet={BHARAT_MOBILE_WEBP} type="image/webp" />
          <source media={MOBILE_POSTER_MEDIA} srcSet={BHARAT_MOBILE_JPG} type="image/jpeg" />
          <source srcSet={BHARAT_DESKTOP_WEBP} type="image/webp" />
          <img
            src={BHARAT_DESKTOP_JPG}
            alt="Bharat View Summit & Excellence Awards 2026"
            width={1536}
            height={1024}
            draggable={false}
            fetchPriority="high"
            decoding="async"
            className={posterImgClass}
          />
        </picture>
      </div>

      <nav
        className="fixed top-0 left-0 right-0 w-full z-50 h-14 sm:h-16 shrink-0"
        style={{
          backgroundColor: 'transparent',
          borderBottom: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="h-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={theme === 'dark' ? '/images/Aliief_white.png' : '/images/company-logo.png'}
              alt="Alif View Media Logo"
              width={140}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain max-w-[120px] sm:max-w-none"
              style={{
                filter:
                  theme === 'dark'
                    ? 'drop-shadow(0 8px 14px rgba(0,0,0,0.55))'
                    : 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              className="h-9 sm:h-10 px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm text-white transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              style={{ backgroundColor: '#dc2626' }}
              onClick={() => navigate('/event')}
            >
              <Home size={16} className="mr-1.5 sm:mr-2 shrink-0" />
              <span className="sm:hidden">Back</span>
              <span className="hidden sm:inline">Back to Event</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default BharatViewSummit2026
