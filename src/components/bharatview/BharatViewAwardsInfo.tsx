import React from 'react'
import { ArrowRight, CalendarClock, Handshake, IndianRupee } from 'lucide-react'

const PARTNERS = [
  {
    role: 'Media Partner',
    name: 'Media Mohalla',
    logo: '/logo/MM Logo Final 1-1.png'
  },
  {
    role: 'Magazine Partner',
    name: 'The Business Fame',
    logo: '/partner/TBF-new-logo-PNG.png'
  }
]

const BharatViewAwardsInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 pt-16 border-t border-gray-100 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nomination Fee */}
        <div
          className="rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            color: 'white'
          }}
        >
          <div
            className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 rounded-full blur-3xl opacity-20"
            style={{ background: 'var(--bharat-secondary)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                <IndianRupee size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bharat-heading">Nomination Fee</h3>
                <p className="text-sm text-slate-400">Processing fee applicable upon winning</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <p className="text-xs sm:text-sm uppercase tracking-wider font-medium text-slate-300">
                    Single Nomination
                  </p>
                  <ArrowRight size={16} className="text-slate-500" />
                </div>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-bold text-white">₹ 25,000</p>
                  <span className="text-sm text-slate-400">+ 18% GST</span>
                </div>
              </div>

              <div
                className="p-4 sm:p-5 rounded-xl border shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--bharat-secondary), #b45309)',
                  borderColor: '#d97706'
                }}
              >
                <p className="text-[10px] xs:text-xs bg-black/20 inline-block px-2 py-0.5 rounded uppercase tracking-wider font-bold text-amber-100 mb-2">
                  Best Value
                </p>
                <p className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                  3 & Above Nominations
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl font-bold text-white">₹ 20,000</p>
                  <span className="text-sm text-amber-100">+ 18% GST (each)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submission Deadline */}
        <div className="rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 bg-[var(--bharat-bg)] flex flex-col justify-center items-center text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--bharat-primary)]/5" />

          <div className="relative z-10 w-full">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center mb-6 bg-[var(--bharat-primary)]/10 group-hover:scale-110 transition-transform duration-300">
              <CalendarClock size={32} className="text-[var(--bharat-secondary)]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--bharat-text-main)] mb-2">
              Submission Deadline
            </h3>
            <p className="text-sm text-[var(--bharat-text-muted)] mb-6">Submit your entries before</p>
            <div
              className="inline-block px-6 py-2 text-lg sm:text-xl font-bold rounded-lg shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 text-white"
              style={{
                background: 'linear-gradient(135deg, var(--bharat-primary), #1e40af)'
              }}
            >
              August 30, 2026
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-[var(--bharat-primary)]/10">
            <Handshake size={28} className="text-[var(--bharat-primary)]" />
          </div>
          <h3 className="bharat-heading text-2xl md:text-3xl font-bold text-[var(--bharat-primary)] mb-3">
            Partners
          </h3>
          <p className="text-[var(--bharat-text-muted)] text-sm md:text-base">
            Proudly supported by our media and magazine partners
          </p>
          <div className="w-20 h-1 bg-[var(--bharat-secondary)] mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="space-y-4">
              <h4 className="text-center text-base sm:text-lg font-bold text-[var(--bharat-primary)]">
                {partner.role}
              </h4>
              <div className="bharat-awards-subcard rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md flex flex-col items-center justify-center p-8 min-h-[160px] transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 sm:h-16 md:h-20 w-auto max-w-full object-contain"
                  loading="lazy"
                />
                <p className="mt-4 text-sm font-medium text-[var(--bharat-text-muted)]">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BharatViewAwardsInfo
