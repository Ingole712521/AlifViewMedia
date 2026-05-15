import React, { useEffect, useState } from 'react'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Home,
  ListOrdered,
  Mail,
  Phone,
  ReceiptIndianRupee,
  User
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

const NOMINATION_EMAIL = 'almas@alifviewmedia.com'
const mailtoNominate = `mailto:${NOMINATION_EMAIL}?subject=Grandmasters%20of%20Real%20Estate%202026%20Nomination`

const categories = [
  'Excellence in Township Development',
  'Excellence in Luxury Real Estate',
  'Excellence in Commercial Real Estate',
  'Excellence in Residential Real Estate',
  'Excellence in Integrated Township Development',
  'Excellence in Affordable Housing',
  'Excellence in Sustainable Real Estate',
  'Excellence in Redevelopment Projects',
  'Excellence in Mixed-Use Development',
  'Excellence in Realty Expansion & Growth',
  'Excellence in Real Estate Marketing & Branding',
  'Excellence in Sales Leadership',
  'Excellence in Strategy Leadership',
  'Excellence in Media & Advertising',
  'Excellence in PR & Corporate Communication',
  'Excellence in Architecture',
  'Excellence in Interior Design',
  'Excellence in Hospitality',
  'Excellence in Property Consulting',
  'Excellence in Facility Management',
  'Excellence in Finance',
  'Excellence in Customer Relation Management',
  'Excellence in Talent Leadership',
  'Excellence in Legal Practice',
  'Excellence in Flexible Workspace Solutions',
  'Excellence in Digital Innovation',
  'Trailblazing Women in Real Estate',
  'Next-Gen Real Estate Leader',
  'Entrepreneur of the Year',
  'Dynamic Leader in Real Estate',
  'CEO of the Year'
]

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

      {/* Hero — same structure as Top Next-Gen (background + accents) */}
      <div className="relative overflow-hidden bg-black min-h-[100svh] flex items-center">
        <div className="absolute inset-0" style={{ backgroundColor: theme === 'dark' ? '#020617' : '#ffffff' }} />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/top-genPosterbackground.png')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />

        <div className="absolute top-10 left-6 sm:top-12 sm:left-10 floating-animation pointer-events-none">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full" />
        </div>
        <div
          className="absolute bottom-10 right-6 sm:bottom-12 sm:right-10 floating-animation pointer-events-none"
          style={{ animationDelay: '2s' }}
        >
          <div
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
            style={{ backgroundColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.18)' : 'rgba(245, 158, 11, 0.14)' }}
          />
        </div>

        {/* <div
          className="absolute z-[9999] left-4 bottom-4 sm:left-10 sm:bottom-9 lg:left-[120px] lg:bottom-[180px]"
        >
          <a
            href={mailtoNominate}
            className="group relative text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-center gap-2 font-bold text-white rounded-xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-2xl"
            style={{ backgroundColor: '#dc2626' }}
          >
            <span className="relative z-10">Nominate via Email</span>
            <ArrowRight size={20} className="relative z-10" />
          </a>
        </div> */}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-5">

          
          </div>
        </div>
      </div>

      {/* Awards story, categories, process — premium layout */}
      <section
        className="relative pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-28 px-5 sm:px-8 lg:px-10 xl:px-12 overflow-hidden"
        style={{
          background:
            theme === 'dark'
              ? 'linear-gradient(180deg, #020617 0%, var(--bg-primary) 18%, #0f172a 100%)'
              : 'linear-gradient(180deg, #f1f5f9 0%, #f8fafc 25%, #eef2ff 100%)'
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: theme === 'dark' ? 'rgba(220, 38, 38, 0.35)' : 'rgba(220, 38, 38, 0.2)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: theme === 'dark' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(99, 102, 241, 0.18)' }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.12] bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {/* Intro */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/5 mx-2 sm:mx-4 lg:mx-6">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  theme === 'dark'
                    ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 50%, rgba(127, 29, 29, 0.25) 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #fff7ed 45%, #fef2f2 100%)'
              }}
            />
            <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-gradient-to-b from-red-500 via-amber-500 to-red-600" />
            <div className="relative p-8 sm:p-10 md:p-12 pl-8 sm:pl-12">
             
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] leading-tight text-balance">
                Honouring the Titans of the Real&nbsp;Estate Industry
              </h2>
              <p className="mt-5 text-[var(--text-primary)] text-base sm:text-lg leading-relaxed opacity-95">
                The RealtyView Grandmasters of Real Estate Awards 2026 celebrates the pioneers, innovators, business leaders, and
                changemakers who are redefining the future of the real estate industry.
              </p>
              <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                Join us as we honour excellence across leadership, development, innovation, design, strategy, marketing, and
                transformative contributions to the real estate ecosystem.
              </p>
            </div>
          </div>

          {/* Process + deadline row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                How nominations work
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Upload everything to a single Google Drive folder, then email the share link to{' '}
                <a href={mailtoNominate} className="text-red-600 dark:text-amber-400 font-semibold underline break-all">
                  {NOMINATION_EMAIL}
                </a>
                . We&apos;ll guide you through the rest.
              </p>
              <div className="space-y-3">
                {[
                  "Nominee's profile",
                  'Leadership achievements',
                  'Industry contribution & impact',
                  'LinkedIn profile link',
                  'High-resolution picture of the nominee (JPEG/PNG)',
                  'Any other information you would like to add'
                ].map((step, i) => (
                  <div
                    key={step}
                    className="flex gap-4 p-4 sm:p-5 rounded-2xl border transition-shadow hover:shadow-lg"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.6)' : 'rgba(255, 255, 255, 0.92)',
                      borderColor: theme === 'dark' ? 'rgba(51, 65, 85, 0.6)' : 'rgba(226, 232, 240, 1)'
                    }}
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-lg"
                      style={{ background: 'linear-gradient(145deg, #ef4444, #b91c1c)' }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex items-center min-w-0 pt-0.5">
                      <p className="text-sm sm:text-base font-medium text-[var(--text-primary)] leading-snug">{step}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500 opacity-80 hidden sm:block mt-0.5" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex w-full min-h-0 self-stretch h-full">
              <div
                className="flex-1 w-full min-h-0 flex flex-col justify-center rounded-3xl px-5 py-6 sm:px-6 sm:py-8 text-center relative overflow-hidden border-2 shadow-2xl min-h-[240px]"
                style={{
                  borderColor: theme === 'dark' ? 'rgba(251, 191, 36, 0.35)' : 'rgba(220, 38, 38, 0.35)',
                  background:
                    theme === 'dark'
                      ? 'linear-gradient(160deg, rgba(127,29,29,0.5) 0%, rgba(15,23,42,0.95) 55%, rgba(15,23,42,1) 100%)'
                      : 'linear-gradient(160deg, #fff1f2 0%, #ffffff 40%, #fff7ed 100%)'
                }}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-red-500/20 blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4 w-full max-w-xs mx-auto">
                  <Calendar
                    className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 dark:text-amber-400 drop-shadow-sm shrink-0"
                    strokeWidth={1.5}
                  />
                  <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-red-700 dark:text-amber-200 uppercase">
                    Nominations close
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-none">
                    30 May 2026
                  </p>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed px-1">
                    Secure your place on the shortlist — incomplete dossiers may delay review.
                  </p>
                  <a
                    href={mailtoNominate}
                    className="mt-1 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white text-sm sm:text-base shadow-xl transition-transform hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(90deg, #dc2626, #991b1b)' }}
                  >
                    Email your Drive link
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Poster + nomination sidebar — same grid as Top Next-Gen; categories list + details */}
          <div className="pt-4 sm:pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-7">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl border-2 bg-[var(--bg-primary)]"
                  style={{
                    borderColor: theme === 'dark' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(220, 38, 38, 0.25)'
                  }}
                >
                  <div
                    className="px-5 sm:px-6 py-4 sm:py-5 border-b-2 flex flex-wrap items-center justify-between gap-3"
                    style={{
                      borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.5)' : 'rgba(226, 232, 240, 1)',
                      backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : 'rgba(254, 242, 242, 0.6)'
                    }}
                  >
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)]">Award categories</h2>
                      <p className="mt-0.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {categories.length} tracks — nominate for the category that best fits your nominee.
                      </p>
                    </div>
                   
                  </div>
                  <div className="p-5 sm:p-6 max-h-[min(70vh,720px)] overflow-y-auto overscroll-contain">
                    <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base text-[var(--text-primary)]">
                      {categories.map((c, idx) => (
                        <li
                          key={c}
                          className="flex gap-3 rounded-xl border px-3 py-2.5 sm:px-4 sm:py-3"
                          style={{
                            borderColor: theme === 'dark' ? 'rgba(51, 65, 85, 0.55)' : 'rgba(226, 232, 240, 1)',
                            backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.35)' : 'rgba(255, 255, 255, 0.85)'
                          }}
                        >
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold text-white mt-0.5"
                            style={{ background: 'linear-gradient(145deg, #ef4444, #b91c1c)' }}
                          >
                            {idx + 1}
                          </span>
                          <span className="leading-snug pt-0.5">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  className="rounded-2xl p-6 sm:p-8 shadow-xl border-2 sticky top-24"
                  style={{
                    backgroundColor: theme === 'dark' ? 'rgba(17, 24, 39, 0.65)' : 'rgba(248, 250, 252, 0.95)',
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
                        <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                          Rs. 15,000 + GST (per nomination)
                        </div>
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
                        <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                          Last date for nominations
                        </div>
                        <div className="text-sm sm:text-base text-[var(--text-secondary)]">30th May, 2026</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        style={{ backgroundColor: '#dc2626' }}
                      >
                        <Mail size={20} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">Submit materials</div>
                        <div className="text-sm sm:text-base text-[var(--text-secondary)] break-all">
                          Upload to Google Drive and email the link to{' '}
                          <a href={mailtoNominate} className="text-red-600 dark:text-amber-400 font-semibold underline">
                            {NOMINATION_EMAIL}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-3">
                    <a
                      href={mailtoNominate}
                      className="group relative w-full text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 flex items-center justify-center gap-2 font-bold text-white rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 shadow-2xl"
                      style={{ backgroundColor: '#dc2626' }}
                    >
                      <span className="relative z-10">Nominate via Email</span>
                      <ArrowRight
                        size={20}
                        className="relative z-10 transform group-hover:translate-x-2 transition-transform"
                      />
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

          {/* Contact */}
          <div
            className="rounded-3xl overflow-hidden border shadow-2xl"
            style={{
              borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.5)' : 'rgba(226, 232, 240, 1)',
              backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.75)' : '#ffffff'
            }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
            <div className="p-8 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex items-center gap-5 shrink-0">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl"
                  style={{ background: 'linear-gradient(145deg, #dc2626, #7f1d1d)' }}
                >
                  <User className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Nominations desk</p>
                  <p className="text-2xl font-extrabold text-[var(--text-primary)] mt-1">Almas Khan</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:+918329357983"
                  className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-2xl font-bold text-[var(--text-primary)] border-2 transition-all hover:shadow-lg"
                  style={{ borderColor: theme === 'dark' ? 'rgba(148, 163, 184, 0.35)' : 'rgba(203, 213, 225, 1)' }}
                >
                  <Phone className="w-5 h-5 text-red-600 dark:text-amber-400" />
                  +91 83293 57983
                </a>
                <a
                  href={mailtoNominate}
                  className="flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-2xl font-bold text-white shadow-xl transition-all hover:shadow-lg hover:brightness-110"
                  style={{ background: 'linear-gradient(90deg, #dc2626, #b91c1c)' }}
                >
                  <Mail className="w-5 h-5" />
                  {NOMINATION_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GrandMastersRealEstate2026
