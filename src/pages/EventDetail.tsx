import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, Award, Handshake, Mail, Phone, ArrowRight, CheckCircle2, Star, Home, X } from 'lucide-react'

const EventDetail: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.98)',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/company-logo.png"
              alt="Alif View Media Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeSection === section
                    ? 'text-white shadow-lg'
                    : 'text-[var(--text-primary)] hover:bg-gray-100'
                }`}
                style={activeSection === section ? {
                  background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
                } : {}}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => window.close()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-white"
            style={{ 
              background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))'
            }}
          >
            <Home size={18} />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8" style={{ 
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color), var(--accent-color))',
        backgroundSize: '200% 200%',
        animation: 'gradientShift 15s ease infinite'
      }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full text-white text-sm sm:text-base font-semibold mb-4 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
              REALTYVIEW LEADERSHIP SUMMIT & AWARDS 2026
            </span>
          </div>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            NASHIK
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/95 font-semibold mb-8 sm:mb-12">
            Driving Leadership & Excellence in Emerging Realty Markets
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar size={20} />
              <span className="text-base sm:text-lg font-medium">18th April, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={20} />
              <span className="text-base sm:text-lg font-medium">Virtual Event</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex flex-wrap items-center justify-center gap-2 mb-4">
            {['home', 'speakers', 'awards', 'partners', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-white text-[var(--primary-color)] shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div id="event-home" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8 text-center">
            About the Summit
          </h2>
          
          <div className="space-y-6 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button 
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('event-contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Register Now
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-2 transform hover:scale-105 transition-all duration-300"
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
      <div id="event-speakers" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Users size={40} className="text-white" />
              </div>
              <span>Speakers</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Industry leaders and experts sharing insights
            </p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">
              Speaker lineup will be announced soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div id="event-awards" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-3">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Award size={40} className="text-white" />
              </div>
              <span>Awards Categories</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Recognising excellence across the real estate sector
            </p>
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
          <div className="mt-16 max-w-4xl mx-auto">
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
      <div id="event-partners" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
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
          
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg mb-6">
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
      <div id="event-contact" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
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

