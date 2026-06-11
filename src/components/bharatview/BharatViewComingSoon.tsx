import React from 'react'
import { Gavel, Handshake, MicVocal, Trophy, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const sections: { id: string; title: string; icon: LucideIcon }[] = [
  { id: 'advisory', title: 'Advisory Board', icon: Users },
  { id: 'jury', title: 'Jury', icon: Gavel },
  { id: 'speakers', title: 'Speakers', icon: MicVocal },
  { id: 'partners', title: 'Partners', icon: Handshake },
  { id: 'leadership', title: 'Leadership Awards', icon: Trophy }
]

const BharatViewComingSoon: React.FC = () => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)]">
      <div className="bharat-container">
        <div className="text-center mb-12">
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-4">
            Jury & Speakers
          </h2>
          <p className="text-[var(--bharat-text-muted)] max-w-2xl mx-auto">
            Advisory board, jury members, speakers, and partners will be announced soon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <div
                key={section.id}
                className="bharat-card p-8 text-center flex flex-col items-center justify-center min-h-[200px]"
              >
                <Icon className="text-[var(--bharat-primary)]/40 mb-4" size={40} />
                <h3 className="text-lg font-bold text-[var(--bharat-primary)] mb-2">
                  {section.title}
                </h3>
                <span className="text-sm font-medium text-[var(--bharat-secondary)] bg-[var(--bharat-secondary)]/10 px-3 py-1 rounded-full">
                  Coming Soon...
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BharatViewComingSoon
