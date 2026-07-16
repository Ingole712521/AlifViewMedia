import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'
import { HomeOutlined, MenuOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { ALIF_LOGO_DARK, BHARAT_ROUTES } from './bharatview/constants'
import { BHARAT_NAV_PAGES } from './bharatview/bharatPageConfig'

const DROPDOWN_CLOSE_DELAY_MS = 2000

const BharatViewNav: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isPoster = pathname === BHARAT_ROUTES.home

  const clearDropdownCloseTimer = () => {
    if (dropdownCloseTimerRef.current) {
      clearTimeout(dropdownCloseTimerRef.current)
      dropdownCloseTimerRef.current = null
    }
  }

  const openNavDropdown = (to: string) => {
    clearDropdownCloseTimer()
    setOpenDropdown(to)
  }

  const scheduleNavDropdownClose = () => {
    clearDropdownCloseTimer()
    dropdownCloseTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
      dropdownCloseTimerRef.current = null
    }, DROPDOWN_CLOSE_DELAY_MS)
  }

  useEffect(() => {
    setMobileOpen(false)
    clearDropdownCloseTimer()
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    return () => clearDropdownCloseTimer()
  }, [])

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

  useEffect(() => {
    if (!openDropdown) return
    const close = () => {
      clearDropdownCloseTimer()
      setOpenDropdown(null)
    }
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [openDropdown])

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

      <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center min-w-0 overflow-visible bharat-nav-scroll px-1">
        {BHARAT_NAV_PAGES.map((item) =>
          item.children ? (
            <div
              key={item.to}
              className="relative shrink-0"
              onMouseEnter={() => openNavDropdown(item.to)}
              onMouseLeave={scheduleNavDropdownClose}
            >
              <div
                className={`${linkClass(
                  isActive(item.to) || item.children.some((child) => isActive(child.to))
                )} inline-flex items-center gap-1`}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    clearDropdownCloseTimer()
                    setOpenDropdown(null)
                    navigate(item.to)
                  }}
                  className="bg-transparent border-0 p-0 m-0 font-inherit text-inherit cursor-pointer"
                >
                  {item.label}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    clearDropdownCloseTimer()
                    setOpenDropdown((current) => (current === item.to ? null : item.to))
                  }}
                  className="bg-transparent border-0 p-0 m-0 inline-flex items-center text-inherit cursor-pointer"
                  aria-expanded={openDropdown === item.to}
                  aria-haspopup="true"
                  aria-label={`${item.label} menu`}
                >
                  <DownOutlined className="!text-[9px]" />
                </button>
              </div>

              {openDropdown === item.to && (
                <div
                  className="absolute left-0 top-full z-[60] mt-1 min-w-[16rem] rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.children.map((child) => (
                    <button
                      key={child.to}
                      type="button"
                      onClick={() => {
                        clearDropdownCloseTimer()
                        navigate(child.to)
                        setOpenDropdown(null)
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        isActive(child.to)
                          ? 'bg-[var(--bharat-primary)]/10 font-semibold text-[var(--bharat-primary)]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[var(--bharat-primary)]'
                      }`}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button
              key={item.to}
              type="button"
              onClick={() => navigate(item.to)}
              className={linkClass(isActive(item.to))}
            >
              {item.label}
            </button>
          )
        )}
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
        <React.Fragment key={item.to}>
          <button
            type="button"
            onClick={() => {
              navigate(item.to)
              setMobileOpen(false)
            }}
            className={`${linkClass(isActive(item.to))} w-full text-left text-sm`}
          >
            {item.label}
          </button>
          {item.children?.map((child) => (
            <button
              key={child.to}
              type="button"
              onClick={() => {
                navigate(child.to)
                setMobileOpen(false)
              }}
              className={`${linkClass(isActive(child.to))} w-full text-left text-sm !pl-6`}
            >
              Leaders Under 45 Awards 2026
            </button>
          ))}
        </React.Fragment>
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
