import React, { useState, useEffect } from 'react'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isErasing, setIsErasing] = useState(false)
  const fullText = "Innovation meets Excellence"

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
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: 'var(--primary-color)' }}></div>
      </div>
      <div className="absolute bottom-20 right-10 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: 'var(--accent-color)' }}></div>
      </div>
      <div className="absolute top-1/2 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-full opacity-20" style={{ backgroundColor: 'var(--secondary-color)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto section-padding">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-[var(--text-primary)]">Alif View Media</span>
          <div className="typing-container">
            <span 
              className="block text-transparent bg-clip-text mt-2 typing-text-line text-left"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--primary-color), var(--accent-color))`,
                marginLeft: '-60px'
              }}
            >
              {displayText}
              {(isTyping || isErasing) && <span className="typing-cursor">|</span>}
            </span>
          </div>
        </h1>
        
        <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
          We specialize in transforming ordinary moments into extraordinary experiences. 
          AlifView Media aims to be passionate about bringing your vision to life through 
          innovative and creative media solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary transform hover:scale-105">
            <span className="flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </span>
          </button>
          
          <button className="btn-secondary hover:bg-[var(--primary-color)] hover:text-white">
            <span className="flex items-center space-x-2">
              <Phone size={18} />
              <span>Get in Touch</span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-[var(--text-secondary)]" />
      </div>
    </section>
  )
}

export default Hero
