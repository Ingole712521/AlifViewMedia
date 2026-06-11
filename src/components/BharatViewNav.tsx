import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { HomeOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { ALIF_LOGO_DARK, BHARAT_ROUTES } from './bharatview/constants'

export const BHARAT_NAV_ITEMS = [
  { label: 'Overview', to: BHARAT_ROUTES.home },
  { label: 'Event', to: BHARAT_ROUTES.event },
  { label: 'Advisory Board', to: BHARAT_ROUTES.advisoryBoard },
  { label: 'Partners', to: BHARAT_ROUTES.partners },
  { label: 'Jury Member', to: BHARAT_ROUTES.jury },
  { label: 'Registration', to: BHARAT_ROUTES.registration }
] as const

const BharatViewNav: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isPoster = pathname === BHARAT_ROUTES.home

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isPoster) {
      setScrolled(false)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isPoster, pathname])

  const isActive = (to: string) => pathname === to

  const linkClass = (active: boolean) => {
    if (isPoster) {
      return [
        'bharat-nav-link px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap relative',
        active
          ? 'text-[var(--bharat-secondary)] font-semibold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-[var(--bharat-secondary)]'
          : 'text-[var(--bharat-primary)]/90 hover:text-[var(--bharat-primary)]'
      ].join(' ')
    }
    return [
      'bharat-nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap',
      active ? 'bharat-nav-link--active' : 'bharat-nav-link--default'
    ].join(' ')
  }

  const backButton = isPoster ? (
    <button
      type="button"
      onClick={() => navigate('/event')}
      className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--bharat-primary)]/35 text-[var(--bharat-primary)] bg-white/25 hover:bg-[var(--bharat-primary)] hover:text-white hover:border-[var(--bharat-primary)] transition-all duration-200"
      aria-label="Back to Event"
    >
      <HomeOutlined />
    </button>
  ) : (
    <Button
      type="primary"
      danger
      size="large"
      icon={<HomeOutlined />}
      onClick={() => navigate('/event')}
      className="!font-semibold !shadow-sm"
    >
      <span className="hidden sm:inline"></span>
      <span className="sm:hidden">Back</span>
    </Button>
  )

  const navRow = (
    <>
      <button
        type="button"
        onClick={() => navigate(BHARAT_ROUTES.home)}
        className="flex items-center shrink-0 rounded-lg p-1 -ml-1 hover:opacity-85 transition-opacity"
        aria-label="Alif View Media home"
      >
        <img
          src={ALIF_LOGO_DARK}
          alt="Alif View Media Logo"
          className="h-8 sm:h-9 md:h-10 w-auto object-contain"
        />
      </button>

      <nav className="hidden md:flex items-center gap-1 sm:gap-2 lg:gap-3 flex-1 justify-center min-w-0">
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

      <div className="hidden md:flex items-center shrink-0">{backButton}</div>

      <Button
        type="text"
        className={`md:!hidden !flex !items-center !justify-center !w-10 !h-10 ${
          isPoster
            ? '!text-[var(--bharat-primary)] hover:!bg-[var(--bharat-primary)]/5'
            : '!text-slate-700 hover:!bg-slate-100'
        }`}
        icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        onClick={() => setMobileOpen((o) => !o)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      />
    </>
  )

  const mobileMenu = mobileOpen && (
    <div
      className={`md:hidden mt-2 rounded-xl px-3 pb-3 pt-2 flex flex-col gap-1 ${
        isPoster
          ? 'bg-white/92 backdrop-blur-md border border-[var(--bharat-primary)]/10 shadow-lg'
          : 'border-t border-black/5'
      }`}
    >
      {BHARAT_NAV_ITEMS.map((item) => (
        <button
          key={item.to}
          type="button"
          onClick={() => {
            navigate(item.to)
            setMobileOpen(false)
          }}
          className={`${linkClass(isActive(item.to))} w-full text-left`}
        >
          {item.label}
        </button>
      ))}
      <Button
        type={isPoster ? 'default' : 'primary'}
        danger={!isPoster}
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
  )

  if (isPoster) {
    return (
      <header className="bharat-nav bharat-nav--poster fixed top-0 left-0 right-0 z-50 bg-transparent px-6 sm:px-10 lg:px-14 xl:px-20 pt-5 sm:pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-2 sm:gap-3">{navRow}</div>
          {mobileMenu}
        </div>
      </header>
    )
  }

  const shellClass = [
    'bharat-nav-shell max-w-7xl mx-auto rounded-2xl transition-all duration-300',
    scrolled ? 'bharat-nav-shell--solid' : 'bharat-nav-shell--light'
  ].join(' ')

  return (
    <header className="bharat-nav fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 xl:px-16 pt-4 sm:pt-5">
      <div className={shellClass}>
        <div className="flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3">
          {navRow}
        </div>
        {mobileMenu}
      </div>
    </header>
  )
}

export default BharatViewNav
