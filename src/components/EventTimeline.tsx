import React from 'react'
import { Calendar, CheckCircle2 } from 'lucide-react'

/** Agenda rows from: Agenda_RealtyView Leadership Summit & Awards 2026 (Maharashtra).xls */
interface AgendaItem {
  time: string
  content: string
}

const agendaItems: AgendaItem[] = [
  {
    time: '10:00 AM - 11:00 AM',
    content: 'REGISTRATION AND WELCOME TEA/COFFEE'
  },
  {
    time: '11:00 AM – 11:15 AM',
    content: 'WELCOME ADDRESS'
  },
  {
    time: '11:15 AM – 11:35 AM',
    content:
      'GUEST OF HONOR\nNilesh Laddad, Director, Kohinoor Group | Managing Director, Planedge Consultants Pvt. Ltd.'
  },
  {
    time: '11:35 AM – 12:00 PM',
    content:
      'KEYNOTE SESSION\nNaushad Panjwani, Chairman - Mandarus Partners | Co-Chairman - NAREDCO Marketing & Technology Committees'
  },
  {
    time: '12:00 PM – 12:45 PM',
    content: 'PANEL SESSION 1 - Real Estate 360°: Industry Titans on Growth, Innovation & the Road Ahead\n\nModerator:\nDr. Nitin Athavle, AVP, Kohinoor Group & Planedge Consultants Pvt. Ltd.\n\nSpeakers:\n Amit Baid, Founder & Creative Director, A B See Advisory\n Chintan Vasani, Partner, Wisebiz Developers | Joint Treasurer, NAREDCO NextGen National\n Dipika Badhe, Deputy VP - Luxury Cluster - Sales Head, Ruparel Realty\n Girish Chhalwani, Chief Executive Officer, THE EDGE\n Yash Paleja, Real Estate Strategist'
  },
  {
    time: '12:45 PM - 1:45 PM',
    content: 'NETWORKING LUNCH'
  },
  {
    time: '1:45 PM - 2:45 PM',
    content:
      "PANEL SESSION 2 - Rebuilding Maharashtra: Redevelopment, Urban Renewal & the Future of Cities\nModerator: Sagar Visawadia, Founder, Dream Properties & Asia's No.1 Real Estate Influencer\nSpeakers:\nMehul Vithalani, Proprietor, Just Properties\nKaushall Prakash, Managing Director & CEO - Veenaa Group | Founder - Plotrix Pvt. Ltd."
  },
  {
    time: '2:45 PM - 3:00 PM',
    content: 'AWARDS REGISTRATION'
  },
  {
    time: '3:00 PM - 4:30 PM',
    content: 'REALTYVIEW LEADERSHIP AWARDS 2026 (MAHARASHTRA)'
  }
]

interface PersonLine {
  name: string
  details: string
}

interface ParsedAgenda {
  title: string
  moderator: PersonLine | null
  person: PersonLine | null
  speakers: PersonLine[]
}

function parsePersonLine(text: string): PersonLine {
  const commaIndex = text.indexOf(',')
  if (commaIndex === -1) {
    return { name: text, details: '' }
  }
  return {
    name: text.slice(0, commaIndex).trim(),
    details: text.slice(commaIndex + 1).trim()
  }
}

function parseAgendaContent(content: string): ParsedAgenda {
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean)
  const title = lines[0] ?? ''
  const rest = lines.slice(1)

  const speakersIndex = rest.findIndex((line) => line.toLowerCase() === 'speakers:')
  if (speakersIndex !== -1) {
    const beforeSpeakers = rest.slice(0, speakersIndex)
    const moderatorLine = beforeSpeakers.find((line) => line.toLowerCase().startsWith('moderator:'))
    const moderator = moderatorLine
      ? parsePersonLine(moderatorLine.replace(/^moderator:\s*/i, ''))
      : null
    const speakers = rest.slice(speakersIndex + 1).map(parsePersonLine)
    return { title, moderator, person: null, speakers }
  }

  if (rest.length > 0) {
    return { title, moderator: null, person: parsePersonLine(rest.join(' ')), speakers: [] }
  }

  return { title, moderator: null, person: null, speakers: [] }
}

function timeAxisLabel(timeRange: string): string {
  return timeRange.split(/[–\-]/)[0]?.trim() ?? timeRange
}

function PersonText({ person }: { person: PersonLine }) {
  return (
    <>
      <span className="summit-timeline-person-name">{person.name}</span>
      {person.details && (
        <span className="summit-timeline-person-details">, {person.details}</span>
      )}
    </>
  )
}

interface EventTimelineProps {
  theme?: 'light' | 'dark'
}

const EventTimeline: React.FC<EventTimelineProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark'

  const renderAgendaCard = (item: AgendaItem, side: 'left' | 'right') => {
    const { title, moderator, person, speakers } = parseAgendaContent(item.content)

    return (
      <div
        className={`summit-timeline-card summit-timeline-card--${side}`}
        style={{
          backgroundColor: isDark ? 'rgba(30, 41, 59, 0.65)' : '#f5f5f5'
        }}
      >
        <span className="summit-timeline-entry-time">{item.time}</span>
        <h3 className="summit-timeline-entry-title text-[var(--text-primary)]">{title}</h3>

        {person && (
          <p className="summit-timeline-entry-desc">
            <PersonText person={person} />
          </p>
        )}

        {moderator && (
          <p className="summit-timeline-entry-desc summit-timeline-moderator">
            <span className="summit-timeline-role-label">Moderator:</span>{' '}
            <PersonText person={moderator} />
          </p>
        )}

        {speakers.length > 0 && (
          <div className="summit-timeline-speakers-block">
            <p className="summit-timeline-speakers-label text-[var(--text-primary)]">Speakers:</p>
            <ul className="summit-timeline-entry-bullets">
              {speakers.map((speaker) => (
                <li key={`${speaker.name}-${speaker.details}`}>
                  <PersonText person={speaker} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

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
            Agenda
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[var(--text-secondary)] max-w-3xl mx-auto px-2 leading-snug">
            REALTYVIEW LEADERSHIP SUMMIT &amp; AWARDS 2026 (MAHARASHTRA)
          </p>
          {/* <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] opacity-80">
            27th June, 2026 · Sayaji Hotel, Pune
          </p> */}
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

          {agendaItems.map((item, index) => {
            const isLeft = index % 2 === 0
            const axisLabel = timeAxisLabel(item.time)

            return (
              <div
                key={`${item.time}-${item.content}`}
                className={`summit-timeline-row ${isLeft ? 'summit-timeline-row--left' : 'summit-timeline-row--right'}`}
              >
                {isLeft ? (
                  <>
                    {renderAgendaCard(item, 'left')}
                    <div className="summit-timeline-node-wrap">
                      <div className="summit-timeline-node" aria-hidden>
                        <Calendar className="w-4 h-4 text-amber-400" strokeWidth={2} />
                      </div>
                    </div>
                    <span className="summit-timeline-time-label summit-timeline-time-label--right text-[var(--text-secondary)]">
                      {axisLabel}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="summit-timeline-time-label summit-timeline-time-label--left text-[var(--text-secondary)]">
                      {axisLabel}
                    </span>
                    <div className="summit-timeline-node-wrap">
                      <div className="summit-timeline-node" aria-hidden>
                        <Calendar className="w-4 h-4 text-amber-400" strokeWidth={2} />
                      </div>
                    </div>
                    {renderAgendaCard(item, 'right')}
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
