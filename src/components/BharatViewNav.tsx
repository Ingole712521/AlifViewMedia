import React, { useState } from 'react'
import { Home, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export const BHARAT_NAV_ITEMS = [
  { label: 'Home', to: '/bharatview-summit-2026' },
  { label: 'Event', to: '/bharatview-summit-2026/event' },
  { label: 'Jury Member', to: '/bharatview-summit-2026/jury' },
  { label: 'Registration', to: '/bharatview-summit-2026/registration' }
] as const

interface BharatViewNavProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const BharatViewNav: React.FC<BharatViewNavProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (to: string) => pathname === to

  const desktopLinkClass = (active: boolean) =>
    [
      'nav-link',
      active ? '!text-[var(--primary-color)]' : '!text-white hover:!text-white'
    ].join(' ')

  const mobileLinkClass = (active: boolean) =>
    [
      'block w-full text-left py-3 px-4 nav-link rounded-md transition-colors duration-200',
      active ? '!text-[var(--primary-color)]' : '!text-white hover:!text-white',
      theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/5'
    ].join(' ')

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300 py-6"
      style={{
        backgroundColor: 'transparent',
        backdropFilter: 'none',
        borderBottom: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/Aliief_white.png"
              alt="Alif View Media Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
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

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              className="h-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              onClick={() => navigate('/event')}
            >
              <Home size={16} className="mr-2" />
              Back to Event
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="text-white hover:text-white hover:opacity-70 transition-opacity duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden mt-4 py-4 border-t backdrop-blur-md rounded-lg"
            style={{
              borderColor: 'rgba(55, 65, 81, 0.5)',
              backgroundColor: 'rgba(17, 24, 39, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
          >
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
              className="mt-4 w-[calc(100%-2rem)] mx-4 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              onClick={() => {
                navigate('/event')
                setMobileOpen(false)
              }}
            >
              <Home size={16} className="mr-2" />
              Back to Event
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default BharatViewNav
