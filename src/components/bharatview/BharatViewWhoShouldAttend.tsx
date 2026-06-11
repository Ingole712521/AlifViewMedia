import React from 'react'
import { CircleCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BHARAT_ROUTES } from './constants'

const attendees = [
  'Business Leaders & Corporate Executives',
  'Entrepreneurs & Startup Ecosystem',
  'Investors & Financial Leaders',
  'Industry Professionals',
  'Government & Policy Makers',
  'Sector Representatives',
  'Sustainability Experts'
]

const BharatViewWhoShouldAttend: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="bharat-section bg-[var(--bharat-primary)] text-white">
      <div className="bharat-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="bharat-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Who Should Attend?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join the elite gathering of India&apos;s most forward-thinking professionals. This
              summit is curated for those who drive change, foster innovation, and shape the future
              of business.
            </p>
            <button
              type="button"
              onClick={() => navigate(BHARAT_ROUTES.contact)}
              className="bharat-btn-secondary hidden md:inline-flex"
            >
              Reserve Your Seat
            </button>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {attendees.map((item) => (
                <div
                  key={item}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex items-center gap-3"
                >
                  <CircleCheck className="text-[var(--bharat-secondary)] flex-shrink-0" size={20} />
                  <span className="font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <button
                type="button"
                onClick={() => navigate(BHARAT_ROUTES.contact)}
                className="bharat-btn-secondary w-full"
              >
                Reserve Your Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewWhoShouldAttend
