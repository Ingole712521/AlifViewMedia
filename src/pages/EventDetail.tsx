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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-lg' : 'py-4'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={theme === 'dark' ? '/images/Aliief_white.png' : '/images/company-logo.png'}
              alt="Alif View Media Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeSection === section
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

          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white"
              style={{ 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
              }}
            >
              <Home size={18} />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ 
        backgroundColor: '#181935'
      }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s', backgroundColor: 'var(--accent-color)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Logo Section */}
          <div className="mb-4 sm:mb-6 flex justify-center">
            <div className="relative w-full max-w-xl mx-auto h-48 sm:h-64 md:h-80 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/realityLogo.png"
                alt="RealtyView Leadership Summit & Awards 2026 Logo"
                className="w-full h-full object-contain p-2 sm:p-4 md:p-6 drop-shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-lg"></div>
            </div>
          </div>
          
          <div className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg border border-white/20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>
              REALTYVIEW LEADERSHIP SUMMIT & AWARDS 2026
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-5 leading-tight drop-shadow-lg">
            NASHIK
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-semibold mb-5 sm:mb-7 drop-shadow-md">
            Driving Leadership & Excellence in Emerging Realty Markets
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg hover:bg-white/30 transition-all duration-300">
              <Calendar size={18} />
              <span className="text-sm sm:text-base font-medium">18th April, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg hover:bg-white/30 transition-all duration-300">
              <MapPin size={18} />
              <span className="text-sm sm:text-base font-medium">Virtual Event</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-wrap items-center justify-center gap-2 mb-4">
            {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 backdrop-blur-md border ${
                  activeSection === section
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

      {/* Home Section */}
      <div id="event-home" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Star size={32} className="text-white" fill="currentColor" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
              About the Summit
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          </div>
          
          <div className="space-y-5 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
            <p>
              RealtyView Leadership Summit & Awards 2026 – Nashik is a premier platform dedicated to advancing the real estate ecosystem in India's Tier-2 and Tier-3 cities. The summit will bring together leading builders, developers, architects, planners, investors, and industry experts for high-level discussions on growth opportunities, market trends, innovation, and sustainable development.
            </p>
            
            <p>
              The event will feature an engaging leadership conference focused on the evolving dynamics of emerging real estate markets, followed by the RealtyView Leadership Awards 2026, which will recognise and felicitate Individuals and Organisations for their excellence, leadership, and contribution to the real estate sector.
            </p>
            
            <p>
              Designed as a high-impact gathering, the RealtyView Leadership Summit & Awards aims to foster collaboration, knowledge exchange, and industry recognition—driving structured and sustainable realty growth in emerging cities like Nashik and beyond.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <button 
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => {
                const contactSection = document.getElementById('event-contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Register Now
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => {
                const awardsSection = document.getElementById('event-awards')
                if (awardsSection) {
                  awardsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Submit your Nominations
              <Award size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div id="event-speakers" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Users size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Speakers
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-4">
              Industry leaders and experts sharing insights
            </p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          </div>
          
          <div className="text-center py-8">
            <div className="card p-8 max-w-2xl mx-auto">
              <p className="text-[var(--text-secondary)] text-lg">
                Speaker lineup will be announced soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div id="event-awards" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Award size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Awards Categories
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-4">
              Recognising excellence across the real estate sector
            </p>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {awardCategories.map((category, index) => (
              <div 
                key={index}
                className="card group hover:scale-105 transition-all duration-300 border-2 hover:shadow-2xl"
                style={{ 
                  borderColor: 'transparent',
                  background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(135deg, var(--primary-color), var(--accent-color)) border-box'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    <Star size={24} className="text-white" fill="currentColor" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {category.awards.map((award, awardIndex) => (
                    <li key={awardIndex} className="flex items-start gap-2 text-sm sm:text-base text-[var(--text-secondary)]">
                      <CheckCircle2 size={18} className="text-[var(--primary-color)] mt-1 flex-shrink-0" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nomination Process */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="card border-2" style={{ 
              borderColor: 'var(--primary-color)',
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05), rgba(245, 158, 11, 0.05))'
            }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">
                Process to Nominate
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[1, 2, 3].map((step, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    >
                      {step}
                    </div>
                    <p className="text-[var(--text-secondary)] font-semibold">
                      {index === 0 && 'Submit the enquiry form'}
                      {index === 1 && 'Submit the Nomination Form'}
                      {index === 2 && 'Make the Payment'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[var(--bg-primary)] p-6 rounded-xl border-l-4" style={{ borderLeftColor: 'var(--primary-color)' }}>
                <h4 className="text-xl font-bold text-[var(--text-primary)] mb-4">Nomination Fees:</h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[var(--primary-color)]" />
                    <span>Rs. 20,000 + GST (Per nomination)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[var(--primary-color)]" />
                    <span>For 2 & above nominations: Rs. 15,000 + GST</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div id="event-partners" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Handshake size={40} className="text-white" />
              </div>
              <span>Partners</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Join us as a partner
            </p>
          </div>
          
          <div className="text-center py-6">
            <p className="text-[var(--text-secondary)] text-lg mb-4">
              Partnership opportunities available. Contact us for more information.
            </p>
            <button 
              className="btn-primary transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('event-contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Become a Partner
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="event-contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Mail size={40} className="text-white" />
              </div>
              <span>Contact Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
                For Partnership & Speaking Opportunities
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  >
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-1">Shadab Khan</h4>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-1">
                      <Mail size={18} />
                      <a href="mailto:director@alifviewmedia.com" className="hover:text-[var(--primary-color)] transition-colors">
                        director@alifviewmedia.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Phone size={18} />
                      <a href="tel:+919270096787" className="hover:text-[var(--primary-color)] transition-colors">
                        91 9270096787
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
                For Nominations
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] mb-1">Anam Shaikh</h4>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-1">
                      <Mail size={18} />
                      <a href="mailto:sales@alifviewmedia.com" className="hover:text-[var(--primary-color)] transition-colors">
                        sales@alifviewmedia.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <Phone size={18} />
                      <a href="tel:+919529518393" className="hover:text-[var(--primary-color)] transition-colors">
                        91 9529518393
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

