import React from 'react'
import { Mic } from 'lucide-react'
import { BHARAT_SPEAKERS } from './bharatSpeakers'

const BharatViewSpeakers: React.FC = () => {
  const isSingleSpeaker = BHARAT_SPEAKERS.length === 1

  return (
    <section className="bharat-section bg-[var(--bharat-bg)] min-h-[60vh]">
      <div className="bharat-container">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-[var(--bharat-primary)]/10">
            <Mic size={28} className="text-[var(--bharat-primary)]" />
          </div>
          <h1 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-3">
            Speakers
          </h1>
          <p className="text-[var(--bharat-text-muted)] text-sm md:text-base max-w-2xl mx-auto">
            Inspiring voices and industry leaders taking the stage at BharatView Business Summit &
            Awards 2026
          </p>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full mt-6" />
        </div>

        <div
          className={
            isSingleSpeaker
              ? 'max-w-sm mx-auto'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto'
          }
        >
          {BHARAT_SPEAKERS.map((speaker) => (
            <article
              key={speaker.name}
              className="bharat-card group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--bharat-primary)]/20 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={speaker.image}
                  alt={`${speaker.name}, ${speaker.role}, ${speaker.company}`}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h2 className="bharat-heading text-xl font-bold text-[var(--bharat-primary)] mb-1">
                  {speaker.name}
                </h2>
                <p className="text-sm sm:text-base text-[var(--bharat-text-muted)] font-medium">
                  {speaker.role}
                </p>
                <p className="text-sm sm:text-base text-[var(--bharat-secondary)] font-semibold mt-2">
                  {speaker.company}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-[var(--bharat-text-muted)] mt-10">
          More speakers will be announced soon.
        </p>
      </div>
    </section>
  )
}

export default BharatViewSpeakers
