import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import ObjectivesMission from '../components/ObjectivesMission'
import Events from '../components/Events'
import MediaGallery from '../components/MediaGallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import VideoBackground from '../components/VideoBackground'
import SEO from '../components/SEO'
import { trackPageView } from '../utils/analytics'
import { initPerformanceOptimizations } from '../utils/performance'

function Home() {
  const location = useLocation()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [currentSection, setCurrentSection] = useState<string>('home')
  // Initialize showVideo based on sessionStorage to prevent flash
  const [showVideo, setShowVideo] = useState(() => {
    const fromEvent = sessionStorage.getItem('fromEventPage')
    const hasSeenVideo = sessionStorage.getItem('hasSeenVideo')
    // Don't show video if coming from event page or if already seen
    return !fromEvent && hasSeenVideo !== 'true'
  })

  useEffect(() => {
    // Check if coming from event page and skip video
    const fromEvent = sessionStorage.getItem('fromEventPage')
    if (fromEvent) {
      sessionStorage.removeItem('fromEventPage')
      setShowVideo(false)
      return
    }
    
    // Check if user has already seen the video in this session
    const hasSeenVideo = sessionStorage.getItem('hasSeenVideo')
    if (hasSeenVideo === 'true') {
      setShowVideo(false)
    }
  }, [location])

  useEffect(() => {
    // Mark video as seen when it ends
    if (!showVideo) {
      sessionStorage.setItem('hasSeenVideo', 'true')
    }
  }, [showVideo])

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
    
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    
    // Initialize performance optimizations
    initPerformanceOptimizations()
    
    // Track initial page view
    trackPageView(window.location.pathname)
  }, [])

  // Update favicon on theme change so the tab logo is visible in both modes
  useEffect(() => {
    const lightIcon = '/images/company-logo.png'
    const darkIcon = '/images/Aliief_white.png'
    const iconHref = theme === 'dark' ? darkIcon : lightIcon
    const existing = document.querySelector("link[rel='icon']") as HTMLLinkElement | null
    if (existing) {
      existing.href = iconHref
    } else {
      const link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/png'
      link.href = iconHref
      document.head.appendChild(link)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const handleSectionChange = (section: string) => {
    setCurrentSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <>
      <SEO />
      {/* Video Background - Shows first as splash screen */}
      {showVideo && <VideoBackground onVideoEnd={handleVideoEnd} />}
      
      {/* Main Website Content - Only shows after video ends */}
      {!showVideo && (
        <div className="min-h-screen">
          <Navigation 
            theme={theme} 
            toggleTheme={toggleTheme}
            currentSection={currentSection}
            onSectionChange={handleSectionChange}
          />
          
          <main>
            <section id="home">
              <Hero onSectionChange={handleSectionChange} />
            </section>
            
            <section id="about">
              <About />
            </section>
            
            <section id="objectives-mission">
              <ObjectivesMission />
            </section>
            
            <section id="events">
              <Events />
            </section>
            
            <section id="gallery">
              <MediaGallery />
            </section>
            
            <section id="contact">
              <Contact />
            </section>
          </main>
          
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home

