import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Award, Handshake, Mail, Phone, ArrowRight, CheckCircle2, Star, Home, Menu, X, Scale } from 'lucide-react'
import ThemeToggle from '../components/ThemeToggle'
import NominationProcess from '../components/NominationProcess'

const EventDetail: React.FC = () => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  /* Previous award categories
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
        "Iconic Landmark Project of the Year",
        "Redevelopment Project of the Year"
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
  */

  const awardCategories = [
    {
      title: "Developer Excellence",
      awards: [
        "Developer of the Year (Residential) – Metro / Tier 2 / Tier 3",
        "Developer of the Year (Commercial) – Metro / Tier 2 / Tier 3",
        "Developer of the Year (Retail) – Metro / Tier 2 / Tier 3",
        "Developer of the Year (Luxury)",
        "Developer of the Year (Signature Luxury)",
        "Developer of the Year (Hospitality)",
        "Developer of the Year (Villa)",
        "Emerging Developer of the Year",
        "Sustainable Developer of the Year",
        "Most Trusted Real Estate Brand of the Year",
        "Fastest Growing Real Estate Company",
        "Integrated Township Developer of the Year",
        "Excellence in Customer Service",
        "CSR Excellence Awards"
      ]
    },
    {
      title: "Project Excellence",
      awards: [
        "Best Residential Project of the Year (Luxury / Mid-segment / Affordable/Signature Luxury)",
        "Best Commercial Project of the Year (Office / IT Parks)",
        "Best Retail Project / Mall of the Year",
        "Best Villa Project of the Year",
        "Best Hospitality Project of the Year",
        "Best Mixed-Use Development Project of the Year",
        "Best Smart City Project of the Year",
        "Best Budget Housing Project of the Year",
        "Best Themed Project of the Year",
        "Best Selling Project of the Year",
        "Best Integrated Township Project of the Year",
        "Best Iconic Landmark Project of the Year",
        "Redevelopment Project of the Year",
        "Best Green/Sustainable Project of the Year",
        "Best Design & Architecture Project of the Year"
      ]
    },
    {
      title: "Individual Leadership Awards",
      awards: [
        "Real Estate Leader of the Year",
        "CEO of the Year",
        "CFO of the Year",
        "Women Leader in Real Estate",
        "Young Achiever in Real Estate",
        "Visionary Leader of the Year",
        "Emerging Entrepreneur of the Year"
      ]
    },
    {
      title: "Architecture, Design & Construction",
      awards: [
        "Architect of the Year",
        "Design & Architectural Firm of the Year (Residential/Commercial/Retail/Hospitality/Institutional/Villa)",
        "Emerging Architectural Firm of the Year",
        "Interior Design Company of the Year (Residential/Commercial/Retail/Villa)",
        "Interior Designer of the Year",
        "Construction Company of the Year",
        "Project Management Company of the Year",
        "Excellence in Engineering & Design",
        "Innovative Construction Technology",
        "Best Architectural Design"
      ]
    },
    {
      title: "Real Estate Consultant Awards",
      awards: [
        "Real Estate Consultant of the Year",
        "Housing Finance Company of the Year",
        "Real Estate Advisory Firm of the Year",
        "Commercial Advisory Firm of the Year",
        "Retail/Leasing Advisory Firm of the Year",
        "Investment Advisory Firm of the Year",
        "Corporate Real Estate Consultant of the Year",
        "Channel Partner of the Year",
        "Top Performing Channel Partner – Residential",
        "Top Performing Channel Partner – Commercial",
        "Emerging Channel Partner of the Year",
        "Luxury Property Consultant of the Year",
        "NRI Investment Consultant of the Year",
        "Land & Industrial Consultant of the Year",
        "PropTech-Enabled Consultant of the Year",
        "Young Consultant of the Year",
        "Woman Consultant Leader of the Year",
        "Top Sales Performer – Real Estate",
        "Rising Star in Real Estate Consulting"
      ]
    },
    {
      title: "Branding & Marketing Leadership Awards",
      awards: [
        "Best Real Estate Marketing Campaign of the Year",
        "Best Integrated Marketing Campaign of the Year",
        "Best Project Launch Campaign of the Year",
        "Best Print Campaign of the Year",
        "Best Social Media Campaign of the Year",
        "Best Use of Video Marketing in Real Estate",
        "Best High-Impact Brand Campaign of the Year",
        "Best Brand Transformation / Rebranding Award",
        "Best Creative Campaign (Real Estate)",
        "Best Brochure / Collateral Design",
        "Best Real Estate Website / Digital Experience",
        "Best Use of Technology in Marketing (AR/VR/AI)",
        "Excellence in Digital Marketing in Real Estate",
        "Performance Marketing Campaign of the Year",
        "Influencer Marketing Campaign of the Year",
        "Excellence in Visual Design & Communication",
        "PropTech Marketing Excellence Award",
        "CRM Excellence in Real Estate",
        "Customer Engagement Campaign of the Year",
        "Lead Generation Campaign of the Year",
        "Advertising Agency of the Year",
        "Digital Marketing Agency of the Year"
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

  const speakers = [
    {
      name: 'Dr. Nitin Athavle',
      role: 'Asst. Vice President – Purchase',
      company: 'Kohinoor Group',
      image: '/member/WhatsApp%20Image%202026-04-13%20at%201.07.37%20PM.jpeg'
    }
  ]

  const juryMembers = [
    {
      name: 'Hardeep Sachdeva',
      role: 'Sr. Partner',
      company: 'AZB & Partners',
      image: '/member/WhatsApp%20Image%202026-04-13%20at%201.05.31%20PM.jpeg'
    },
    {
      name: 'Ar. Vishwas Kulkarni',
      role: 'Founder and Partner',
      company: 'VK:a architecture',
      image: '/member/WhatsApp%20Image%202026-04-13%20at%201.06.14%20PM.jpeg'
    },
    {
      name: 'Shabbir Kanchwala',
      role: 'Principal',
      company: 'Global Network for Zero',
      image: '/member/shabbir.jpeg'
    }
  ]

  const navItems: Array<
    | { kind: 'scroll'; id: string; label: string }
    | { kind: 'route'; to: string; label: string }
  > = [
    { kind: 'scroll', id: 'home', label: 'Home' },
    { kind: 'scroll', id: 'jury', label: 'JURY' },
    { kind: 'scroll', id: 'speakers', label: 'Speakers' },
    { kind: 'scroll', id: 'awards', label: 'Awards' },
    { kind: 'scroll', id: 'partners', label: 'Partners' },
    { kind: 'route', to: '/top-next-gen-awards', label: 'Top Next-Gen Real Estate Entrepreneurs Awards' },
    { kind: 'scroll', id: 'contact', label: 'Contact' }
  ]

  // Navbar sits over the hero background at the top; when it's not scrolled yet,
  // swap the visible light/dark styling ("vice versa") as requested.
  const topNavTheme: 'light' | 'dark' = isScrolled ? theme : theme === 'dark' ? 'light' : 'dark'
  const navOnImage = !isScrolled

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Fixed Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-4 shadow-lg backdrop-blur-md" 
            : "py-6"
        }`}
        style={{
          backgroundColor: isScrolled
            ? theme === 'dark'
              ? "rgba(17, 24, 39, 0.95)"
              : "rgba(255, 255, 255, 0.95)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled 
            ? theme === 'dark'
              ? "1px solid rgba(55, 65, 81, 0.3)"
              : "1px solid rgba(229, 231, 235, 0.3)"
            : "none",
          boxShadow: isScrolled 
            ? theme === 'dark' 
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
              : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none"
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* Logo */}
            <div className='flex items-center space-x-3'>
              <img
                src={
                  navOnImage
                    ? "/images/Aliief_white.png"
                    : theme === "dark"
                      ? "/images/Aliief_white.png"
                      : "/images/company-logo.png"
                }
                alt='Alif View Media Logo'
                className='h-10 w-auto object-contain'
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-8'>
              {navItems.map((item) => (
                <button
                  key={item.kind === 'scroll' ? item.id : item.to}
                  onClick={() => {
                    if (item.kind === 'scroll') scrollToSection(item.id)
                    else navigate(item.to)
                  }}
                  className={`nav-link ${
                    navOnImage
                      ? '!text-white hover:!text-white'
                      : item.kind === 'scroll' && activeSection === item.id
                        ? 'text-[var(--primary-color)]'
                        : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

              <button
                className='h-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center'
                style={{
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                }}
                onClick={() => {
                  sessionStorage.setItem('fromEventPage', 'true')
                  navigate('/')
                }}
              >
                <Home size={16} className="mr-2" />
                Home
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center space-x-4'>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`hover:opacity-70 transition-opacity duration-200 ${
                  navOnImage ? 'text-white hover:text-white' : (topNavTheme === 'dark' ? 'text-white hover:text-white' : 'text-[#1f2937] hover:text-gray-800')
                }`}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              className='md:hidden mt-4 py-4 border-t backdrop-blur-md rounded-lg'
              style={{ 
                borderColor: theme === 'dark'
                  ? "rgba(55, 65, 81, 0.5)"
                  : "rgba(229, 231, 235, 0.5)",
                backgroundColor: theme === 'dark'
                  ? "rgba(17, 24, 39, 0.9)"
                  : "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)"
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.kind === 'scroll' ? item.id : item.to}
                  onClick={() => {
                    if (item.kind === 'scroll') scrollToSection(item.id)
                    else navigate(item.to)
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left py-3 px-4 nav-link rounded-md transition-colors duration-200 ${
                    navOnImage ? '!text-white hover:!text-white' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                className='mt-4 w-full mx-4 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center'
                style={{
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                }}
                onClick={() => {
                  sessionStorage.setItem('fromEventPage', 'true')
                  navigate('/')
                  setIsMobileMenuOpen(false);
                }}
              >
                <Home size={16} className="mr-2" />
                Home
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-black">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/background.jpg')" }}
          aria-hidden
        />

        <div className="max-w-7xl mx-auto relative z-10 pt-8 sm:pt-10 md:pt-12">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4">
            <div className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] flex items-center justify-center mx-auto">
              {/* <img
                src="/poster/transparentlogo.png"
                alt="RealtyView Leadership Summit & Awards 2026 Logo"
                className="relative z-10 w-full h-full object-contain p-2 sm:p-3 md:p-4 lg:p-5"
                style={{
                  filter:
                    'drop-shadow(0 18px 22px rgba(0,0,0,0.12)) drop-shadow(0 6px 10px rgba(0,0,0,0.10))',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              /> */}
            </div>

            {/* <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto text-white/95 drop-shadow-sm">
              Convene. Connect. Celebrate Excellence
            </p> */}

            {/* <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xl sm:max-w-none mx-auto">
              <div className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">
                <Calendar size={18} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">23 May 2026</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20">
                <MapPin size={18} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-sm sm:text-base md:text-lg font-semibold whitespace-nowrap">Venue : TBA</span>
              </div>
            </div> */}

            <div className="lg:hidden flex flex-wrap items-center justify-center gap-2 pt-2">
              {navItems.map((item) => (
                <button
                  key={item.kind === 'scroll' ? item.id : item.to}
                  onClick={() => {
                    if (item.kind === 'scroll') scrollToSection(item.id)
                    else navigate(item.to)
                  }}
                  className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-300 backdrop-blur-md border ${
                    item.kind === 'scroll' && activeSection === item.id
                      ? 'text-white shadow-lg border-white/40 bg-gradient-to-br from-amber-600/90 to-amber-800/90'
                      : 'bg-white/15 text-white hover:bg-white/25 border-white/25'
                  }`}
                >
                  <span className="text-center leading-tight block">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Home Section */}
      <div id="event-home" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#f8fafc',
        background: theme === 'light' 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)'
          : 'none'
      }}>
        {/* Professional Background Pattern - Light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <>
            <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
              background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
              transform: 'translate(30%, -30%)'
            }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5" style={{
              background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
              transform: 'translate(-30%, 30%)'
            }}></div>
          </>
        )}

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
              }}>
                <Star size={32} className="sm:w-10 sm:h-10 text-white" fill="currentColor" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 px-2">
              About the Event
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
            }}></div>
          </div>

          <div className="space-y-5 sm:space-y-6 md:space-y-7 text-[var(--text-secondary)] text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4 md:px-0 max-w-4xl mx-auto">
            <p className="text-justify">
              <span className="font-bold text-[var(--text-primary)]">RealtyView Leadership Summit & Excellence Awards 2026 – Maharashtra</span> is a distinguished platform celebrating excellence and driving strategic dialogue across one of India’s most dynamic real estate markets. Bringing together an elite gathering of leading developers, architects, urban planners, investors, policymakers, and industry visionaries from across Maharashtra, the summit fosters high-impact conversations around market evolution, investment opportunities, innovation, and sustainable urban development.
            </p>

            <p className="text-justify">
              Positioned at the intersection of thought leadership and industry recognition, the platform not only facilitates meaningful exchange of ideas but also honours outstanding achievements that are shaping the future of Maharashtra’s real estate landscape.
            </p>

            <p className="text-justify">
              The event will feature an engaging leadership conference focused on the evolving dynamics of emerging real estate markets, followed by the RealtyView Leadership Excellence Awards 2026, which will recognise and felicitate Individuals and Organisations for their excellence, leadership, and contribution to the real estate sector.
            </p>

            <p className="text-justify">
              Designed as a high-impact gathering, the RealtyView Leadership Summit & Awards aims to foster collaboration, knowledge exchange, and industry recognition—driving structured and sustainable realty growth in India's Realty Hub.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center items-center mt-10 sm:mt-12 md:mt-16 px-4 sm:px-0">
            <a
              href="https://forms.gle/vJ2XCvY9paVfM7qM7"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)  '
              }}
            >
              <span className="relative z-10">Delegate Registration</span>
              <ArrowRight size={20} className="sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            {/* <a
              href="https://forms.gle/AhqWy3fmkGDL6atd9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)  '
              }}
            >
              <span className="relative z-10">Award Registration</span>
              <ArrowRight size={20} className="sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a> */}
            <button
              className="group w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-[var(--text-primary)] rounded-lg sm:rounded-xl border-2 transform hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl"
              style={{
                borderColor: '#dc2626',
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

      {/* Jury Section */}
      <div id="event-jury" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff',
        background: theme === 'light'
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)'
          : 'none'
      }}>
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
            background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}></div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
              }}>
                <Scale size={32} className="sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
              Jury
            </h2>
            <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium px-2">
              Distinguished evaluators for the awards
            </p>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full" style={{
              background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
            }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
            {juryMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 hover:scale-[1.02] transition-all duration-300 max-w-xs mx-auto w-full"
                style={{ borderColor: 'var(--primary-color)' }}
              >
                <div className="h-56 sm:h-64 overflow-hidden bg-[var(--bg-primary)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--primary-color)] font-semibold mt-2">
                    {member.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div id="event-speakers" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff',
        background: theme === 'light' 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)'
          : 'none'
      }}>
        {/* Professional Background Pattern - Light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
            background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}></div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
            {speakers.map((speaker) => (
              <div
                key={speaker.name}
                className="group bg-[var(--bg-secondary)] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-2 hover:scale-[1.02] transition-all duration-300"
                style={{ borderColor: 'var(--primary-color)' }}
              >
                <div className="aspect-[4/5] sm:aspect-square overflow-hidden bg-[var(--bg-primary)]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium">
                    {speaker.role}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--primary-color)] font-semibold mt-2">
                    {speaker.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div id="event-awards" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#f1f5f9',
        background: theme === 'light' 
          ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%), radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.04) 0%, transparent 60%), radial-gradient(circle at 10% 10%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)'
          : 'none'
      }}>
        {/* Professional Background Pattern - Light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <>
            <div className="absolute top-0 left-0 w-96 h-96 opacity-5" style={{
              background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
              transform: 'translate(-30%, -30%)'
            }}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5" style={{
              background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
              transform: 'translate(30%, 30%)'
            }}></div>
          </>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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

            <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
              <a
                href="https://forms.gle/AhqWy3fmkGDL6atd9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
                style={{
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                }}
              >
                <span className="relative z-10">Award Registration</span>
                <ArrowRight size={20} className="sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
            {awardCategories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-[var(--bg-primary)] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
                style={{
                  borderColor: 'transparent',
                  background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, #dc2626, #f59e0b) border-box'
                }}
              >
                {/* Hover Effect Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)'
                }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                      style={{ 
                        background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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
          <NominationProcess theme={theme} />
        </div>
      </div>

      {/* Partners Section */}
      <div id="event-partners" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff',
        background: theme === 'light' 
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 70% 30%, rgba(220, 38, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)'
          : 'none'
      }}>
        {/* Professional Background Pattern - Light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5" style={{
            background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)'
          }}></div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6 gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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
                  background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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

          {/* <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 px-2 sm:px-0">
            <button
              className="group relative w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-14 py-3.5 sm:py-4 md:py-5 flex items-center justify-center gap-2 sm:gap-3 font-bold text-white rounded-lg sm:rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-3xl"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              onClick={() => navigate('/top-next-gen-awards')}
            >
              <span className="relative z-10">Top Next-Gen Real Estate Entrepreneurs Awards</span>
              <ArrowRight
                size={20}
                className="sm:w-6 sm:h-6 relative z-10 transform group-hover:translate-x-2 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div> */} 
        </div>
      </div>

      {/* Contact Section */}
      <div id="event-contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : '#f1f5f9',
        background: theme === 'light' 
          ? 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #f1f5f9 100%), radial-gradient(circle at 30% 70%, rgba(220, 38, 38, 0.04) 0%, transparent 60%), radial-gradient(circle at 90% 20%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)'
          : 'none'
      }}>
        {/* Professional Background Pattern - Light mode */}
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
        {theme === 'dark' && (
          <div className="absolute top-0 right-0 w-96 h-96 opacity-5" style={{
            background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}></div>
        )}

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
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
              borderColor: '#dc2626'
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-5 sm:mb-6 md:mb-8">
              For Speaking Opportunity ,  Partnerships & Booths 
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                    }}
                  >
                    <Award size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-[var(--text-primary)] mb-2 sm:mb-3">Almas Khan</h4>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] flex-wrap">
                      <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <a href="mailto:almas@alifviewmedia.com" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg whitespace-nowrap font-medium">
                       almas@alifviewmedia.com
                      </a>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] flex-wrap mt-2 sm:mt-3">
                      <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <span className="text-sm sm:text-base md:text-lg font-medium mr-1">Contact:</span>
                      <a href="tel:8329357983" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg font-medium">
                        8329357983
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-primary)] rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 group hover:scale-105 transition-all duration-300 shadow-lg sm:shadow-xl hover:shadow-2xl border-2" style={{
              borderColor: '#dc2626'
            }}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-5 sm:mb-6 md:mb-8">
                For Nominations
              </h3>

              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:rotate-12 transition-transform duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                    }}
                  >
                    <Mail size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl text-[var(--text-primary)] mb-1 sm:mb-2">Anam Shaikh</h4>
                    <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-2 sm:mb-3">Manager - Events</p>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] mb-2 sm:mb-3 flex-wrap">
                      <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <a href="mailto:sales@alifviewmedia.com" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg break-all font-medium">
                        sales@alifviewmedia.com
                      </a>
                    </div>
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[var(--text-secondary)] flex-wrap">
                      <Phone size={18} className="sm:w-5 sm:h-5 flex-shrink-0 text-[var(--primary-color)] mt-0.5 sm:mt-0" />
                      <span className="text-sm sm:text-base md:text-lg font-medium mr-1">Contact:</span>
                      <a href="tel:9270096787" className="hover:text-[var(--primary-color)] transition-colors text-sm sm:text-base md:text-lg font-medium">
                        9270096787
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

