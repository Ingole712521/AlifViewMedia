import React from 'react'
import { Handshake } from 'lucide-react'
import { BHARAT_PARTNERS } from './bharatPartnersData'

const BharatViewPartners: React.FC = () => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)] min-h-[60vh]">
      <div className="bharat-container max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-[var(--bharat-primary)]/10">
            <Handshake size={28} className="text-[var(--bharat-primary)]" />
          </div>
          <h2 className="bharat-heading text-2xl md:text-3xl font-bold text-[var(--bharat-primary)] mb-3">
            Partners
          </h2>
          <p className="text-[var(--bharat-text-muted)] text-sm md:text-base">
            Proudly supported by our media and magazine partners
          </p>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BHARAT_PARTNERS.map((partner) => (
            <div key={partner.name} className="space-y-4">
              <h3 className="text-center text-base sm:text-lg font-bold text-[var(--bharat-primary)]">
                {partner.role}
              </h3>
              <div className="bharat-awards-subcard rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md flex flex-col items-center justify-center p-8 min-h-[160px] transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 sm:h-16 md:h-20 w-auto max-w-full object-contain"
                  loading="lazy"
                />
                <p className="mt-4 text-sm font-medium text-[var(--bharat-text-muted)]">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BharatViewPartners
