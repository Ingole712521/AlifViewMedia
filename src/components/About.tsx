import React, { useState, useEffect } from 'react'
import { ExternalLink, Users, Lightbulb, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const About: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string>('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Get the appropriate logo based on current theme
    const theme = document.documentElement.getAttribute('data-theme')
    const companyLogo = 'https://app.trickle.so/storage/public/images/usr_1452d643e0000001/e35e791a-3f5e-42cb-aeff-d5c9c40f0821.png'
    const darkLogo = 'https://app.trickle.so/storage/public/images/usr_1452d643e0000001/d3044b19-cda1-4ab8-b5bc-1aeb931b233c.png'
    
    setLogoUrl(theme === 'dark' ? darkLogo : companyLogo)
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme')
      setLogoUrl(currentTheme === 'dark' ? darkLogo : companyLogo)
    })
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    })

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const features = [
    {
      icon: <Users size={20} className="text-white" />,
      title: "Expert Team",
      description: "Professional Organizers",
      color: "var(--primary-color)"
    },
    {
      icon: <Lightbulb size={20} className="text-white" />,
      title: "Innovation",
      description: "Creative Solutions",
      color: "var(--secondary-color)"
    },
    {
      icon: <Award size={20} className="text-white" />,
      title: "Excellence",
      description: "Quality Events",
      color: "var(--accent-color)"
    },
    {
      icon: <Globe size={20} className="text-white" />,
      title: "Global Reach",
      description: "Worldwide Impact",
      color: "var(--primary-color)"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section 
      className="section-padding px-4 sm:px-6 lg:px-8" 
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 md:mb-6">
            About Us
          </h2>
          
          {/* Company Logo */}
        
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              AlifView Media is a premier conference organizer. We are dedicated to delivering 
              exceptional value through landmark summits that provide unique opportunities for 
              delegates to exchange knowledge and learn about the latest technological and 
              innovative advancements.
            </p>
            
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              A prestigious platform that honors the exceptional contributions and success of 
              individuals, teams, and organizations who have demonstrated excellence, innovation, 
              and impact in their respective domains.
            </p>

            <div className="pt-4 md:pt-6">
              <button className="btn-primary w-full sm:w-auto">
                <span className="flex items-center justify-center space-x-2">
                  <span>Learn More About Our Services</span>
                  <ExternalLink size={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Features - Desktop Grid / Mobile Carousel */}
          <div className="order-1 lg:order-2">
            {isMobile ? (
              // Mobile Carousel
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {features.map((feature, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="card text-center h-full">
                          <div 
                            className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" 
                            style={{ backgroundColor: feature.color }}
                          >
                            {feature.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                          <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Carousel Controls */}
                <div className="flex justify-center items-center mt-6 space-x-4">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)] transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide 
                            ? 'bg-[var(--primary-color)]' 
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--secondary-color)] transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ) : (
              // Desktop Grid
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="card text-center">
                    <div 
                      className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" 
                      style={{ backgroundColor: feature.color }}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
