import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { HomeOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
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
  const [scrolled, setScrolled] = useState(false)

  const isHome = pathname === BHARAT_ROUTES.home

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isHome) {
      setScrolled(false)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, pathname])

  const isActive = (to: string) => pathname === to

  const shellClass = [
    'bharat-nav-shell max-w-7xl mx-auto rounded-2xl transition-all duration-300',
    isHome
      ? 'bharat-nav-shell--home'
      : scrolled
        ? 'bharat-nav-shell--solid'
        : 'bharat-nav-shell--light'
  ].join(' ')

  const linkClass = (active: boolean) =>
    [
      'bharat-nav-link px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200',
      isHome
        ? active
          ? 'bharat-nav-link--home-active'
          : 'bharat-nav-link--home'
        : active
          ? 'bharat-nav-link--active'
          : 'bharat-nav-link--default'
    ].join(' ')

  return (
    <header className="bharat-nav fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-5">
      <div className={shellClass}>
        <div className="flex items-center justify-between gap-3 px-3 sm:px-5 py-2.5 sm:py-3">
          <button
            type="button"
            onClick={() => navigate(BHARAT_ROUTES.home)}
            className="flex items-center shrink-0 rounded-lg p-1 -ml-1 hover:opacity-90 transition-opacity"
          >
            <img
              src={BHARAT_LOGO}
              alt="BharatView Logo"
              className="h-8 sm:h-9 md:h-10 object-contain"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-1 justify-center">
            {BHARAT_NAV_ITEMS.map((item) => (
              <button
                key={item.to}
                type="button"
                onClick={() => navigate(item.to)}
                className={linkClass(isActive(item.to))}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Button
              type="primary"
              danger
              size="large"
              icon={<HomeOutlined />}
              onClick={() => navigate('/event')}
              className="!font-semibold !shadow-sm"
            >
              
            </Button>
          </div>

          <Button
            type="text"
            className={`lg:!hidden !flex !items-center !justify-center !w-10 !h-10 ${
              isHome ? '!text-white hover:!bg-white/10' : '!text-slate-700 hover:!bg-slate-100'
            }`}
            icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          />
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-black/5 px-3 pb-3 pt-2 flex flex-col gap-1">
            {BHARAT_NAV_ITEMS.map((item) => (
              <button
                key={item.to}
                type="button"
                onClick={() => {
                  navigate(item.to)
                  setMobileOpen(false)
                }}
                className={linkClass(isActive(item.to)) + ' w-full text-left'}
              >
                {item.label}
              </button>
            ))}
            <Button
              type="primary"
              danger
              block
              icon={<HomeOutlined />}
              onClick={() => {
                navigate('/event')
                setMobileOpen(false)
              }}
              className="!mt-2 !font-semibold"
            >
              Back to Event
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

export default BharatViewNav
