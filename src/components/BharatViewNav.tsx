import React, { useEffect, useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { BHARAT_LOGO, BHARAT_ROUTES } from './bharatview/constants'

export const BHARAT_NAV_ITEMS = [
  { label: 'Home', to: BHARAT_ROUTES.home },
  { label: 'Event', to: BHARAT_ROUTES.event },
  { label: 'Jury Member', to: BHARAT_ROUTES.jury },
  { label: 'Registration', to: BHARAT_ROUTES.registration }
] as const

const BharatViewNav: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHome = pathname === BHARAT_ROUTES.home

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (to: string) => pathname === to

  const desktopLinkClass = (active: boolean) =>
    [
      'text-sm font-medium transition-colors',
      isHome
        ? active
          ? 'text-[var(--bharat-secondary)]'
          : 'text-white/90 hover:text-white drop-shadow-sm'
        : active
          ? 'text-[var(--bharat-primary)]'
          : 'text-[var(--bharat-text-muted)] hover:text-[var(--bharat-primary)]'
    ].join(' ')

  const mobileLinkClass = (active: boolean) =>
    [
      'block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors duration-200',
      active
        ? 'text-[var(--bharat-primary)] bg-[var(--bharat-primary)]/5'
        : 'text-[var(--bharat-text-muted)] hover:text-[var(--bharat-primary)] hover:bg-gray-50'
    ].join(' ')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 sm:px-10 lg:px-14 xl:px-20 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <button
          type="button"
          onClick={() => navigate(BHARAT_ROUTES.home)}
          className="flex items-center shrink-0"
        >
          <img
            src={BHARAT_LOGO}
            alt="BharatView Logo"
            className={`h-9 sm:h-10 md:h-11 object-contain ${isHome ? 'drop-shadow-md' : ''}`}
          />
        </button>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {BHARAT_NAV_ITEMS.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={() => navigate(item.to)}
              className={desktopLinkClass(isActive(item.to))}
            >
              {item.label}
            </button>
          ))}

          <button
            type="button"
            className="h-9 w-9 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
            onClick={() => navigate('/event')}
            aria-label="Back to Event"
          >
            <Home size={16} />
          </button>
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className={isHome ? 'text-white drop-shadow-sm' : 'text-[var(--bharat-text-main)]'}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden mt-3 mx-0 rounded-xl bg-white/95 backdrop-blur-xl border border-gray-100 shadow-lg py-3 px-3 flex flex-col gap-1 max-w-7xl mx-auto">
          {BHARAT_NAV_ITEMS.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={() => {
                navigate(item.to)
                setMobileOpen(false)
              }}
              className={mobileLinkClass(isActive(item.to))}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="mt-2 w-full px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
            onClick={() => {
              navigate('/event')
              setMobileOpen(false)
            }}
          >
            <Home size={16} />
            Back to Event
          </button>
        </div>
      )}
    </header>
  )
}

export default BharatViewNav
