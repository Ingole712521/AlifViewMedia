import React from 'react'
import { ArrowRight } from 'lucide-react'
import BharatViewLayout from '../components/bharatview/BharatViewLayout'
import BharatViewHero from '../components/bharatview/BharatViewHero'
import BharatViewSoonPage from '../components/bharatview/BharatViewSoonPage'
import BharatViewOverview from '../components/bharatview/BharatViewOverview'
import BharatViewHighlights from '../components/bharatview/BharatViewHighlights'
import BharatViewWhoShouldAttend from '../components/bharatview/BharatViewWhoShouldAttend'
import BharatViewAwards from '../components/bharatview/BharatViewAwards'
import BharatViewContact from '../components/bharatview/BharatViewContact'
import BharatViewPartners from '../components/bharatview/BharatViewPartners'
import { BHARAT_NAV_PAGES, BHARAT_LEADERS_UNDER_45_PAGE } from '../components/bharatview/bharatPageConfig'
import { BHARAT_ROUTES } from '../components/bharatview/constants'

const SoonPageLayout: React.FC<(typeof BHARAT_NAV_PAGES)[number]> = ({
  title,
  subtitle,
  description,
  icon
}) => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewSoonPage title={title} subtitle={subtitle} description={description} icon={icon} />
    </div>
  </BharatViewLayout>
)

export const BharatViewSummit2026: React.FC = () => (
  <BharatViewLayout showFooter={false}>
    <BharatViewHero />
  </BharatViewLayout>
)

export const BharatViewOverviewPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewOverview />
      <BharatViewHighlights />
      <BharatViewWhoShouldAttend />
    </div>
  </BharatViewLayout>
)

// export const BharatViewAdvisoryBoardPage: React.FC = () => (
//   <SoonPageLayout {...BHARAT_NAV_PAGES[1]} />
// )

// export const BharatViewJuryMembersPage: React.FC = () => (
//   <SoonPageLayout {...BHARAT_NAV_PAGES[2]} />
// )

export const BharatViewSpeakersPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[1]} />
)

export const BharatViewAwardsPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewAwards />
    </div>
  </BharatViewLayout>
)

export const BharatViewLeadershipAwardsPage: React.FC = () => {
  const page = BHARAT_NAV_PAGES[3]

  return (
    <BharatViewLayout>
      <div className="pt-20">
        <BharatViewSoonPage
          title={page.title}
          subtitle={page.subtitle}
          description={page.description}
          icon={page.icon}
        />
      </div>
    </BharatViewLayout>
  )
}

const LEADERS_UNDER_45_POSTER = '/images/leadersUnder45Poster.jpeg'

const NominationInterestCard: React.FC = () => (
  <div className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-5 sm:px-8 sm:py-6 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
    <div className="text-center sm:text-left">
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[var(--bharat-secondary)] mb-1.5">
        Nomination Fees
      </p>
      <p className="text-2xl sm:text-3xl font-bold text-[var(--bharat-primary)]">
        Rs. 20,000 + GST
      </p>
      <p className="text-sm text-[var(--bharat-text-muted)] mt-1">Per nomination</p>
    </div>

    <a
      href="https://forms.gle/qRsuXj3ZSxHSGaMa6"
      target="_blank"
      rel="noopener noreferrer"
      className="bharat-cta-animated relative z-10 isolate w-full sm:w-auto inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-6 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-900/40 active:scale-[0.98]"
      style={{
        background: 'linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #38bdf8 100%)',
        borderColor: 'rgba(147, 197, 253, 0.35)'
      }}
    >
      <span className="bharat-cta-shimmer absolute inset-0 rounded-xl opacity-80" />
      <span className="relative z-10">Submit your Interest</span>
      <ArrowRight size={18} className="bharat-cta-arrow relative z-10 shrink-0" />
    </a>
  </div>
)

export const BharatViewLeadersUnder45AwardsPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-[var(--bharat-bg)] min-h-screen">
      <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
        <img
          src={LEADERS_UNDER_45_POSTER}
          alt={`${BHARAT_LEADERS_UNDER_45_PAGE.title} — 10th October 2026, Mumbai`}
          className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/10"
        />
        <NominationInterestCard />
      </div>
    </div>
  </BharatViewLayout>
)

export const BharatViewPartnersPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewPartners />
    </div>
  </BharatViewLayout>
)

export const BharatViewContactPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewContact />
    </div>
  </BharatViewLayout>
)

export { BHARAT_ROUTES }
