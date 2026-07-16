import React from 'react'
import { Card, Tag, Typography } from 'antd'

const { Title, Text } = Typography

interface BharatViewSoonPageProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  middle?: React.ReactNode
}

const BharatViewSoonPage: React.FC<BharatViewSoonPageProps> = ({
  title,
  subtitle,
  description,
  icon,
  middle
}) => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)] min-h-[60vh] flex items-center">
      <div className="bharat-container max-w-3xl w-full">
        <div className="text-center mb-10">
          <div className="bharat-ant-icon-wrap inline-flex text-[var(--bharat-primary)]/50 text-5xl mb-6">
            {icon}
          </div>
          <Title level={2} className="bharat-heading !text-[var(--bharat-primary)] !mb-4">
            {title}
          </Title>
          <Text className="!text-[var(--bharat-text-muted)] text-lg block max-w-xl mx-auto">
            {subtitle}
          </Text>
        </div>

        {middle ? <div className="mb-10">{middle}</div> : null}

        <Card className="bharat-ant-card text-center" styles={{ body: { padding: '3rem 2rem' } }}>
          <Tag color="gold" className="!rounded-full !px-4 !py-1 !text-sm !font-medium !mb-4">
            Coming Soon...
          </Tag>
          <Text className="!text-[var(--bharat-text-muted)] block leading-relaxed">{description}</Text>
        </Card>
      </div>
    </section>
  )
}

export default BharatViewSoonPage
