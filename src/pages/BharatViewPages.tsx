import React from 'react'
import BharatViewLayout from '../components/bharatview/BharatViewLayout'
import BharatViewHero from '../components/bharatview/BharatViewHero'
import BharatViewOverview from '../components/bharatview/BharatViewOverview'
import BharatViewHighlights from '../components/bharatview/BharatViewHighlights'
import BharatViewWhoShouldAttend from '../components/bharatview/BharatViewWhoShouldAttend'
import BharatViewAwards from '../components/bharatview/BharatViewAwards'
import BharatViewComingSoon from '../components/bharatview/BharatViewComingSoon'
import BharatViewRegistration from '../components/bharatview/BharatViewRegistration'

export const BharatViewSummit2026: React.FC = () => (
  <BharatViewLayout showFooter={false}>
    <BharatViewHero />
  </BharatViewLayout>
)

export const BharatViewEvent: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewOverview />
      <BharatViewHighlights />
      <BharatViewWhoShouldAttend />
      <BharatViewAwards />
    </div>
  </BharatViewLayout>
)

export const BharatViewJury: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewComingSoon />
    </div>
  </BharatViewLayout>
)

export const BharatViewRegistrationPage: React.FC = () => (
  <BharatViewLayout>
    <div className="pt-20">
      <BharatViewRegistration />
    </div>
  </BharatViewLayout>
)
