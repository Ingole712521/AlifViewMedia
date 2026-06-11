import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { HomeOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { ALIF_LOGO_DARK, BHARAT_ROUTES } from './bharatview/constants'
import { BHARAT_NAV_PAGES } from './bharatview/bharatPageConfig'

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
        'bharat-nav-link px-1.5 md:px-2 lg:px-2.5 py-1.5 text-[11px] md:text-xs lg:text-sm font-medium transition-colors whitespace-nowrap relative shrink-0',
        active
          ? 'text-[var(--bharat-secondary)] font-semibold after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:rounded-full after:bg-[var(--bharat-secondary)]'
          : 'text-[var(--bharat-primary)]/90 hover:text-[var(--bharat-primary)]'
      ].join(' ')
    }
    return [
      'bharat-nav-link px-2 lg:px-2.5 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0',
      active ? 'bharat-nav-link--active' : 'bharat-nav-link--default'
    ].join(' ')
  }

  const backButton = isPoster ? (
    <button
      type="button"
      onClick={() => navigate('/')}
      className="hidden lg:inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--bharat-primary)]/35 text-[var(--bharat-primary)] bg-white/25 hover:bg-[var(--bharat-primary)] hover:text-white hover:border-[var(--bharat-primary)] transition-all duration-200 shrink-0"
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
      onClick={() => navigate('/')}
      className="!font-semibold !shadow-sm shrink-0"
    >
      {/* <span className="hidden xl:inline">Back to Event</span> */}
    </Button>
  )

  const navRow = (
    <>
      <button
        type="button"
        onClick={() => navigate(BHARAT_ROUTES.home)}
        className="flex items-center shrink-0 rounded-lg p-1.5 hover:opacity-85 transition-opacity"
        aria-label="BharatView home"
      >
        <img
          src={ALIF_LOGO_DARK}
          alt="Alif View Media Logo"
          className={`w-auto object-contain ${isPoster ? 'h-9 sm:h-10' : 'h-8 sm:h-9'}`}
        />
      </button>

      <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0 overflow-x-auto bharat-nav-scroll px-1">
        {BHARAT_NAV_PAGES.map((item) => (
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

      <div className="hidden lg:flex items-center shrink-0">{backButton}</div>

      <Button
        type="text"
        className={`lg:!hidden !flex !items-center !justify-center !w-9 !h-9 shrink-0 ${
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
      className={`lg:hidden mt-2 rounded-xl px-3 pb-3 pt-2 flex flex-col gap-1 max-h-[70vh] overflow-y-auto ${
        isPoster
          ? 'bg-white/92 backdrop-blur-md border border-[var(--bharat-primary)]/10 shadow-lg'
          : 'border-t border-black/5'
      }`}
    >
      {BHARAT_NAV_PAGES.map((item) => (
        <button
          key={item.to}
          type="button"
          onClick={() => {
            navigate(item.to)
            setMobileOpen(false)
          }}
          className={`${linkClass(isActive(item.to))} w-full text-left text-sm`}
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
          navigate('/')
          setMobileOpen(false)
        }}
        className="!mt-2 !font-semibold"
      >
        Home
      </Button>
    </div>
  )

  if (isPoster) {
    return (
      <header className="bharat-nav bharat-nav--poster fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-8 xl:px-10 py-2">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex items-center justify-between gap-1.5 sm:gap-2 min-h-[2.75rem]">{navRow}</div>
          {mobileMenu}
        </div>
      </header>
    )
  }

  const shellClass = [
    'bharat-nav-shell max-w-[100rem] mx-auto rounded-2xl transition-all duration-300',
    scrolled ? 'bharat-nav-shell--solid' : 'bharat-nav-shell--light'
  ].join(' ')

  return (
    <header className="bharat-nav fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-10 xl:px-14 pt-3 sm:pt-4">
      <div className={shellClass}>
        <div className="flex items-center justify-between gap-2 px-2 sm:px-4 py-2 sm:py-2.5">
          {navRow}
        </div>
        {mobileMenu}
      </div>
    </header>
  )
}

export default BharatViewNav
