import React from 'react'
import {
  AudioOutlined,
  AuditOutlined,
  CrownOutlined,
  MailOutlined,
  ReadOutlined,
  TeamOutlined,
  TrophyOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import { BHARAT_ROUTES } from './constants'

const iconClass = 'bharat-ant-icon bharat-icon-float'

export interface BharatPageConfig {
  label: string
  to: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

export const BHARAT_NAV_PAGES: BharatPageConfig[] = [
  {
    label: 'Overview',
    to: BHARAT_ROUTES.overview,
    title: 'Overview',
    subtitle: 'Discover the vision and purpose behind BharatView Business Summit & Awards 2026.',
    description:
      'A comprehensive overview of the summit, its objectives, and what to expect will be available here soon.',
    icon: <ReadOutlined className={iconClass} />
  },
  {
    label: 'Advisory Board',
    to: BHARAT_ROUTES.advisoryBoard,
    title: 'Advisory Board',
    subtitle: 'Our distinguished advisory board members will be announced soon.',
    description:
      'We are curating an exceptional panel of industry leaders and experts to guide the BharatView Business Summit & Awards 2026.',
    icon: <TeamOutlined className={iconClass} />
  },
  {
    label: 'Jury Members',
    to: BHARAT_ROUTES.juryMembers,
    title: 'Jury Members',
    subtitle: 'Meet the esteemed jury panel evaluating excellence across industries.',
    description:
      'The jury members for BharatView Business Awards 2026 will be revealed shortly. Stay tuned for updates.',
    icon: <AuditOutlined className={iconClass} />
  },
  {
    label: 'Speakers',
    to: BHARAT_ROUTES.speakers,
    title: 'Speakers',
    subtitle: 'Inspiring voices and industry leaders taking the stage.',
    description:
      'Our lineup of keynote speakers and panelists will be announced soon. Check back for the full speaker roster.',
    icon: <AudioOutlined className={iconClass} />
  },
  {
    label: 'Awards',
    to: BHARAT_ROUTES.awards,
    title: 'Awards',
    subtitle: 'Celebrating excellence across diverse industry categories.',
    description:
      'Details on award categories, criteria, and nomination guidelines will be published here soon.',
    icon: <TrophyOutlined className={iconClass} />
  },
  {
    label: 'Leadership Awards',
    to: BHARAT_ROUTES.leadershipAwards,
    title: 'Leadership Awards',
    subtitle: 'Honouring visionary leaders driving change and innovation.',
    description:
      'Information about the BharatView Leadership Awards and distinguished honourees will be available shortly.',
    icon: <CrownOutlined className={iconClass} />
  },
  {
    label: 'Partners',
    to: BHARAT_ROUTES.partners,
    title: 'Partners',
    subtitle: 'Proudly supported by our media and magazine partners.',
    description:
      'BharatView Business Summit & Awards 2026 is proudly supported by Media Mohalla and The Business Fame.',
    icon: <UsergroupAddOutlined className={iconClass} />
  },
  {
    label: 'Contact Us',
    to: BHARAT_ROUTES.contact,
    title: 'Contact Us',
    subtitle: 'Get in touch with the BharatView team.',
    description:
      'Contact details and enquiry forms for registrations, partnerships, and nominations will be available here soon.',
    icon: <MailOutlined className={iconClass} />
  }
]
