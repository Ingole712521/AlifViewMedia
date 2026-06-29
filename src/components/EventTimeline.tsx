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
      'GUEST OF HONOR\nAmol Joshi, Partner, Amol Joshi Landmarks'
  },
  {
    time: '11:35 AM – 12:00 PM',
    content:
      'KEYNOTE SESSION\nNaushad Panjwani, Chairman - Mandarus Partners | Co-Chairman - NAREDCO Marketing & Technology Committees\nSpecial Guest:\nVinay Gachhi, Vice President - Sales, SMC Integrated Facility Management Solutions Limited\nTOPIC: THE CIVILISATION BUILDERS'
  },
  {
    time: '12:00 PM – 01:00 PM',
    content:
      'PANEL SESSION 1 - Real Estate 360°: Industry Titans on Growth, Innovation & the Road Ahead\n\nModerator:\nDr. Nitin Athavle, AVP, Kohinoor Group & Planedge Consultants Pvt. Ltd.\n\nSpeakers:\nAmit Baid, Founder & Creative Director, A B See Brand Advisory\nChintan Vasani, Partner, Wisebiz Developers | Joint Treasurer, NAREDCO NextGen National\nDipika Badhe, Deputy Vice President, Cluster Head (Luxury Segment), Ruparel Realty\nGirish Chhalwani, Co-Founder - Lords of the Lands & CEO - THE EDGE\nAr. Mahesh Bangad, Founder, Studio7.Inc & Senior Associate, ADS\nYash Paleja, Founder, BlindSpot Podcast & India\'s Leading Real Estate Strategist'
  },
  {
    time: '01:00 PM – 02:00 PM',
    content: 'NETWORKING LUNCH'
  },
  {
    time: '02:00 PM – 03:00 PM',
    content:
      "PANEL SESSION 2 - Rebuilding Maharashtra: Redevelopment, Urban Renewal & the Future of Cities\n\nModerator:\nSagar Visawadia, Founder, Dream Properties & Asia's No.1 Real Estate Influencer\n\nSpeakers:\nAdeeth Kaaspatay, Director, Adeeth Landcrafts\nKaushall Prakash, Founder & MD, Plotrix Pvt Ltd & VDPL\nMehul Vithalani, Proprietor, Just Properties & President - REAAK Mumbai\nNilesh Vohra, MD & CEO, Kanchan Developers & Convener - CREDAI Youth Wing National\nRachit Bansal, Regional CEO - Pune, Xanadu Realty\nHiren Parmar, Partner, Parmar Realty"
  },
  {
    time: '03:00 PM – 03:10 PM',
    content: 'AWARDS REGISTRATION'
  },
  {
    time: '03:10 PM – 04:30 PM',
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
  specialGuest: PersonLine | null
  topic: string | null
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

function parseSpecialGuest(rest: string[]): { specialGuest: PersonLine | null; remaining: string[] } {
  const specialGuestIndex = rest.findIndex(
    (line) => line.toLowerCase() === 'special guest:' || line.toLowerCase().startsWith('special guest:')
  )
  if (specialGuestIndex === -1) {
    return { specialGuest: null, remaining: rest }
  }

  const specialGuestLine = rest[specialGuestIndex]
  const inlineMatch = specialGuestLine.match(/^special guest:\s*(.+)$/i)
  let specialGuest: PersonLine | null = null
  if (inlineMatch?.[1]) {
    specialGuest = parsePersonLine(inlineMatch[1])
  } else if (specialGuestIndex + 1 < rest.length) {
    specialGuest = parsePersonLine(rest[specialGuestIndex + 1])
  }

  const remaining = [
    ...rest.slice(0, specialGuestIndex),
    ...rest.slice(specialGuestIndex + (inlineMatch?.[1] ? 1 : 2))
  ]
  return { specialGuest, remaining }
}

function parseTopic(rest: string[]): { topic: string | null; remaining: string[] } {
  const topicIndex = rest.findIndex((line) => line.toLowerCase().startsWith('topic:'))
  if (topicIndex === -1) {
    return { topic: null, remaining: rest }
  }

  const topicLine = rest[topicIndex]
  const topic = topicLine.replace(/^topic:\s*/i, '').trim() || null
  const remaining = [...rest.slice(0, topicIndex), ...rest.slice(topicIndex + 1)]
  return { topic, remaining }
}

function parseAgendaContent(content: string): ParsedAgenda {
  const lines = content.split('\n').map((line) => line.trim()).filter(Boolean)
  const title = lines[0] ?? ''
  let rest = lines.slice(1)

  const speakersIndex = rest.findIndex((line) => line.toLowerCase() === 'speakers:')
  if (speakersIndex !== -1) {
    const beforeSpeakers = rest.slice(0, speakersIndex)
    let moderator: PersonLine | null = null
    const moderatorIndex = beforeSpeakers.findIndex(
      (line) => line.toLowerCase() === 'moderator:' || line.toLowerCase().startsWith('moderator:')
    )
    if (moderatorIndex !== -1) {
      const moderatorLine = beforeSpeakers[moderatorIndex]
      const inlineMatch = moderatorLine.match(/^moderator:\s*(.+)$/i)
      if (inlineMatch?.[1]) {
        moderator = parsePersonLine(inlineMatch[1])
      } else if (moderatorIndex + 1 < beforeSpeakers.length) {
        moderator = parsePersonLine(beforeSpeakers[moderatorIndex + 1])
      }
    }
    const speakers = rest.slice(speakersIndex + 1).map(parsePersonLine)
    return { title, moderator, person: null, specialGuest: null, topic: null, speakers }
  }

  const topicResult = parseTopic(rest)
  rest = topicResult.remaining
  const specialGuestResult = parseSpecialGuest(rest)
  rest = specialGuestResult.remaining

  if (rest.length > 0) {
    return {
      title,
      moderator: null,
      person: parsePersonLine(rest.join(' ')),
      specialGuest: specialGuestResult.specialGuest,
      topic: topicResult.topic,
      speakers: []
    }
  }

  return {
    title,
    moderator: null,
    person: null,
    specialGuest: specialGuestResult.specialGuest,
    topic: topicResult.topic,
    speakers: []
  }
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
    const { title, moderator, person, specialGuest, topic, speakers } = parseAgendaContent(item.content)

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

        {specialGuest && (
          <p className="summit-timeline-entry-desc summit-timeline-moderator">
            <span className="summit-timeline-role-label">Special Guest:</span>{' '}
            <PersonText person={specialGuest} />
          </p>
        )}

        {topic && (
          <p className="summit-timeline-entry-desc summit-timeline-moderator">
            <span className="summit-timeline-role-label">Topic:</span>{' '}
            <span className="summit-timeline-person-details">{topic}</span>
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
