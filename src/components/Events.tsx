import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { warmImageCache } from '../utils/preloadImage'
import { BHARAT_POSTER } from './bharatview/constants'

const EVENT_HERO_WEBP = '/images/background.webp'
const EVENT_HERO_JPG = '/images/background.jpg'

const preloadEventHero = () => warmImageCache(EVENT_HERO_WEBP, EVENT_HERO_JPG)
const preloadBharatHero = () => warmImageCache(BHARAT_POSTER)

type EventItem = {
  id: string
  title: string
  location: string
  subtitle: string
  date: string
  venue: string
  image: string
  imageBg?: string
  imageLayout?: 'default' | 'bharat'
  statusTag: 'Past Event' | 'Upcoming Event'
  status: 'past' | 'upcoming'
  to: string
  onHoverPreload?: () => void
}

const Events: React.FC = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<'past' | 'upcoming'>('upcoming')

  useEffect(() => {
    preloadEventHero()
    preloadBharatHero()
  }, [])

  const events: EventItem[] = [
    {
      id: 'realtyview-2026',
      title: 'REALTYVIEW LEADERSHIP SUMMIT & AWARDS 2026',
      location: 'Maharashtra',
      subtitle: 'Convene. Connect. Celebrate Excellence',
      date: '27th June 2026',
      venue: 'Sayaji Hotel, Pune',
      image: '/poster/EventLogo.png',
      imageBg: '#050505',
      statusTag: 'Past Event',
      status: 'past',
      to: '/event/realtyview-2026',
      onHoverPreload: preloadEventHero
    },
    {
      id: 'bharatview-2026',
      title: 'BharatView Business Summit & Awards 2026',
      location: 'Mumbai',
      subtitle: 'Recognizing Excellence. Inspiring Leadership',
      date: '3rd October, 2026',
      venue: 'Mumbai (TBA)',
      image: BHARAT_POSTER,
      imageLayout: 'bharat',
      statusTag: 'Upcoming Event',
      status: 'upcoming',
      to: '/bharatview-summit-2026',
      onHoverPreload: preloadBharatHero
    }
  ]

  const handleEventClick = (event: EventItem) => {
    document.body.style.overflow = ''
    document.body.style.backgroundColor = ''
    document.documentElement.style.overflow = ''
    document.documentElement.style.backgroundColor = ''
    event.onHoverPreload?.()
    navigate(event.to)
  }

  const filteredEvents = events.filter((event) => event.status === activeFilter)

  const filterOptions = [
    { key: 'upcoming' as const, label: 'Upcoming Events' },
    { key: 'past' as const, label: 'Past Events' },
  ]

  return (
    <section
      className="section-padding w-full"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6 leading-tight">
            Events
          </h2> 
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Join us for transformative industry events and award ceremonies
          </p>

          <div className="mt-8 inline-flex rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-1 shadow-sm">
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.key
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setActiveFilter(option.key)}
                  className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-7 sm:text-base ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            option.key === 'upcoming'
                              ? 'linear-gradient(135deg, #059669, #10b981)'
                              : 'linear-gradient(135deg, #475569, #334155)',
                        }
                      : undefined
                  }
                >
                  {option.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl gap-8 lg:gap-10">
          {filteredEvents.map((event) => (
            <article
              key={event.id}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-[transform,box-shadow] duration-500 ease-out"
              style={{
                border: '2px solid transparent',
                background:
                  'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, var(--primary-color), var(--accent-color)) border-box'
              }}
              onClick={() => handleEventClick(event)}
              onMouseEnter={event.onHoverPreload}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-[opacity,width,height] duration-700 ease-out group-hover:h-64 group-hover:w-64 group-hover:opacity-20"
                style={{ backgroundColor: 'var(--primary-color)' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

              <span
                className={`absolute right-4 top-4 z-20 inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg ${
                  event.statusTag === 'Past Event'
                    ? 'bg-slate-700 text-white ring-1 ring-white/20'
                    : 'bg-emerald-600 text-white ring-1 ring-emerald-400/50'
                }`}
              >
                {event.statusTag}
              </span>

              <div className="relative z-10 flex flex-1 flex-col">
                {event.imageLayout === 'bharat' ? (
                  <div className="relative mb-6 h-64 overflow-hidden rounded-xl ring-1 ring-black/10">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="relative mb-6 h-64 overflow-hidden rounded-xl ring-1 ring-white/10"
                    style={{ backgroundColor: event.imageBg ?? '#050505' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <img
                      src={event.image}
                      alt={event.title}
                      className="relative z-0 h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center">
                      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
                        {event.venue}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="inline-block h-1 w-10 rounded-full transition-[width] duration-500 ease-out group-hover:w-16"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-color)]">
                    {event.location}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold leading-snug text-[var(--text-primary)] transition-colors duration-300 ease-out group-hover:text-[var(--primary-color)] sm:text-2xl">
                  {event.title}
                </h3>
                <p className="mb-5 text-sm italic text-[var(--text-secondary)] line-clamp-2">
                  {event.subtitle}
                </p>

                <div className="mb-6 space-y-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]/50 px-4 py-3">
                  <div className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <Calendar size={16} className="shrink-0 text-[var(--primary-color)]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)]">
                    <MapPin size={16} className="shrink-0 text-[var(--primary-color)]" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div
                  className="relative mt-auto flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 font-semibold text-white shadow-md"
                  style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Details
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

