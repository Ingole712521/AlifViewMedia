import React, { useState, useEffect } from 'react'
import { ExternalLink, Users, Lightbulb, Award, Globe } from 'lucide-react'

const About: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState<string>('')

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
      logoUrl
    })
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      className="section-padding" 
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
            About Us
          </h2>
          
          {/* Company Logo */}
        
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              AlifView Media is a premier conference organizer. We are dedicated to delivering 
              exceptional value through landmark summits that provide unique opportunities for 
              delegates to exchange knowledge and learn about the latest technological and 
              innovative advancements.
            </p>
            
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              A prestigious platform that honors the exceptional contributions and success of 
              individuals, teams, and organizations who have demonstrated excellence, innovation, 
              and impact in their respective domains.
            </p>

            <div className="pt-6">
              <button className="btn-primary">
                <span className="flex items-center space-x-2">
                  <span>Learn More About Our Services</span>
                  <ExternalLink size={18} />
                </span>
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Users size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Expert Team</h3>
              <p className="text-sm text-[var(--text-secondary)]">Professional Organizers</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-color)' }}>
                <Lightbulb size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Innovation</h3>
              <p className="text-sm text-[var(--text-secondary)]">Creative Solutions</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-color)' }}>
                <Award size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Excellence</h3>
              <p className="text-sm text-[var(--text-secondary)]">Quality Events</p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Globe size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">Global Reach</h3>
              <p className="text-sm text-[var(--text-secondary)]">Worldwide Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
