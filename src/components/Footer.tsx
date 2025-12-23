import React, { useState, useEffect } from 'react'
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/Aliief_white.png"
                alt="Alif View Media Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming ordinary moments into extraordinary experiences through
              innovative and creative media solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                About Us
              </button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-300">
                Services
              </button>
              <button className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </button>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-400">marketing.alifviewmedia@gmail.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61562956484753" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://x.com/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/alifview-media-552358320/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/alifviewmedia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Alif View Media. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          style={{
            background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={24} 
            className="text-white transform group-hover:-translate-y-1 transition-transform duration-300" 
          />
          <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'var(--primary-color)' }}></div>
        </button>
      )}
    </footer>
  )
}

export default Footer
