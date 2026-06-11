import React from 'react'
import { Card, Tag, Typography } from 'antd'
import { TeamOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const BharatViewAdvisoryBoard: React.FC = () => {
  return (
    <section className="bharat-section bg-[var(--bharat-bg)] min-h-[60vh] flex items-center">
      <div className="bharat-container max-w-3xl w-full">
        <div className="text-center mb-10">
          <div className="bharat-ant-icon-wrap inline-flex text-[var(--bharat-primary)]/50 text-5xl mb-6">
            <TeamOutlined className="bharat-ant-icon bharat-icon-float" />
          </div>
          <Title level={2} className="bharat-heading !text-[var(--bharat-primary)] !mb-4">
            Advisory Board
          </Title>
          <Text className="!text-[var(--bharat-text-muted)] text-lg block max-w-xl mx-auto">
            Our distinguished advisory board members will be announced soon.
          </Text>
        </div>

        <Card className="bharat-ant-card text-center" styles={{ body: { padding: '3rem 2rem' } }}>
          <Tag color="gold" className="!rounded-full !px-4 !py-1 !text-sm !font-medium !mb-4">
            Coming Soon...
          </Tag>
          <Text className="!text-[var(--bharat-text-muted)] block leading-relaxed">
            We are curating an exceptional panel of industry leaders and experts to guide the
            BharatView Business Summit & Awards 2026. Check back for updates.
          </Text>
        </Card>
      </div>
    </section>
  )
}

export default BharatViewAdvisoryBoard
