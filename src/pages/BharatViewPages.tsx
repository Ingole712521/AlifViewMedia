import React from 'react'
import BharatViewLayout from '../components/bharatview/BharatViewLayout'
import BharatViewHero from '../components/bharatview/BharatViewHero'
import BharatViewSoonPage from '../components/bharatview/BharatViewSoonPage'
import BharatViewOverview from '../components/bharatview/BharatViewOverview'
import BharatViewHighlights from '../components/bharatview/BharatViewHighlights'
import BharatViewWhoShouldAttend from '../components/bharatview/BharatViewWhoShouldAttend'
import BharatViewAwards from '../components/bharatview/BharatViewAwards'
import BharatViewContact from '../components/bharatview/BharatViewContact'
import { BHARAT_NAV_PAGES } from '../components/bharatview/bharatPageConfig'
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
      <BharatViewAwards />
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
  <SoonPageLayout {...BHARAT_NAV_PAGES[4]} />
)

export const BharatViewLeadershipAwardsPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[5]} />
)

export const BharatViewPartnersPage: React.FC = () => (
  <SoonPageLayout {...BHARAT_NAV_PAGES[6]} />
)

export const BharatViewContactPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewContact />
    </div>
  </BharatViewLayout>
)

export { BHARAT_ROUTES }
