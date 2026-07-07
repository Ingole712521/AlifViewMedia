import React from 'react'
import { ArrowRight, CalendarClock, IndianRupee } from 'lucide-react'

const BharatViewAwardsInfo: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20 pt-16 border-t border-gray-100 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
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
        <div className="rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 bg-[var(--bharat-bg)] flex flex-col justify-between items-center text-center relative overflow-hidden group min-h-full">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--bharat-primary)]/5" />

          <div className="relative z-10 w-full flex flex-col items-center justify-center flex-1 py-4">
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

          <a
            href="https://forms.gle/qRsuXj3ZSxHSGaMa6"
            target="_blank"
            rel="noopener noreferrer"
            className="bharat-cta-animated relative z-10 isolate w-full max-w-xs mx-auto mt-8 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl border px-8 py-4 text-sm sm:text-base font-extrabold uppercase tracking-[0.18em] text-white shadow-2xl shadow-blue-900/35 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-900/50 active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #172554 0%, #1d4ed8 50%, #38bdf8 100%)',
              borderColor: 'rgba(147, 197, 253, 0.35)'
            }}
          >
            <span className="bharat-cta-shimmer absolute inset-0 rounded-2xl opacity-80" />
            <span className="bharat-cta-ring absolute -inset-1 -z-10 rounded-[20px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.4),transparent_70%)] blur-xl" />
           
            <span className="relative z-10">SUBMIT INTEREST</span>
            <ArrowRight size={18} className="bharat-cta-arrow relative z-10 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default BharatViewAwardsInfo
