import React, { useEffect, useState } from 'react'
import { ArrowRight, Award, Calendar,  Home, ReceiptIndianRupee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const TopNextGenAwards: React.FC = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    window.scrollTo(0, 0)
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <nav
        className="sticky top-0 w-full z-50 h-16 backdrop-blur-md"
        style={{
          backgroundColor: 'transparent',
          borderBottom: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? '/images/Aliief_white.png' : '/images/company-logo.png'}
              alt="Alif View Media Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="h-10 px-4 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              onClick={() => navigate('/event')}
            >
              <Home size={16} className="mr-2" />
              Back to Event
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden bg-black min-h-[calc(100svh-4rem)] flex items-center">
        {/* Base */}
        <div className="absolute inset-0" style={{ backgroundColor: theme === 'dark' ? '#020617' : '#ffffff' }} />

        {/* Animated brand gradient (uses theme CSS variables) */}
        <div className="absolute inset-0 gradient-bg" style={{ opacity: theme === 'dark' ? 0.18 : 0.12 }} />

        {/* Soft vignette + contrast control */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              theme === 'dark'
                ? [
                    'radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.08) 0%, transparent 46%)',
                    'radial-gradient(circle at 50% 115%, rgba(0, 0, 0, 0.9) 0%, transparent 62%)',
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 35%, rgba(0, 0, 0, 0.55) 100%)'
                  ].join(', ')
                : [
                    'radial-gradient(circle at 50% 44%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.55) 42%, transparent 72%)',
                    'linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.25) 35%, rgba(255, 255, 255, 0.70) 100%)'
                  ].join(', ')
          }}
        />

        {/* Elegant floating accents */}
        <div className="absolute top-10 left-6 sm:top-12 sm:left-10 floating-animation pointer-events-none">
          <div
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-2xl"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(220, 38, 38, 0.22)' : 'rgba(220, 38, 38, 0.16)' }}
          />
        </div>
        <div
          className="absolute bottom-10 right-6 sm:bottom-12 sm:right-10 floating-animation pointer-events-none"
          style={{ animationDelay: '2s' }}
        >
          <div
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.18)' : 'rgba(245, 158, 11, 0.14)' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
            >
              <Award size={26} className="text-white" />
            </div>

            <div className="max-w-4xl">
              <div
                className={[
                  'inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md text-xs sm:text-sm font-semibold mb-3',
                  theme === 'dark'
                    ? 'border-white/25 bg-white/10 text-white/90'
                    : 'border-black/10 bg-white/70 text-slate-900'
                ].join(' ')}
              >
                <span>Call for Nominations</span>
                <span className="opacity-50">•</span>
                <span>Maharashtra Edition</span>
              </div>

              <div className="flex justify-center">
                <img
                  src="/assets/next-genposter.jpeg"
                  alt="Top Next-Gen Real Estate Entrepreneurs Awards"
                  className="w-full max-w-4xl max-h-[28vh] sm:max-h-[34vh] md:max-h-[38vh] h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </div>
              <p
                className={[
                  'mt-2 text-sm sm:text-base md:text-lg max-w-3xl mx-auto',
                  theme === 'dark' ? 'text-white/85' : 'text-slate-700'
                ].join(' ')}
              >
                Nominate today and be part of an exclusive recognition platform celebrating emerging leaders in real estate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://forms.gle/4QD3ggrwkHuyPRpz6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto text-sm sm:text-base md:text-lg px-7 sm:px-9 py-3 sm:py-3.5 flex items-center justify-center gap-2 font-bold text-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
              >
                <span className="relative z-10">Submit your Nominations</span>
                <ArrowRight size={20} className="relative z-10 transform group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* <a
                href="/images/next_gen.png"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 flex items-center justify-center gap-2 font-bold text-white rounded-xl border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 shadow-xl"
              >
                <Download size={18} />
                <span>View Poster</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff',
          background:
            theme === 'light'
              ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 15% 25%, rgba(220, 38, 38, 0.03) 0%, transparent 55%), radial-gradient(circle at 85% 70%, rgba(245, 158, 11, 0.02) 0%, transparent 55%)'
              : 'none'
        }}
      >
        {theme === 'light' && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Poster */}
            <div className="lg:col-span-7">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-2 bg-[var(--bg-primary)]"
                style={{
                  borderColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(220, 38, 38, 0.25)'
                }}
              >
                <img
                  src="/images/next_gen.png"
                  alt="Top Next-Gen Real Estate Entrepreneurs Awards poster"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 sm:p-8 shadow-xl border-2"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.65)' : 'rgba(248, 250, 252, 0.9)',
                  borderColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(220, 38, 38, 0.25)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">
                  Nomination details
                </h2>
                <div
                  className="mt-4 h-1 w-24 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #dc2626, #f59e0b)' }}
                />

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                    >
                      <ReceiptIndianRupee size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">Nomination Fee</div>
                      <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                        Rs. 15000 + 18% GST
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                    >
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                        Nominations Deadline
                      </div>
                      <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                        April 30, 2026
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <a
                    href="https://forms.gle/4QD3ggrwkHuyPRpz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-full text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 font-bold text-white rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                  >
                    <span className="relative z-10">Submit your Nominations</span>
                    <ArrowRight size={20} className="relative z-10 transform group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <button
                    className="w-full text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 font-bold rounded-xl border-2 transition-all duration-300 hover:shadow-xl"
                    style={{
                      borderColor: '#dc2626',
                      color: 'var(--text-primary)',
                      backgroundColor: 'transparent'
                    }}
                    onClick={() => navigate('/event')}
                  >
                    Back to Event Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNextGenAwards

