import React from 'react'
import { Card, Tag, Typography } from 'antd'
import {
  AudioOutlined,
  AuditOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
  TrophyOutlined
} from '@ant-design/icons'
import type { ReactNode } from 'react'

const { Title, Text } = Typography

const sections: { id: string; title: string; icon: ReactNode }[] = [
  { id: 'advisory', title: 'Advisory Board', icon: <TeamOutlined className="bharat-ant-icon bharat-icon-float" /> },
  { id: 'jury', title: 'Jury', icon: <AuditOutlined className="bharat-ant-icon bharat-icon-float" /> },
  { id: 'speakers', title: 'Speakers', icon: <AudioOutlined className="bharat-ant-icon bharat-icon-float" /> },
  { id: 'partners', title: 'Partners', icon: <UsergroupAddOutlined className="bharat-ant-icon bharat-icon-float" /> },
  { id: 'leadership', title: 'Leadership Awards', icon: <TrophyOutlined className="bharat-ant-icon bharat-icon-float" /> }
]

const carouselItems = [...sections, ...sections]

interface ComingSoonCardProps {
  section: (typeof sections)[number]
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({ section }) => (
  <Card
    hoverable
    className="bharat-ant-card bharat-coming-soon-card w-[200px] sm:w-[220px] md:w-[240px] flex-shrink-0 text-center"
    styles={{
      body: {
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem'
      }
    }}
  >
    <div className="bharat-ant-icon-wrap text-[var(--bharat-primary)]/40 text-4xl mb-4">
      {section.icon}
    </div>
    <Title level={5} className="bharat-heading !text-[var(--bharat-primary)] !mb-2">
      {section.title}
    </Title>
    <Tag color="gold" className="!rounded-full !px-3 !py-0.5">
      Coming Soon...
    </Tag>
  </Card>
)

const BharatViewComingSoon: React.FC = () => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)]">
      <div className="bharat-container">
        <div className="text-center mb-12">
          <Title level={2} className="bharat-heading !text-[var(--bharat-primary)] !mb-4">
            Jury & Speakers
          </Title>
          <Text className="!text-[var(--bharat-text-muted)] text-lg block max-w-2xl mx-auto">
            Advisory board, jury members, speakers, and partners will be announced soon.
          </Text>
        </div>

        <div className="bharat-infinite-carousel relative overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[var(--bharat-bg)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[var(--bharat-bg)] to-transparent z-10" />

          <div className="bharat-infinite-carousel-track flex w-max gap-6">
            {carouselItems.map((section, index) => (
              <ComingSoonCard key={`${section.id}-${index}`} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewComingSoon
