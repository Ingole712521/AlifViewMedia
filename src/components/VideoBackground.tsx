import React, { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  onVideoEnd: () => void
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onVideoEnd }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
    }

    const handleEnded = () => {
      setShowVideo(false)
      onVideoEnd()
    }

    const handleError = () => {
      console.error('Video failed to load')
      setShowVideo(false)
      onVideoEnd()
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('error', handleError)

    // For mobile devices, show fallback immediately or try video with shorter timeout
    if (isMobile) {
      setTimeout(() => {
        setShowVideo(false)
        onVideoEnd()
      }, 3000) // Shorter timeout for mobile
    } else {
      video.play().catch((error) => {
        console.error('Video autoplay failed:', error)
        setTimeout(() => {
          setShowVideo(false)
          onVideoEnd()
        }, 2000)
      })
    }

    // Fallback: if video doesn't load within 10 seconds, proceed to main content
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout, proceeding to main content')
        setShowVideo(false)
        onVideoEnd()
      }
    }, isMobile ? 5000 : 10000)

    return () => {
      clearTimeout(fallbackTimer)
      window.removeEventListener('resize', checkMobile)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [onVideoEnd, isMobile])

  if (!showVideo) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="flex flex-col items-center space-y-2 xs:space-y-3 sm:space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 border-b-2 border-white"></div>
            <p className="text-white text-sm xs:text-base sm:text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Full Screen Video - Perfectly Centered */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        crossOrigin="anonymous"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          maxWidth: 'none',
          maxHeight: 'none'
        }}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
        <source src="./assets/background.mp4" type="video/mp4" />
        <source src="assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Fallback - Show on mobile devices */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent-color)] opacity-90 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center px-4 max-w-sm mx-auto">
            <h1 className="text-2xl xs:text-3xl font-bold text-white mb-4">Alif View Media</h1>
            <p className="text-white text-sm xs:text-base mb-6">Innovation meets Excellence</p>
            <div className="animate-pulse">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoBackground
