import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

const Events: React.FC = () => {
  const navigate = useNavigate()
  
  const events = [
    {
      id: 'realtyview-2026',
      title: 'REALTYVIEW LEADERSHIP SUMMIT & AWARDS 2026',
      location: 'NASHIK',
      subtitle: 'Driving Leadership & Excellence in Emerging Realty Markets',
      date: '18th April, 2026',
      type: 'Virtual Event',
      description: 'A premier platform dedicated to advancing the real estate ecosystem in India\'s Tier-2 and Tier-3 cities. The summit will bring together leading builders, developers, architects, planners, investors, and industry experts.',
      image: '/images/realityLogo.png'
    }
  ]

  const handleEventClick = (eventId: string) => {
    navigate(`/event/${eventId}`)
  }

  return (
    <section 
      className="section-padding w-full" 
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight">
            Our Events
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Join us for transformative industry events and award ceremonies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="card group cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden"
              onClick={() => handleEventClick(event.id)}
            >
              {/* Image */}
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#181935' }}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold bg-[var(--primary-color)]">
                    {event.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--primary-color)] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-lg font-semibold text-[var(--primary-color)] mb-2">
                    {event.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                    {event.subtitle}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                    <Calendar size={16} className="text-[var(--primary-color)]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                    <MapPin size={16} className="text-[var(--primary-color)]" />
                    <span>{event.type}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                  {event.description}
                </p>

                <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform group-hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))' }}
                >
                  View Details
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

