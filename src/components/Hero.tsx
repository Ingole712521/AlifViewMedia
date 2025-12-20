import React, { useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

interface HeroProps {
  onSectionChange?: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ onSectionChange = () => {} }) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isErasing, setIsErasing] = useState(false)
  const fullText = "Empowering Progress Enabling Futures"

  const handleGetInTouch = () => {
    if (onSectionChange) {
      onSectionChange('contact')
    } else {
      // Fallback: scroll to contact section
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLearnMore = () => {
    if (onSectionChange) {
      onSectionChange('about')
    } else {
      // Fallback: scroll to about section
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let pauseCount = 0
    const pauseDuration = 20 // 20 * 100ms = 2 seconds pause
    
    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing phase
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1))
          index++
        } else {
          // Finished typing, pause before erasing
          pauseCount++
          if (pauseCount >= pauseDuration) {
            isDeleting = true
            setIsErasing(true)
            pauseCount = 0
          }
        }
      } else {
        // Erasing phase
        if (index > 0) {
          setDisplayText(fullText.substring(0, index - 1))
          index--
        } else {
          // Finished erasing, start typing again
          isDeleting = false
          setIsErasing(false)
          setIsTyping(true)
        }
      }
    }, 100) // Consistent timing

    return () => clearInterval(typingInterval)
  }, [])
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-12 xs:top-14 sm:top-16 md:top-20 lg:top-24 left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10 2xl:left-12 floating-animation">
        <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color)' }}></div>
      </div>
      <div className="absolute bottom-12 xs:bottom-14 sm:bottom-16 md:bottom-20 lg:bottom-24 right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-full opacity-20" style={{ backgroundColor: 'var(--accent-color)' }}></div>
      </div>
      <div className="absolute top-1/2 left-4 xs:left-6 sm:left-8 md:left-12 lg:left-16 xl:left-20 2xl:left-24 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 rounded-full opacity-20" style={{ backgroundColor: 'var(--secondary-color)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto section-padding px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold   leading-tight  ">
          <span className="block text-[var(--text-primary)] pb-1 sm:pb-2">Alif View Media</span>
          <div className="typing-container flex justify-center mt-2 min-h-[1.2em] sm:min-h-[1.3em] md:min-h-[1.4em] lg:min-h-[1.5em]">
            <span 
              className="text-transparent bg-clip-text typing-text-line text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--accent-color))`,
                lineHeight: '1.2',
                paddingBottom: '0.1em'
              }}
              aria-label="Empowering Progress. Enabling Futures"
            >
              {displayText}
              {(isTyping || isErasing) && <span className="typing-cursor" aria-hidden="true">|</span>}
            </span>
          </div>
        </h1>
        
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
        Alifview is a professional business networking platform specializing in conferences, award ceremonies, and industry-focused forums. We curate high-impact events that bring together key stakeholders, decision-makers, and industry leaders across sectors.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center items-center px-1 xs:px-2 sm:px-3 md:px-4">
          <button 
            className="btn-primary transform hover:scale-105 w-full xs:w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px] md:min-w-[240px] text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4"
            onClick={handleLearnMore}
          >
            <span className="flex items-center justify-center space-x-1 xs:space-x-2">
              <span>Learn More</span>
              <ArrowRight size={14} className="xs:hidden" />
              <ArrowRight size={16} className="hidden xs:block sm:hidden" />
              <ArrowRight size={18} className="hidden sm:block" />
            </span>
          </button>
          
          <button 
            className="btn-secondary hover:bg-[var(--primary-color)] hover:text-white w-full xs:w-full sm:w-auto min-w-[180px] xs:min-w-[200px] sm:min-w-[220px] md:min-w-[240px] text-xs xs:text-sm sm:text-base md:text-lg px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-3 sm:py-4"
            onClick={handleGetInTouch}
          >
            <span className="flex items-center justify-center space-x-1 xs:space-x-2">
              <Phone size={14} className="xs:hidden" />
              <Phone size={16} className="hidden xs:block sm:hidden" />
              <Phone size={18} className="hidden sm:block" />
              <span>Get in Touch</span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Extreme Right */}
      <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 z-10">
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="group flex flex-col items-center space-y-1 rounded-full transition-all duration-300 hover:scale-110 transform"
          style={{
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(245, 158, 11, 0.1))',
            backdropFilter: 'blur(10px)',
            padding: '0.75rem',
          }}
          aria-label="Scroll to explore"
        >
          {/* <span className="text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-[var(--text-primary)] hidden xs:block opacity-80 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Scroll to explore
          </span> */}
          <div className="relative">
            <div 
              className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 animate-bounce"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}
            >
              <ChevronDown 
                size={20} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 xs:hidden" 
              />
              <ChevronDown 
                size={22} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden xs:block sm:hidden" 
              />
              <ChevronDown 
                size={24} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden sm:block md:hidden" 
              />
              <ChevronDown 
                size={26} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden md:block lg:hidden" 
              />
              <ChevronDown 
                size={28} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden lg:block xl:hidden" 
              />
              <ChevronDown 
                size={30} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden xl:block 2xl:hidden" 
              />
              <ChevronDown 
                size={32} 
                className="text-white transform group-hover:translate-y-1 transition-transform duration-300 hidden 2xl:block" 
              />
            </div>
            <div className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          </div>
        </button>
      </div>
    </section>
  )
}

export default Hero as React.FC<HeroProps>
