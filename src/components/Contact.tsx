import React, { useState } from 'react'
import { CheckCircle, Send, MapPin,  Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  eventName: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventName: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)
    
    try {
      const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nEvent Name: ${formData.eventName || 'Not provided'}\n\nMessage:\n${formData.message}`

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        event_name: formData.eventName || 'Not provided',
        message: messageBody,
        to_email: EMAILJS_CONFIG.BUSINESS_EMAIL
      }
      
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        eventName: '',
        message: ''
      })
      setTimeout(() => setShowSuccess(false), 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    }
  }

  return (
    <section 
      className="section-padding" 
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-2">
            Ready to transform your next event into an extraordinary experience? 
            Let's discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
              Get in Touch
            </h3>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-green-800 font-semibold">
                    Thank you! We'll be in touch within 24 hours.
                  </span>
                </div>
              </div>
            )}

            {showError && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <span className="text-red-800 font-semibold">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your organization"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Write the name of the event
                </label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Enter event name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] resize-vertical"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  placeholder="Tell us about your event requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
                Contact Us
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[var(--text-primary)] mb-4">For Partnership & Speaking Opportunities</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--secondary-color)' }}>
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-[var(--text-primary)] mb-1">Anam Shaikh</h5>
                        <p className="text-[var(--text-secondary)]">sales@alifviewmedia.com</p>
                        <p className="text-[var(--text-secondary)]">+91 9270096787</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-color)' }}>
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Office Address</h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      15/4, Jalsa Apartment<br/>
                      Pakhal Road, Nashik 422011<br/>
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-[var(--primary-color)]" />
                  <span className="text-[var(--text-secondary)]">24/7 Event Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-[var(--primary-color)]" />
                  <span className="text-[var(--text-secondary)]">Expert Event Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-[var(--primary-color)]" />
                  <span className="text-[var(--text-secondary)]">Global Reach & Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-[var(--primary-color)]" />
                  <span className="text-[var(--text-secondary)]">Innovative Technology Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
