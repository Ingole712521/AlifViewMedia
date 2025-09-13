// import React, { useState, useEffect, useRef } from 'react'

// interface VideoBackgroundProps {
//   onVideoEnd: () => void
// }

// const VideoBackground: React.FC<VideoBackgroundProps> = ({ onVideoEnd }) => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [showVideo, setShowVideo] = useState(true)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const handleLoadedData = () => {
//       setIsLoading(false)
//     }

//     const handleEnded = () => {
//       setShowVideo(false)
//       onVideoEnd()
//     }

//     const handleError = () => {
//       console.error('Video failed to load')
//       setShowVideo(false)
//       onVideoEnd()
//     }

//     video.addEventListener('loadeddata', handleLoadedData)
//     video.addEventListener('ended', handleEnded)
//     video.addEventListener('error', handleError)

//     // Try to play video
//     video.play().catch((error) => {
//       console.error('Video autoplay failed:', error)
//       setTimeout(() => {
//         setShowVideo(false)
//         onVideoEnd()
//       }, 2000)
//     })

//     // Fallback: if video doesn't load within 8 seconds, proceed to main content
//     const fallbackTimer = setTimeout(() => {
//       if (isLoading) {
//         console.warn('Video loading timeout, proceeding to main content')
//         setShowVideo(false)
//         onVideoEnd()
//       }
//     }, 8000)

//     return () => {
//       clearTimeout(fallbackTimer)
//       video.removeEventListener('loadeddata', handleLoadedData)
//       video.removeEventListener('ended', handleEnded)
//       video.removeEventListener('error', handleError)
//     }
//   }, [onVideoEnd, isLoading])

//   if (!showVideo) {
//     return null
//   }

//   return (
//     <div className="fixed inset-0 z-50 bg-black w-screen h-screen overflow-hidden">
      
//       {isLoading && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
//         </div>
//       )}

//       {/* Video - Perfectly Centered and Responsive */}
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         muted
//         playsInline
//         preload="auto"
//         autoPlay
//         crossOrigin="anonymous"
//         style={{
//           width: '100vw',
//           height: '100vh',
//           objectFit: 'cover',
//           objectPosition: 'center',
//           minWidth: '100%',
//           minHeight: '100%'
//         }}
//       >
//         <source src="/assets/background.mp4" type="video/mp4" />
//         <source src="./assets/background.mp4" type="video/mp4" />
//         <source src="assets/background.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   )
// }

// export default VideoBackground


import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  onVideoEnd?: () => void;
  videoSources?: string[];
  loadingFallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  onVideoEnd = () => {},
  videoSources = [
    "/assets/background.mp4",
    "./assets/background.mp4",
    "assets/background.mp4"
  ],
  loadingFallback,
  errorFallback,
  autoPlay = true,
  muted = true,
  loop = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      setHasError(false);
    };

    const handleEnded = () => {
      if (!loop) {
        setShowVideo(false);
        onVideoEnd();
      }
    };

    const handleError = () => {
      console.error('Video failed to load');
      setIsLoading(false);
      setHasError(true);
      if (!loop) {
        setTimeout(() => {
          setShowVideo(false);
          onVideoEnd();
        }, 2000);
      }
    };

    const handleCanPlay = () => {
      // Attempt to play video when enough has loaded
      if (autoPlay) {
        video.play().catch((error) => {
          console.error('Video autoplay failed:', error);
          // If autoplay fails, we'll still show the video but paused
        });
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    // Fallback: if video doesn't load within 8 seconds, proceed
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.warn('Video loading timeout');
        setHasError(true);
        setIsLoading(false);
        if (!loop) {
          setShowVideo(false);
          onVideoEnd();
        }
      }
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [onVideoEnd, isLoading, autoPlay, loop]);

  // Handle resize to maintain aspect ratio
  useEffect(() => {
    const handleResize = () => {
      const video = videoRef.current;
      const container = containerRef.current;
      
      if (!video || !container) return;
      
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const videoAspectRatio = video.videoWidth / video.videoHeight;
      const containerAspectRatio = containerWidth / containerHeight;
      
      if (containerAspectRatio > videoAspectRatio) {
        // Container is wider than video
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.left = '0';
        video.style.top = `${(containerHeight - (containerWidth / videoAspectRatio)) / 2}px`;
      } else {
        // Container is taller than video
        video.style.width = 'auto';
        video.style.height = '100%';
        video.style.top = '0';
        video.style.left = `${(containerWidth - (containerHeight * videoAspectRatio)) / 2}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Call once on mount
    setTimeout(handleResize, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!showVideo) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="video-background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 50,
        backgroundColor: '#000'
      }}
    >
      {isLoading && (
        loadingFallback || (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            zIndex: 10
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              border: '5px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              borderTopColor: 'white',
              animation: 'spin 1s ease-in-out infinite'
            }}></div>
          </div>
        )
      )}
      
      {hasError && (
        errorFallback || (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
            zIndex: 10
          }}>
            <p>Video failed to load</p>
          </div>
        )
      )}

      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        muted={muted}
        playsInline
        preload="auto"
        autoPlay={autoPlay}
        loop={loop}
        crossOrigin="anonymous"
      >
        {videoSources.map((src, index) => (
          <source key={index} src={src} type="video/mp4" />
        ))}
        Your browser does not support the video tag.
      </video>
      
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default VideoBackground;