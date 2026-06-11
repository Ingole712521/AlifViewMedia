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

const carouselItems = [...sections, ...sections]

interface ComingSoonCardProps {
  section: (typeof sections)[number]
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({ section }) => {
  const Icon = section.icon

  return (
    <article className="bharat-card bharat-coming-soon-card p-8 text-center flex flex-col items-center justify-center min-h-[200px] w-[200px] sm:w-[220px] md:w-[240px] flex-shrink-0">
      <Icon className="text-[var(--bharat-primary)]/40 mb-4" size={40} />
      <h3 className="text-lg font-bold text-[var(--bharat-primary)] mb-2">{section.title}</h3>
      <span className="text-sm font-medium text-[var(--bharat-secondary)] bg-[var(--bharat-secondary)]/10 px-3 py-1 rounded-full">
        Coming Soon...
      </span>
    </article>
  )
}

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

        <div className="bharat-infinite-carousel relative overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[var(--bharat-bg)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[var(--bharat-bg)] to-transparent z-10" />

          <div className="bharat-infinite-carousel-track flex w-max gap-6">
            {carouselItems.map((section, index) => (
              <ComingSoonCard key={`${section.id}-${index}`} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewComingSoon
