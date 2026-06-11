import React from 'react'
import { Avatar, Card, Col, Row, Space, Typography } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  TrophyOutlined
} from '@ant-design/icons'

const { Title, Text, Link } = Typography

interface BharatViewContactProps {
  variant?: 'full' | 'compact'
}

const iconGradient = { background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }

const contacts = [
  {
    key: 'partnerships',
    title: 'For Speaking Opportunity, Partnerships & Booths',
    name: 'Almas Khan',
    role: null as string | null,
    email: 'almas@alifviewmedia.com',
    phone: '8329357983',
    icon: <TrophyOutlined className="bharat-ant-icon" />
  },
  {
    key: 'nominations',
    title: 'For Nominations',
    name: 'Anam Shaikh',
    role: 'Manager - Events',
    email: 'sales@alifviewmedia.com',
    phone: '9270096787',
    icon: <MailOutlined className="bharat-ant-icon" />
  }
] as const

const BharatViewContact: React.FC<BharatViewContactProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <Space direction="vertical" size="middle" className="w-full">
        {contacts.map((contact) => (
          <div key={contact.key}>
            <Text strong className="!text-white block">
              {contact.name}
            </Text>
            <Text className="!text-gray-400 text-xs block mb-1">
              {contact.role ?? contact.title.replace('For ', '')}
            </Text>
            <Link href={`mailto:${contact.email}`} className="!text-gray-400 hover:!text-white text-sm block">
              {contact.email}
            </Link>
            <Link href={`tel:${contact.phone}`} className="!text-gray-400 hover:!text-white text-sm block mt-1">
              {contact.phone}
            </Link>
          </div>
        ))}
      </Space>
    )
  }

  return (
    <section className="bharat-section bg-[var(--bharat-bg)]">
      <div className="bharat-container max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <Avatar
            size={64}
            icon={<MailOutlined className="bharat-ant-icon bharat-icon-float" />}
            className="bharat-ant-icon-wrap mb-4"
            style={iconGradient}
          />
          <Title level={2} className="bharat-heading !text-[var(--bharat-primary)] !mb-4">
            Contact Us
          </Title>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full" />
        </div>

        <Row gutter={[24, 24]}>
          {contacts.map((contact) => (
            <Col key={contact.key} xs={24} md={12}>
              <Card
                hoverable
                className="bharat-ant-card h-full"
                styles={{ body: { padding: '1.5rem' } }}
              >
                <Title level={4} className="!text-[var(--bharat-primary)] !mb-6 !text-lg sm:!text-xl">
                  {contact.title}
                </Title>
                <Space align="start" size="middle">
                  <Avatar
                    size={48}
                    icon={contact.icon}
                    className="bharat-ant-icon-wrap flex-shrink-0"
                    style={iconGradient}
                  />
                  <Space direction="vertical" size={4} className="min-w-0">
                    <Text strong className="!text-base sm:!text-lg !text-[var(--bharat-text-main)]">
                      {contact.name}
                    </Text>
                    {contact.role && (
                      <Text className="!text-[var(--bharat-text-muted)]">{contact.role}</Text>
                    )}
                    <Space size={8} wrap>
                      <MailOutlined className="!text-[var(--bharat-primary)] bharat-ant-icon" />
                      <Link href={`mailto:${contact.email}`} className="!text-[var(--bharat-text-muted)]">
                        {contact.email}
                      </Link>
                    </Space>
                    <Space size={8} wrap>
                      <PhoneOutlined className="!text-[var(--bharat-primary)] bharat-ant-icon" />
                      <Text className="!text-[var(--bharat-text-muted)]">Contact:</Text>
                      <Link href={`tel:${contact.phone}`} className="!text-[var(--bharat-text-muted)]">
                        {contact.phone}
                      </Link>
                    </Space>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default BharatViewContact
