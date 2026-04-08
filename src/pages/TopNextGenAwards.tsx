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
        className="sticky top-0 w-full z-50 py-4 shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          borderBottom:
            theme === 'dark' ? '1px solid rgba(55, 65, 81, 0.3)' : '1px solid rgba(229, 231, 235, 0.3)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
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
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/images/background.jpg')" }} />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
          <div className="flex flex-col items-center text-center gap-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
            >
              <Award size={34} className="text-white" />
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm font-semibold mb-4">
                <span>Call for Nominations</span>
                <span className="opacity-50">•</span>
                <span>Maharashtra Edition</span>
              </div>

              <div className="flex justify-center">
                <img
                  src="/assets/next-genposter.jpeg"
                  alt="Top Next-Gen Real Estate Entrepreneurs Awards"
                  className="w-full max-w-4xl h-auto object-contain"
                  loading="eager"
                />
              </div>
              <p className="mt-4 text-white/85 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                Nominate today and be part of an exclusive recognition platform celebrating emerging leaders in real estate.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://forms.gle/4QD3ggrwkHuyPRpz6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 flex items-center justify-center gap-2 font-bold text-white rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl"
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

