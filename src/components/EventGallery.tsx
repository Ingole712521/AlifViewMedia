import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, Images, X } from 'lucide-react'
import { warmImageCache } from '../utils/preloadImage'

interface EventGalleryProps {
  images: string[]
  theme: 'light' | 'dark'
}

const EventGallery: React.FC<EventGalleryProps> = ({ images, theme }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const rowOne = images.filter((_, i) => i % 2 === 0)
  const rowTwo = images.filter((_, i) => i % 2 === 1)
  const marqueeRowOne = [...rowOne, ...rowOne]
  const marqueeRowTwo = [...rowTwo, ...rowTwo]

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + images.length) % images.length)
  }, [images.length])

  const goLightbox = useCallback((delta: number) => {
    setLightboxIndex((current) => {
      if (current === null) return null
      return (current + delta + images.length) % images.length
    })
  }, [images.length])

  useEffect(() => {
    warmImageCache(...images.slice(0, 8))
  }, [images])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3200)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') goLightbox(1)
      if (event.key === 'ArrowLeft') goLightbox(-1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, closeLightbox, goLightbox])

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const resumeAutoPlay = () => {
    if (autoPlayRef.current) return
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 3200)
  }


  const imageFrameBg = theme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : '#f1f5f9'

  return (
    <div ref={sectionRef} className="relative">
      <div className={`text-center mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wide uppercase"
          style={{
            background: theme === 'dark' ? 'rgba(220, 38, 38, 0.15)' : 'rgba(220, 38, 38, 0.08)',
            color: 'var(--primary-color)'
          }}
        >
          <Images size={14} />
          Event Highlights
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
          Gallery
        </h2>
        <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          A fast-moving showcase of partner moments, stage energy, and on-ground highlights.
        </p>
        <div
          className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full mt-5 sm:mt-6"
          style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)' }}
        />
      </div>

      {/* Featured spotlight */}
      <div
        className={`mb-8 sm:mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
        onFocus={pauseAutoPlay}
        onBlur={resumeAutoPlay}
      >
        <div
          className="relative overflow-hidden rounded-3xl border shadow-2xl"
          style={{
            borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.55)' : 'rgba(226, 232, 240, 1)',
            backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.7)' : '#ffffff'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-amber-500/20 pointer-events-none z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr]">
            <button
              type="button"
              onClick={() => openLightbox(activeIndex)}
              className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] flex items-center justify-center overflow-hidden group text-left p-2 sm:p-3"
              style={{ backgroundColor: imageFrameBg }}
              aria-label="Open featured gallery image"
            >
              {[
                (activeIndex - 1 + images.length) % images.length,
                activeIndex,
                (activeIndex + 1) % images.length
              ].map((index) => (
                <img
                  key={`${images[index]}-${index}`}
                  src={images[index]}
                  alt={`Featured gallery ${index + 1}`}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  {...(index === activeIndex ? { fetchPriority: 'high' as const } : {})}
                  className={`absolute inset-2 sm:inset-3 max-h-[calc(100%-1rem)] max-w-[calc(100%-1rem)] m-auto object-contain transition-all duration-700 ease-out ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 text-white">
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 mb-1">Featured Moment</p>
                <p className="text-lg sm:text-2xl font-bold">{activeIndex + 1} / {images.length}</p>
              </div>
              <div className="absolute top-4 right-4 z-20 rounded-full bg-black/45 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand size={18} />
              </div>
            </button>

            <div className="p-3 sm:p-4 grid grid-cols-4 lg:grid-cols-2 gap-2 sm:gap-3 content-start max-h-[320px] lg:max-h-none overflow-y-auto lg:overflow-visible">
              {images.slice(0, 8).map((image, index) => (
                <button
                  key={`thumb-${image}`}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 aspect-[4/3] flex items-center justify-center p-1 ${activeIndex === index ? 'border-red-500 scale-[1.03] shadow-lg' : 'border-transparent opacity-80 hover:opacity-100 hover:scale-[1.02]'}`}
                  style={{ backgroundColor: imageFrameBg }}
                  aria-label={`Show gallery image ${index + 1}`}
                >
                  <img src={image} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="rounded-full bg-black/45 p-2 text-white hover:bg-black/65 transition-colors"
              aria-label="Previous featured image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="rounded-full bg-black/45 p-2 text-white hover:bg-black/65 transition-colors"
              aria-label="Next featured image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Fast dual marquee */}
      <div className={`space-y-4 sm:space-y-5 mb-8 sm:mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <MarqueeRow images={marqueeRowOne} direction="left" speed="fast" onSelect={openLightbox} baseOffset={0} theme={theme} />
        <MarqueeRow images={marqueeRowTwo} direction="right" speed="faster" onSelect={openLightbox} baseOffset={1} theme={theme} />
      </div>

      {/* Masonry grid — full images, no crop */}
      <div className={`columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {images.map((image, index) => (
          <button
            key={`bento-${image}`}
            type="button"
            onClick={() => openLightbox(index)}
            className="event-gallery-bento-item group relative mb-3 sm:mb-4 break-inside-avoid w-full overflow-hidden rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-300"
            style={{
              borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.55)' : 'rgba(226, 232, 240, 1)',
              backgroundColor: imageFrameBg,
              animationDelay: `${(index % 8) * 70}ms`
            }}
            aria-label={`Open gallery image ${index + 1}`}
          >
            <img
              src={image}
              alt={`Gallery moment ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs sm:text-sm font-semibold">View Full</span>
              <Expand size={16} />
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[120] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              goLightbox(-1)
            }}
            className="absolute left-3 sm:left-6 rounded-full bg-white/10 p-2 sm:p-3 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              goLightbox(1)
            }}
            className="absolute right-3 sm:right-6 rounded-full bg-white/10 p-2 sm:p-3 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div className="max-w-6xl w-full" onClick={(event) => event.stopPropagation()}>
            <img
              src={images[lightboxIndex]}
              alt={`Gallery full view ${lightboxIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <p className="text-center text-white/80 mt-4 text-sm sm:text-base">
              {lightboxIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

interface MarqueeRowProps {
  images: string[]
  direction: 'left' | 'right'
  speed: 'fast' | 'faster'
  onSelect: (index: number) => void
  baseOffset: number
  theme: 'light' | 'dark'
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ images, direction, speed, onSelect, baseOffset, theme }) => {
  const uniqueCount = images.length / 2
  const fadeColor = theme === 'dark' ? 'var(--bg-secondary)' : '#f8fafc'

  return (
    <div className="event-gallery-marquee relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10"
        style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10"
        style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
      />

      <div
        className={`event-gallery-marquee-track flex w-max gap-3 sm:gap-4 ${direction === 'right' ? 'event-gallery-marquee-reverse' : ''} ${speed === 'faster' ? 'event-gallery-marquee-faster' : ''}`}
      >
        {images.map((image, index) => {
          const sourceIndex = (index % uniqueCount) * 2 + baseOffset
          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => onSelect(sourceIndex)}
              className="group relative h-40 sm:h-48 w-64 sm:w-80 flex-shrink-0 overflow-hidden rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center p-2"
              style={{
                borderColor: 'rgba(226, 232, 240, 0.8)',
                backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : '#f1f5f9'
              }}
              aria-label={`Open marquee image ${sourceIndex + 1}`}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default EventGallery
