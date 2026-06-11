import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BharatViewNav from '../BharatViewNav'
import BharatViewFooter from './BharatViewFooter'
interface BharatViewLayoutProps {
  children: React.ReactNode
  showFooter?: boolean
}

const BharatViewLayout: React.FC<BharatViewLayoutProps> = ({ children, showFooter = true }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bharatview-site min-h-screen bg-[var(--bharat-bg)] flex flex-col font-sans">
      <BharatViewNav />
      <main className={showFooter ? 'flex-grow' : undefined}>{children}</main>
      {showFooter && <BharatViewFooter />}
    </div>
  )
}

export default BharatViewLayout
