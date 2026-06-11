import React from 'react'
import { Award, Briefcase, Handshake, Mic, TrendingUp, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const highlights: { icon: LucideIcon; text: string }[] = [
  { icon: Mic, text: 'Inspiring keynote addresses by industry leaders' },
  { icon: Users, text: 'High-impact panel discussions across multiple sectors' },
  { icon: Handshake, text: 'Exclusive networking opportunities with decision-makers' },
  {
    icon: Award,
    text: 'Recognition of excellence through the BharatView Business Leadership Awards 2026'
  },
  { icon: TrendingUp, text: 'Insights into emerging business trends and market opportunities' },
  { icon: Briefcase, text: 'Platform for collaboration, partnerships, and business growth' }
]

const BharatViewHighlights: React.FC = () => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)]">
      <div className="bharat-container">
        <div className="text-center mb-16">
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-4">
            Key Highlights
          </h2>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.text} className="bharat-card p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--bharat-primary)]/10 text-[var(--bharat-primary)] flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <p className="text-[var(--bharat-text-main)] font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BharatViewHighlights
