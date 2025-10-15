import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import MediaGallery from './components/MediaGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoBackground from './components/VideoBackground'
import SEO from './components/SEO'
import { initGA, trackPageView } from './utils/analytics'
import { initPerformanceOptimizations } from './utils/performance'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [currentSection, setCurrentSection] = useState<string>('home')
  const [showVideo, setShowVideo] = useState(true)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    
    // Initialize analytics and performance optimizations
    initGA()
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
