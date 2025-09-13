import React, { useState, useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  onVideoEnd: () => void
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ onVideoEnd }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
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

    // Try to play video
    video.play().catch((error) => {
      console.error('Video autoplay failed:', error)
      setTimeout(() => {
        setShowVideo(false)
        onVideoEnd()
      }, 2000)
    })

    // Fallback: if video doesn't load within 8 seconds, proceed to main content
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout, proceeding to main content')
        setShowVideo(false)
        onVideoEnd()
      }
    }, 8000)

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [onVideoEnd, isLoading])

  if (!showVideo) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-black w-screen h-screen overflow-hidden">
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Responsive Video Container */}
      <div className="video-container" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}>
        <div className="video-wrapper" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%' }}>
          <video
            ref={videoRef}
            className="responsive-video"
            muted
            playsInline
            preload="auto"
            autoPlay
            crossOrigin="anonymous"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          >
            <source src="/assets/background.mp4" type="video/mp4" />
            <source src="./assets/background.mp4" type="video/mp4" />
            <source src="assets/background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoBackground
