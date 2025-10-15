import React, { useState, useRef, useEffect } from 'react'
import { CheckCircle, Send, MapPin, Phone, Mail, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  eventType: string[]
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [showError, setShowError] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    if (name === 'eventType') {
      const selectElement = e.target as HTMLSelectElement
      const selectedOptions = Array.from(selectElement.selectedOptions, option => option.value)
      setFormData({
        ...formData,
        [name]: selectedOptions
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleEventTypeChange = (value: string) => {
    if (formData.eventType.includes(value)) {
      setFormData({
        ...formData,
        eventType: formData.eventType.filter(item => item !== value)
      })
    } else {
      setFormData({
        ...formData,
        eventType: [...formData.eventType, value]
      })
    }
  }

  const getDisplayText = () => {
    if (formData.eventType.length === 0) {
      return 'Select event types'
    } else if (formData.eventType.length === 1) {
      return formData.eventType[0]
    } else {
      return `${formData.eventType.length} selected`
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)
    
    try {
      const eventTypesText = formData.eventType.length > 0
        ? formData.eventType.join(', ')
        : 'Not specified'

      const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nEvent Types: ${eventTypesText}\n\nMessage:\n${formData.message}`

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        event_type: eventTypesText,
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
        eventType: [],
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
            Let's discuss how we can bring your vision to life.
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
                  Event Type (Select multiple)
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] flex items-center justify-between"
                    style={{ 
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    <span className="text-left">{getDisplayText()}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {[
                       
                        { value: 'corporate', label: 'Corporate Event' },
                        { value: 'awards', label: 'Awards Ceremony' },
                        { value: 'other', label: 'Other' }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={formData.eventType.includes(option.value)}
                            onChange={() => handleEventTypeChange(option.value)}
                            className="w-4 h-4 rounded border-2 focus:ring-2 focus:ring-[var(--primary-color)]"
                            style={{
                              accentColor: 'var(--primary-color)'
                            }}
                          />
                          <span className="text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Click to open dropdown and select multiple event types
                </p>
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

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--primary-color)' }}>
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

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--secondary-color)' }}>
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Phone</h4>
                    <p className="text-[var(--text-secondary)]">+91 9270096787</p>
                    <p className="text-sm text-[var(--text-secondary)]">Mon-Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-color)' }}>
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Email</h4>
                    <p className="text-[var(--text-secondary)]">marketing.alifviewmedia@gmail.com</p>
               
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
