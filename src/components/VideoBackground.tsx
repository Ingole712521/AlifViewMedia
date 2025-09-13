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

    video.play().catch((error) => {
      console.error('Video autoplay failed:', error)
      setTimeout(() => {
        setShowVideo(false)
        onVideoEnd()
      }, 2000)
    })

    // Fallback: if video doesn't load within 10 seconds, proceed to main content
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout, proceeding to main content')
        setShowVideo(false)
        onVideoEnd()
      }
    }, 10000)

    return () => {
      clearTimeout(fallbackTimer)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('error', handleError)
    }
  }, [onVideoEnd])

  if (!showVideo) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      )}

      {/* Full Screen Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        autoPlay
        crossOrigin="anonymous"
      >
        <source src="/assets/background.mp4" type="video/mp4" />
        <source src="./assets/background.mp4" type="video/mp4" />
        <source src="assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoBackground
