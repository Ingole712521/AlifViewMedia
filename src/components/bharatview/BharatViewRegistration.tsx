import React from 'react'
import { Calendar, Mail, MapPin, Phone } from 'lucide-react'

const BharatViewRegistration: React.FC = () => {
  return (
    <section className="bharat-section bg-white">
      <div className="bharat-container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-4">
            Registration
          </h2>
          <p className="text-[var(--bharat-text-muted)] text-lg leading-relaxed">
            Secure your place at the BharatView Business Summit & Awards 2026. Registration details
            will be available shortly.
          </p>
        </div>

        <div className="bharat-card p-8 md:p-12 text-center mb-10">
          <span className="inline-block text-sm font-medium text-[var(--bharat-secondary)] bg-[var(--bharat-secondary)]/10 px-4 py-2 rounded-full mb-6">
            Coming Soon
          </span>
          <p className="text-[var(--bharat-text-muted)] leading-relaxed mb-8">
            Online registration will open soon. For early inquiries, please reach out using the
            contact details below.
          </p>
          <button type="button" disabled className="bharat-btn-primary opacity-60 cursor-not-allowed">
            Register Now
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bharat-card p-6 flex items-start gap-4">
            <Mail className="text-[var(--bharat-secondary)] flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-[var(--bharat-text-main)] mb-1">Email</h3>
              <p className="text-[var(--bharat-text-muted)] text-sm">
                info@bharatview.com
                <br />
                (Coming Soon)
              </p>
            </div>
          </div>
          <div className="bharat-card p-6 flex items-start gap-4">
            <Phone className="text-[var(--bharat-secondary)] flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-[var(--bharat-text-main)] mb-1">Phone</h3>
              <p className="text-[var(--bharat-text-muted)] text-sm">+91 XXX XXX XXXX</p>
            </div>
          </div>
          <div className="bharat-card p-6 flex items-start gap-4">
            <Calendar className="text-[var(--bharat-secondary)] flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-[var(--bharat-text-main)] mb-1">Event</h3>
              <p className="text-[var(--bharat-text-muted)] text-sm">BharatView Summit & Awards 2026</p>
            </div>
          </div>
          <div className="bharat-card p-6 flex items-start gap-4">
            <MapPin className="text-[var(--bharat-secondary)] flex-shrink-0 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-[var(--bharat-text-main)] mb-1">Venue</h3>
              <p className="text-[var(--bharat-text-muted)] text-sm">To be announced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewRegistration
