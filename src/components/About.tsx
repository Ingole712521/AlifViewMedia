import React, { useState, useEffect } from 'react'
import { ExternalLink, Users, Lightbulb, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)


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
    setIsAutoSliding(false) // Pause auto-slide when manually navigating
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
    setIsAutoSliding(false) // Pause auto-slide when manually navigating
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoSliding(false) // Pause auto-slide when manually navigating
  }

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (!isAutoSliding) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoSliding, features.length])

  // Pause auto-slide on hover/touch
  const handleMouseEnter = () => {
    setIsAutoSliding(false)
  }

  const handleMouseLeave = () => {
    setIsAutoSliding(true)
  }

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full" 
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight">
            About Us
          </h2>
        </div>

        <div className="w-full">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden w-full">
            {/* Features Carousel - Mobile */}
            <div className="mb-8 sm:mb-12">
              <div className="relative w-full">
                <div 
                  className="overflow-hidden rounded-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleMouseEnter}
                  onTouchEnd={handleMouseLeave}
                >
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {features.map((feature, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className="card text-center h-full min-h-[200px] flex flex-col justify-center">
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
                        onClick={() => goToSlide(index)}
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
            </div>

            {/* Content - Mobile */}
            <div className="space-y-4 sm:space-y-6 text-center">
              <p className="text-sm xs:text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed px-2 text-justify">
                AlifView Media is a premier conference organizer. We are dedicated to delivering 
                exceptional value through landmark summits that provide unique opportunities for 
                delegates to exchange knowledge and learn about the latest technological and 
                innovative advancements
              </p>
              
              <p className="text-sm xs:text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed px-2 text-justify">
                A prestigious platform that honors the exceptional contributions and success of 
                individuals, teams, and organizations who have demonstrated excellence, innovation
                and impact in their respective domains
              </p>

              <div className="pt-4 sm:pt-6">
                <button className="btn-primary w-full max-w-xs mx-auto">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Learn More About Our Services</span>
                    <ExternalLink size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Two Column */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 xl:space-y-8">
              <p className="text-sm xs:text-base sm:text-lg text-gray/90 max-w-3xl mx-auto leading-relaxed mb-8 px-2 text-justify">
                AlifView Media is a premier conference organizer. We are dedicated to delivering 
                exceptional value through landmark summits that provide unique opportunities for 
                delegates to exchange knowledge and learn about the latest technological and 
                innovative advancements
              </p>
              
              <p className="text-sm xs:text-base sm:text-lg text-gray/90 max-w-3xl mx-auto leading-relaxed mb-8 px-2 text-justify">
                A prestigious platform that honors the exceptional contributions and success of 
                individuals, teams, and organizations who have demonstrated excellence, innovation
                and impact in their respective domains
              </p>

              <div className="pt-6 xl:pt-8">
                <button className="btn-primary">
                  <span className="flex items-center space-x-2">
                    <span>Learn More About Our Services</span>
                    <ExternalLink size={18} />
                  </span>
                </button>
              </div>
            </div>

            {/* Features - Desktop Grid */}
            <div className="grid grid-cols-2 gap-4 xl:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card text-center">
                  <div 
                    className="w-12 h-12 xl:w-16 xl:h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" 
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2 text-sm xl:text-base">{feature.title}</h3>
                  <p className="text-xs xl:text-sm text-[var(--text-secondary)]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
