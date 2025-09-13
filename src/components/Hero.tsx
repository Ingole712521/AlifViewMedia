import React, { useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

interface HeroProps {
  onSectionChange?: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ onSectionChange = () => {} }) => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isErasing, setIsErasing] = useState(false)
  const fullText = "Innovation meets Excellence"

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
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-tight">
          <span className="block text-[var(--text-primary)]">Alif View Media</span>
          <div className="typing-container flex justify-center mt-1 xs:mt-2">
            <span 
              className="text-transparent bg-clip-text typing-text-line text-center text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--accent-color))`
              }}
            >
              {displayText}
              {(isTyping || isErasing) && <span className="typing-cursor">|</span>}
            </span>
          </div>
        </h1>
        
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--text-secondary)] mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-1 xs:px-2 sm:px-3 md:px-4">
          We specialize in transforming ordinary moments into extraordinary experiences. 
          AlifView Media aims to be passionate about bringing your vision to life through 
          innovative and creative media solutions.
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-0.5 xs:space-y-1 sm:space-y-1.5 md:space-y-2">
          <span className="text-xs xs:text-sm sm:text-base md:text-lg text-[var(--text-secondary)] hidden xs:block opacity-70">Scroll to explore</span>
          <ChevronDown size={16} className="text-[var(--text-secondary)] xs:hidden" />
          <ChevronDown size={18} className="text-[var(--text-secondary)] hidden xs:block sm:hidden" />
          <ChevronDown size={20} className="text-[var(--text-secondary)] hidden sm:block md:hidden" />
          <ChevronDown size={22} className="text-[var(--text-secondary)] hidden md:block lg:hidden" />
          <ChevronDown size={24} className="text-[var(--text-secondary)] hidden lg:block xl:hidden" />
          <ChevronDown size={26} className="text-[var(--text-secondary)] hidden xl:block 2xl:hidden" />
          <ChevronDown size={28} className="text-[var(--text-secondary)] hidden 2xl:block" />
        </div>
      </div>
    </section>
  )
}

export default Hero as React.FC<HeroProps>
