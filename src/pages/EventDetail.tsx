import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, Users, Award, Handshake, Mail, Phone, ArrowRight, CheckCircle2, Star, Home } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'

const EventDetail: React.FC = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)

    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const awardCategories = [
    {
      title: "Developer Excellence",
      awards: [
        "Developer of the Year – Residential",
        "Developer of the Year – Commercial",
        "Emerging Developer of the Year",
        "Luxury Real Estate Developer of the Year",
        "Affordable Housing Developer of the Year",
        "Integrated Township Developer of the Year"
      ]
    },
    {
      title: "Project Excellence",
      awards: [
        "Best Residential Project (Luxury / Mid-segment / Affordable)",
        "Best Commercial Project (Office / IT Parks)",
        "Best Retail Project / Mall of the Year",
        "Best Mixed-Use Development Project",
        "Best Smart City Project",
        "Best Township Project",
        "Iconic Landmark Project of the Year"
      ]
    },
    {
      title: "Design & Innovation",
      awards: [
        "Best Architectural Design",
        "Best Interior Design in Real Estate",
        "Innovation in Construction Technology",
        "Best Green Building / Sustainable Project",
        "Best Use of Smart Technology in Real Estate"
      ]
    },
    {
      title: "Sustainability & ESG",
      awards: [
        "Sustainable Developer of the Year",
        "Best Eco-Friendly Residential Project",
        "Best Green Commercial Project",
        "ESG Excellence in Real Estate"
      ]
    },
    {
      title: "Leadership & Professionals",
      awards: [
        "Real Estate Personality of the Year",
        "CEO of the Year",
        "CFO of the Year",
        "Woman Leader in Real Estate",
        "Young Achiever in Real Estate",
        "Best Real Estate Marketing Campaign",
        "Best Real Estate Consultant / Broker / Channel Partner",
        "Best Facility Management Company"
      ]
    },
    {
      title: "Investment & Finance",
      awards: [
        "Best Real Estate Investment Firm",
        "Best REIT / Fractional Investment Platform",
        "Most Innovative Real Estate Financing Model"
      ]
    }
  ]

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(`event-${section}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : 'py-4'
          } backdrop-blur-md`}
        style={{
          backgroundColor: isScrolled
            ? theme === 'dark'
              ? 'rgba(17, 24, 39, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : theme === 'dark'
              ? 'rgba(17, 24, 39, 0.98)'
              : 'rgba(255, 255, 255, 0.98)',
          borderBottom: isScrolled
            ? theme === 'dark'
              ? '1px solid rgba(55, 65, 81, 0.3)'
              : '1px solid rgba(0, 0, 0, 0.1)'
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img
              src={theme === 'dark' ? '/images/Aliief_white.png' : '/images/company-logo.png'}
              alt="Alif View Media Logo"
              className="h-8 sm:h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 lg:px-4 py-2 rounded-lg font-semibold text-xs lg:text-sm transition-all duration-300 ${activeSection === section
                  ? 'text-white shadow-lg'
                  : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  }`}
                style={activeSection === section ? {
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                } : {}}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="md:hidden">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <button
              onClick={() => {
                sessionStorage.setItem('fromEventPage', 'true')
                navigate('/')
              }}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 text-white"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}
            >
              <Home size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden xs:inline sm:hidden lg:inline">Home</span>
              <span className="hidden sm:inline lg:hidden">Back</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
      }}>
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-8 sm:pt-10 md:pt-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Logo Section - Left Side */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-2 sm:px-0">
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl h-56 xs:h-64 sm:h-72 md:h-80 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl"></div>
                <img
                  src="/images/realityLogo.png"
                  alt="RealtyView Leadership Summit & Awards 2026 Logo"
                  className="relative w-full h-full object-contain p-2 sm:p-3 md:p-4 lg:p-6 drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 sm:px-4 lg:px-0">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                  PUNE
                </h1>

                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
                  Driving Leadership & Excellence in Emerging Realty Markets
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
                <div className="flex items-center gap-2 sm:gap-2.5 text-white bg-white/10 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl border border-white/20 shadow-lg sm:shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
                  <Calendar size={18} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">18th April, 2026</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 text-white bg-white/10 backdrop-blur-md px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl border border-white/20 shadow-lg sm:shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center">
                  <MapPin size={18} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">Virtual Event</span>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="lg:hidden flex flex-wrap items-center justify-center gap-2 pt-6">
                {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 backdrop-blur-md border ${activeSection === section
                      ? 'bg-white text-[var(--primary-color)] shadow-lg border-white/30'
                      : 'bg-white/20 text-white hover:bg-white/30 border-white/20'
                      }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div id="event-home" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}>
                <Star size={32} className="sm:w-10 sm:h-10 text-white" fill="currentColor" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
              About the Summit
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="space-y-5 sm:space-y-6 md:space-y-7 text-[var(--text-secondary)] text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4 md:px-0 max-w-4xl mx-auto">
            <p className="text-justify">
              <span className="font-bold text-[var(--text-primary)]">RealtyView Leadership Summit & Awards 2026 – Pune</span> is a premier platform dedicated to advancing the real estate ecosystem in India's Tier-2 and Tier-3 cities. The summit will bring together leading builders, developers, architects, planners, investors, and industry experts for high-level discussions on growth opportunities, market trends, innovation, and sustainable development
            </p>

            <p className="text-justify">
              The event will feature an engaging leadership conference focused on the evolving dynamics of emerging real estate markets, followed by the <span className="font-semibold text-[var(--text-primary)]">RealtyView Leadership Awards 2026</span>, which will recognise and felicitate Individuals and Organisations for their excellence, leadership, and contribution to the real estate sector
            </p>

            <p className="text-justify">
              Designed as a high-impact gathering, the RealtyView Leadership Summit & Awards aims to foster collaboration, knowledge exchange, and industry recognition—driving structured and sustainable realty growth in emerging cities like Pune and beyond
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mt-10 sm:mt-12 md:mt-16 px-4 sm:px-0">
            <button
              className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}
              onClick={() => {
                const contactSection = document.getElementById('event-contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span className="relative z-10">Register Now</span>
              <ArrowRight size={20} className="sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              className="group w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-[var(--text-primary)] rounded-lg sm:rounded-xl border-2 transform hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl"
              style={{
                borderColor: 'var(--primary-color)',
                backgroundColor: 'transparent'
              }}
              onClick={() => {
                const awardsSection = document.getElementById('event-awards')
                if (awardsSection) {
                  awardsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Award size={20} className="sm:w-6 sm:h-6" />
              <span className="text-center">Submit your Nominations</span>
            </button>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div id="event-speakers" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}>
                <Users size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
              Speakers
            </h2>
            <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium px-2">
              Industry leaders and experts sharing insights
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="text-center py-8 sm:py-12 px-2 sm:px-0">
            <div className="bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-3xl mx-auto shadow-xl sm:shadow-2xl border-2" style={{
              borderColor: 'var(--primary-color)'
            }}>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                Speaker lineup will be announced soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div id="event-awards" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}>
                <Award size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
              Awards Categories
            </h2>
            <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium px-2">
              Recognising excellence across the real estate sector
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {awardCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-[var(--bg-primary)] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                style={{
                  borderColor: 'transparent',
                  background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, var(--primary-color), var(--accent-color)) border-box'
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                      }}
                    >
                      <Star size={24} className="sm:w-7 sm:h-7 text-white" fill="currentColor" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 sm:space-y-3">
                    {category.awards.map((award, awardIndex) => (
                      <li key={awardIndex} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-[var(--text-secondary)] group/item">
                        <CheckCircle2 size={16} className="sm:w-5 sm:h-5 text-[var(--primary-color)] mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="leading-relaxed">{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Nomination Process */}
          <div className="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto px-2 sm:px-0">
            <div className="bg-[var(--bg-primary)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 shadow-xl sm:shadow-2xl" style={{
              borderColor: 'var(--primary-color)',
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.03), rgba(245, 158, 11, 0.03)), var(--bg-primary)'
            }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 md:mb-10 text-center px-2">
                Process to Nominate
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
                {[1, 2, 3].map((step, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white shadow-lg sm:shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                      }}
                    >
                      {step}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[var(--text-secondary)] font-semibold px-2">
                      {index === 0 && 'Submit the enquiry form'}
                      {index === 1 && 'Submit the Nomination Form'}
                      {index === 2 && 'Make the Payment'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-primary)] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-l-4 shadow-lg" style={{ borderLeftColor: 'var(--primary-color)' }}>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Nomination Fees:</h4>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-[var(--text-secondary)] text-base sm:text-lg md:text-xl">
                  <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <CheckCircle2 size={20} className="sm:w-6 sm:h-6 text-[var(--primary-color)] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span><strong className="text-[var(--text-primary)]">Rs. 20,000 + GST</strong> (Per nomination)</span>
                  </li>
                  <li className="flex items-start sm:items-center gap-2 sm:gap-3">
                    <CheckCircle2 size={20} className="sm:w-6 sm:h-6 text-[var(--primary-color)] flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>For <strong className="text-[var(--text-primary)]">2 & above nominations</strong>: <strong className="text-[var(--text-primary)]">Rs. 15,000 + GST</strong></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div id="event-partners" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6 gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}>
                <Handshake size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
              Partners
            </h2>
            <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium px-2">
              Join us as a partner
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="text-center py-6 sm:py-8 px-2 sm:px-0">
            <div className="bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-lg sm:shadow-xl border-2 mb-6 sm:mb-8" style={{
              borderColor: 'var(--primary-color)'
            }}>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl mb-5 sm:mb-6 font-medium">
                Partnership opportunities available. Contact us for more information.
              </p>
              <button
                className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                }}
                onClick={() => {
                  const contactSection = document.getElementById('event-contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span className="relative z-10">Become a Partner</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="event-contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}>
                <Mail size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
              Contact Us
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-2 sm:px-0">
            <div className="bg-[var(--bg-primary)] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 group hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl border-2" style={{
              borderColor: 'var(--accent-color)'
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-5 sm:mb-6 md:mb-8">
                For Nominations
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))'
                    }}
                  >
                    <Award size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-[var(--text-primary)] mb-2 sm:mb-3">Anam Shaikh</h4>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] mb-2 sm:mb-3 flex-wrap">
                      <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <a href="mailto:sales@alifviewmedia.com" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg break-all font-medium">
                        sales@alifviewmedia.com
                      </a>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] flex-wrap">
                      <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <a href="tel:+919529518393" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg font-medium">
                        +91 9270096787
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alif View Media. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default EventDetail

