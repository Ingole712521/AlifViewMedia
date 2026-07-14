import React from 'react'
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

export const BharatViewAdvisoryBoardPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[1]} />
)

export const BharatViewJuryMembersPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[2]} />
)

export const BharatViewSpeakersPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[3]} />
)

export const BharatViewAwardsPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewAwards />
    </div>
  </BharatViewLayout>
)

export const BharatViewLeadershipAwardsPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[5]} />
)

const LEADERS_UNDER_45_POSTER = '/images/leadersUnder45Poster.jpeg'

export const BharatViewLeadersUnder45AwardsPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-24 pb-16 px-4 sm:px-6 bg-[var(--bharat-bg)] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <img
          src={LEADERS_UNDER_45_POSTER}
          alt={`${BHARAT_LEADERS_UNDER_45_PAGE.title} — 10th October 2026, Mumbai`}
          className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/10"
        />
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
