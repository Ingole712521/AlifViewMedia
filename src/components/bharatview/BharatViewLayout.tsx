import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import BharatViewNav from '../BharatViewNav'
import BharatViewFooter from './BharatViewFooter'

interface BharatViewLayoutProps {
  children: React.ReactNode
  showFooter?: boolean
}

const bharatTheme = {
  token: {
    colorPrimary: '#1e3a8a',
    colorLink: '#1e3a8a',
    colorInfo: '#1e3a8a',
    borderRadius: 12,
    fontFamily: "'Inter', sans-serif"
  }
}

const BharatViewLayout: React.FC<BharatViewLayoutProps> = ({ children, showFooter = true }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ConfigProvider theme={bharatTheme}>
      <div className="bharatview-site min-h-screen bg-[var(--bharat-bg)] flex flex-col font-sans">
        <BharatViewNav />
        <main className={showFooter ? 'flex-grow' : undefined}>{children}</main>
        {showFooter && <BharatViewFooter />}
      </div>
    </ConfigProvider>
  )
}

export default BharatViewLayout
