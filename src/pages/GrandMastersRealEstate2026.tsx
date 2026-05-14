import React, { useEffect, useState } from 'react'
import { Calendar, Home, ReceiptIndianRupee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const GrandMastersRealEstate2026: React.FC = () => {
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
        className="fixed top-0 w-full z-50 h-16"
        style={{
          backgroundColor: 'transparent',
          borderBottom: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? '/images/Aliief_white.png' : '/images/company-logo.png'}
              alt="Alif View Media Logo"
              className="h-10 w-auto object-contain"
              style={{
                filter:
                  theme === 'dark'
                    ? 'drop-shadow(0 8px 14px rgba(0,0,0,0.55))'
                    : 'drop-shadow(0 8px 14px rgba(0,0,0,0.18))'
              }}
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
              style={{ backgroundColor: '#dc2626' }}
              onClick={() => navigate('/event')}
            >
              <Home size={16} className="mr-2" />
              Back to Event
            </button>
          </div>
        </div>
      </nav>

      <div className="relative overflow-hidden bg-black min-h-[100svh] flex items-center">
        <div className="absolute inset-0" style={{ backgroundColor: theme === 'dark' ? '#020617' : '#ffffff' }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/background_image.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg max-w-4xl px-2">
              Grand Masters of Real Estate 2026
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
              Recognition for distinguished leadership and lasting impact across the real estate sector.
            </p>
          </div>
        </div>
      </div>

      <div
        className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-7">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl border-2 bg-[var(--bg-primary)] min-h-[200px] flex items-center justify-center p-8"
                style={{
                  borderColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(220, 38, 38, 0.25)'
                }}
              >
                <p className="text-center text-[var(--text-secondary)] text-sm sm:text-base">
                  Event poster and nomination details will be published here.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-2xl p-6 sm:p-8 shadow-xl border-2"
                style={{
                  backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.65)' : 'rgba(248, 250, 252, 0.9)',
                  borderColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(220, 38, 38, 0.25)',
                  backdropFilter: 'none'
                }}
              >
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)]">Nomination details</h2>
                <div className="mt-4 h-1 w-24 rounded-full" style={{ backgroundColor: '#dc2626' }} />

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: '#dc2626' }}
                    >
                      <ReceiptIndianRupee size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">Nomination Fee</div>
                      <div className="text-sm sm:text-base text-[var(--text-secondary)]">To be announced</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: '#dc2626' }}
                    >
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">Nominations Deadline</div>
                      <div className="text-sm sm:text-base text-[var(--text-secondary)]">To be announced</div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
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

export default GrandMastersRealEstate2026
