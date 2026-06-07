import React from 'react'
import { Calendar, CheckCircle2 } from 'lucide-react'

interface TimelineEntry {
  time: string
  title: string
  description?: string
  bullets?: string[]
}

interface TimelinePhase {
  timeLabel: string
  heading: string
  entries: TimelineEntry[]
}

const timelinePhases: TimelinePhase[] = [
  {
    timeLabel: '10:00 AM',
    heading: 'Opening & Welcome',
    entries: [
      { time: '10:00 AM - 11:00 AM', title: 'REGISTRATION AND WELCOME TEA/COFFEE' },
      { time: '11:00 AM – 11:15 AM', title: 'WELCOME ADDRESS' }
    ]
  },
  {
    timeLabel: '11:15 AM',
    heading: 'Guest of Honour & Keynote',
    entries: [
      {
        time: '11:15 AM – 11:30 AM',
        title: 'GUEST OF HONOUR',
        description:
          'Nilesh Laddad, Director, Kohinoor Group | Managing Director, Planedge Consultants Pvt. Ltd.'
      },
      { time: '11:30 AM – 12:00 PM', title: 'KEYNOTE SESSION' }
    ]
  },
  {
    timeLabel: '12:00 PM',
    heading: 'Panel Session 1 & Lunch',
    entries: [
      {
        time: '12:00 PM – 12:45 PM',
        title:
          'PANEL SESSION 1 - Real Estate 360°: Industry Titans on Growth, Innovation & the Road Ahead',
        bullets: [
          'Dr. Nitin Athavle, AVP, Kohinoor Group & Planedge Consultants',
          'Dr. Adv. Harshul Savla, Managing Partner, M Realty (Suvidha Lifespaces), Best Selling Author, World Record Holder, TEDx Speaker',
          '... more to join'
        ]
      },
      { time: '12:45 PM - 1:45 PM', title: 'NETWORKING LUNCH' }
    ]
  },
  {
    timeLabel: '1:45 PM',
    heading: 'Panel Session 2 & Awards',
    entries: [
      {
        time: '1:45 PM - 2:45 PM',
        title:
          'PANEL SESSION 2 - Rebuilding Maharashtra: Redevelopment, Urban Renewal & the Future of Cities'
      },
      { time: '2:45 PM - 3:15 PM', title: 'AWARDS REGISTRATION' },
      {
        time: '3:15 PM - 4:30 PM',
        title: 'REALTYVIEW LEADERSHIP AWARDS 2026 (MAHARASHTRA)'
      }
    ]
  }
]

interface EventTimelineProps {
  theme?: 'light' | 'dark'
}

const EventTimeline: React.FC<EventTimelineProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark'

  const renderCard = (phase: TimelinePhase, side: 'left' | 'right') => (
    <div
      className={`summit-timeline-card summit-timeline-card--${side}`}
      style={{
        backgroundColor: isDark ? 'rgba(30, 41, 59, 0.65)' : '#f5f5f5'
      }}
    >
      <h3 className="summit-timeline-card-heading text-[var(--text-primary)]">{phase.heading}</h3>
      <ul className="summit-timeline-card-list">
        {phase.entries.map((entry) => (
          <li key={`${entry.time}-${entry.title}`} className="summit-timeline-card-item">
            <span className="summit-timeline-entry-time">{entry.time}</span>
            <span className="summit-timeline-entry-title text-[var(--text-primary)]">{entry.title}</span>
            {entry.description && (
              <p className="summit-timeline-entry-desc text-[var(--text-secondary)]">{entry.description}</p>
            )}
            {entry.bullets && entry.bullets.length > 0 && (
              <ul className="summit-timeline-entry-bullets text-[var(--text-secondary)]">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section
      id="event-timeline"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: isDark ? 'var(--bg-primary)' : '#ffffff',
        background: isDark
          ? undefined
          : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 40%, #ffffff 100%)'
      }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
            Event Timeline
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[var(--text-secondary)] max-w-3xl mx-auto px-2 leading-snug">
            REALTYVIEW LEADERSHIP SUMMIT &amp; AWARDS 2026 (MAHARASHTRA)
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            23 May 2026 · Sayaji Hotel, Pune
          </p>
          <div
            className="w-24 sm:w-32 h-1 mx-auto mt-5 rounded-full"
            style={{ background: 'linear-gradient(135deg, #dc2626, #f59e0b)' }}
          />
        </div>

        <div className="summit-timeline">
          <div className="summit-timeline-track" aria-hidden />

          <div className="summit-timeline-marker-row">
            <div className="summit-timeline-terminal" aria-hidden>
              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {timelinePhases.map((phase, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={phase.heading}
                className={`summit-timeline-row ${isLeft ? 'summit-timeline-row--left' : 'summit-timeline-row--right'}`}
              >
                {isLeft ? (
                  <>
                    {renderCard(phase, 'left')}
                    <div className="summit-timeline-node-wrap">
                      <div className="summit-timeline-node" aria-hidden>
                        <Calendar className="w-4 h-4 text-amber-400" strokeWidth={2} />
                      </div>
                    </div>
                    <span className="summit-timeline-time-label summit-timeline-time-label--right text-[var(--text-secondary)]">
                      {phase.timeLabel}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="summit-timeline-time-label summit-timeline-time-label--left text-[var(--text-secondary)]">
                      {phase.timeLabel}
                    </span>
                    <div className="summit-timeline-node-wrap">
                      <div className="summit-timeline-node" aria-hidden>
                        <Calendar className="w-4 h-4 text-amber-400" strokeWidth={2} />
                      </div>
                    </div>
                    {renderCard(phase, 'right')}
                  </>
                )}
              </div>
            )
          })}

          <div className="summit-timeline-marker-row">
            <div className="summit-timeline-terminal" aria-hidden>
              <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventTimeline
