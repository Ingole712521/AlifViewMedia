import React, { useEffect, useState } from 'react'
import BharatViewNav from './BharatViewNav'
import { preloadImage } from '../utils/preloadImage'

interface PosterSources {
  webp: string
  jpg: string
  mobileWebp?: string
  mobileJpg?: string
  alt: string
  width?: number
  height?: number
}

interface BharatViewPosterShellProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  poster: PosterSources
  preloadWebp?: string
}

const MOBILE_POSTER_MEDIA = '(max-width: 767px)'
const SHELL_BG = '#020617'

const posterImgClass =
  'absolute inset-0 block h-full w-full min-h-full min-w-full object-cover object-center select-none transition-opacity duration-200'

const BharatViewPosterShell: React.FC<BharatViewPosterShellProps> = ({
  theme,
  toggleTheme,
  poster,
  preloadWebp
}) => {
  const [posterReady, setPosterReady] = useState(false)

  useEffect(() => {
    setPosterReady(false)
  }, [poster.jpg, poster.webp, poster.mobileWebp])

  useEffect(() => {
    window.scrollTo(0, 0)

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    const prevBodyBg = document.body.style.backgroundColor
    const prevHtmlBg = document.documentElement.style.backgroundColor

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.style.backgroundColor = SHELL_BG
    document.documentElement.style.backgroundColor = SHELL_BG

    const isMobile = window.matchMedia(MOBILE_POSTER_MEDIA).matches
    const mobileWebp = poster.mobileWebp ?? poster.webp
    const removePreload = preloadImage(isMobile ? mobileWebp : (preloadWebp ?? poster.webp))

    return () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      document.body.style.backgroundColor = prevBodyBg
      document.documentElement.style.backgroundColor = prevHtmlBg
      removePreload()
    }
  }, [poster.mobileWebp, poster.webp, preloadWebp])

  const mobileWebp = poster.mobileWebp ?? poster.webp
  const mobileJpg = poster.mobileJpg ?? poster.jpg

  return (
    <div
      className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: SHELL_BG }}
    >
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor: SHELL_BG }}>
        <picture className="absolute inset-0 block h-full w-full">
          <source media={MOBILE_POSTER_MEDIA} srcSet={mobileWebp} type="image/webp" />
          <source media={MOBILE_POSTER_MEDIA} srcSet={mobileJpg} type="image/jpeg" />
          <source srcSet={poster.webp} type="image/webp" />
          <img
            src={poster.jpg}
            alt={poster.alt}
            width={poster.width ?? 1536}
            height={poster.height ?? 1024}
            draggable={false}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setPosterReady(true)}
            className={posterImgClass}
            style={{ opacity: posterReady ? 1 : 0 }}
          />
        </picture>
      </div>

      <BharatViewNav theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default BharatViewPosterShell
