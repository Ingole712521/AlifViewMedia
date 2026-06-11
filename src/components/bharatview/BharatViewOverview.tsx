import React from 'react'
import { Eye, Rocket } from 'lucide-react'

const BharatViewOverview: React.FC = () => {
  return (
    <section className="bharat-section bg-white">
      <div className="bharat-container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-6">
            Overview
          </h2>
          <p className="text-lg text-[var(--bharat-text-muted)] leading-relaxed mb-6">
            The BharatView Business Summit & Awards 2026 is a premier leadership platform designed to
            bring together entrepreneurs, business leaders, innovators, policymakers, investors, and
            industry experts from diverse sectors to exchange ideas, explore opportunities, and
            celebrate excellence.
          </p>
          <p className="text-lg text-[var(--bharat-text-muted)] leading-relaxed mb-6">
            As India continues its journey toward becoming a global economic powerhouse, BharatView
            serves as a catalyst for meaningful conversations on innovation, entrepreneurship,
            digital transformation, sustainability, leadership, and business growth. The summit will
            feature insightful keynote sessions, panel discussions, fireside chats, and networking
            opportunities with some of the country&apos;s most influential business minds.
          </p>
          <p className="text-lg text-[var(--bharat-text-muted)] leading-relaxed">
            The event will culminate in the prestigious BharatView Business Awards, recognizing
            outstanding organizations, entrepreneurs, professionals, and changemakers who have
            demonstrated exceptional achievements, innovation, and leadership in their respective
            industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bharat-card p-8 bg-blue-50 border-none">
            <div className="w-14 h-14 rounded-full bg-[var(--bharat-primary)] text-white flex items-center justify-center mb-6">
              <Eye size={24} />
            </div>
            <h3 className="bharat-heading text-2xl font-bold text-[var(--bharat-primary)] mb-4">
              Vision
            </h3>
            <p className="text-[var(--bharat-text-muted)] leading-relaxed">
              To create India&apos;s most influential cross-industry platform that inspires
              innovation, recognizes excellence, and fosters meaningful business connections.
            </p>
          </div>
          <div className="bharat-card p-8 bg-amber-50 border-none">
            <div className="w-14 h-14 rounded-full bg-[var(--bharat-secondary)] text-white flex items-center justify-center mb-6">
              <Rocket size={24} />
            </div>
            <h3 className="bharat-heading text-2xl font-bold text-[var(--bharat-primary)] mb-4">
              Mission
            </h3>
            <p className="text-[var(--bharat-text-muted)] leading-relaxed">
              To empower businesses, entrepreneurs, and leaders by providing a platform for
              knowledge sharing, networking, recognition, and growth, contributing to India&apos;s
              economic and entrepreneurial success story.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewOverview
