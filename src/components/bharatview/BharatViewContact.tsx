import React from 'react'
import { Award, Mail, Phone } from 'lucide-react'

interface BharatViewContactProps {
  variant?: 'full' | 'compact'
}

const BharatViewContact: React.FC<BharatViewContactProps> = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div className="space-y-5">
        <div>
          <p className="text-white font-semibold text-sm mb-1">Almas Khan</p>
          <p className="text-gray-400 text-xs mb-2">Speaking, Partnerships & Booths</p>
          <a
            href="mailto:almas@alifviewmedia.com"
            className="text-gray-400 hover:text-white transition-colors text-sm block"
          >
            almas@alifviewmedia.com
          </a>
          <a
            href="tel:8329357983"
            className="text-gray-400 hover:text-white transition-colors text-sm block mt-1"
          >
            8329357983
          </a>
        </div>
        <div>
          <p className="text-white font-semibold text-sm mb-1">Anam Shaikh</p>
          <p className="text-gray-400 text-xs mb-2">Manager - Events (Nominations)</p>
          <a
            href="mailto:sales@alifviewmedia.com"
            className="text-gray-400 hover:text-white transition-colors text-sm block"
          >
            sales@alifviewmedia.com
          </a>
          <a
            href="tel:9270096787"
            className="text-gray-400 hover:text-white transition-colors text-sm block mt-1"
          >
            9270096787
          </a>
        </div>
      </div>
    )
  }

  return (
    <section className="bharat-section bg-[var(--bharat-bg)]">
      <div className="bharat-container max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }}
            >
              <Mail size={28} className="text-white" />
            </div>
          </div>
          <h2 className="bharat-heading text-3xl md:text-4xl font-bold text-[var(--bharat-primary)] mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bharat-card p-6 md:p-8 border-2 border-[var(--bharat-primary)]/20 hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--bharat-primary)] mb-6">
              For Speaking Opportunity, Partnerships & Booths
            </h3>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }}
              >
                <Award size={22} className="text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-[var(--bharat-text-main)] mb-2">
                  Almas Khan
                </h4>
                <div className="flex items-center gap-2 text-[var(--bharat-text-muted)] mb-2">
                  <Mail size={16} className="text-[var(--bharat-primary)] flex-shrink-0" />
                  <a
                    href="mailto:almas@alifviewmedia.com"
                    className="hover:text-[var(--bharat-primary)] transition-colors text-sm sm:text-base"
                  >
                    almas@alifviewmedia.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[var(--bharat-text-muted)]">
                  <Phone size={16} className="text-[var(--bharat-primary)] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium">Contact:</span>
                  <a
                    href="tel:8329357983"
                    className="hover:text-[var(--bharat-primary)] transition-colors text-sm sm:text-base font-medium"
                  >
                    8329357983
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bharat-card p-6 md:p-8 border-2 border-[var(--bharat-primary)]/20 hover:shadow-lg transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-[var(--bharat-primary)] mb-6">
              For Nominations
            </h3>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
                style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)' }}
              >
                <Mail size={22} className="text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-base sm:text-lg text-[var(--bharat-text-main)] mb-1">
                  Anam Shaikh
                </h4>
                <p className="text-sm sm:text-base text-[var(--bharat-text-muted)] mb-2">
                  Manager - Events
                </p>
                <div className="flex items-center gap-2 text-[var(--bharat-text-muted)] mb-2">
                  <Mail size={16} className="text-[var(--bharat-primary)] flex-shrink-0" />
                  <a
                    href="mailto:sales@alifviewmedia.com"
                    className="hover:text-[var(--bharat-primary)] transition-colors text-sm sm:text-base break-all"
                  >
                    sales@alifviewmedia.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[var(--bharat-text-muted)]">
                  <Phone size={16} className="text-[var(--bharat-primary)] flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium">Contact:</span>
                  <a
                    href="tel:9270096787"
                    className="hover:text-[var(--bharat-primary)] transition-colors text-sm sm:text-base font-medium"
                  >
                    9270096787
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BharatViewContact
