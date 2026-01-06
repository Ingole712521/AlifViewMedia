import React from 'react'
import { 
  Users, 
  FileText, 
  Scale, 
  Trophy, 
  ShieldCheck, 
  Award, 
  IndianRupee, 
  CalendarClock, 
  MessageCircle, 
  Mail, 
  Phone, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

interface NominationStep {
  id: number
  title: string
  icon: React.ReactNode
  content: string[]
}

interface NominationProcessProps {
  theme?: 'light' | 'dark'
}

const NominationProcess: React.FC<NominationProcessProps> = ({ theme = 'light' }) => {
  const steps: NominationStep[] = [
    {
      id: 1,
      title: "Eligibility Criteria",
      icon: <Users size={24} />,
      content: [
        "Nominations are open to Real Estate Developers, Builders, Architects, Channel Partners, Consultants, and Allied Service Providers.",
        "Projects/initiatives should be operational, ongoing, or completed within the last 3–5 years.",
        "Nominations can be submitted by companies or individuals.",
        "A company/individual may apply for multiple categories, with separate submissions for each category."
      ]
    },
    {
      id: 2,
      title: "Submission Requirements",
      icon: <FileText size={24} />,
      content: [
        "Completed Nomination Form",
        "Brief Company/Individual Profile",
        "Project/Initiative details (scope, size, location, timeline, etc.)",
        "Key achievements, innovations, and differentiators",
        "Supporting documents: Project images, Brochures, Client testimonials, Media coverage"
      ]
    },
    {
      id: 3,
      title: "Nomination Fee",
      icon: <IndianRupee size={24} />,
      content: [
        "A processing fee is applicable only upon confirmation of winning.",
        "Rs. 20,000 + GST (per nomination)",
        "For 3 & above nominations: Rs. 15,000 + GST"
      ]
    },
    {
      id: 4,
      title: "Submission Deadlines",
      icon: <CalendarClock size={24} />,
      content: [
        "All nominations must be submitted on or before March 30, 2026"
      ]
    },
    {
      id: 5,
      title: "Jury & Confidentiality",
      icon: <Scale size={24} />,
      content: [
        "The jury panel will consist of industry experts and independent professionals.",
        "All information shared will be kept strictly confidential and used only for evaluation purposes.",
        "The jury's decision shall be final and binding."
      ]
    },
    {
      id: 6,
      title: "Award Presentation",
      icon: <Trophy size={24} />,
      content: [
        "Winners will be announced during the Awards Ceremony.",
        "A company representative must be present to receive the award.",
        "In case of absence, prior intimation is mandatory."
      ]
    },
    {
      id: 7,
      title: "Rights of the Organizer",
      icon: <ShieldCheck size={24} />,
      content: [
        "The organizer reserves the right to accept or reject any nomination.",
        "The organizer reserves the right to modify categories or guidelines."
      ]
    }
  ]

  const isDark = theme === 'dark'

  return (
    <div className="py-12 xs:py-16 sm:py-20 md:py-24 px-3 xs:px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-10 xs:mb-12 sm:mb-16 px-2 sm:px-0">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300" style={{ 
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
            }}>
              <Award size={28} className="xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-3 xs:mb-4 sm:mb-6 px-2">
            NOMINATION PROCESS
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed px-2">
            To ensure a fair and transparent evaluation process, all participants are requested to follow the guidelines below while submitting their nominations.
          </p>
          <div className="w-20 xs:w-24 sm:w-32 h-0.5 xs:h-1 sm:h-1.5 mx-auto rounded-full mt-4 xs:mt-6" style={{ 
            background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)'
          }}></div>
        </div>

        {/* Main Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 px-2 sm:px-0 mb-10 xs:mb-12 sm:mb-16 auto-rows-fr">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group bg-[var(--bg-primary)] rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl border-t-4 transition-all duration-300 p-4 xs:p-5 sm:p-6 md:p-8 flex flex-col hover:-translate-y-2"
              style={{ 
                borderTopColor: 'var(--primary-color)',
                borderColor: isDark ? 'rgba(220, 38, 38, 0.3)' : 'rgba(220, 38, 38, 0.2)'
              }}
            >
              <div className="flex items-center justify-between mb-4 xs:mb-5 sm:mb-6 flex-shrink-0">
                <div 
                  className={`w-10 h-10 xs:w-12 xs:h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    isDark 
                      ? 'bg-white/10 group-hover:bg-[var(--secondary-color)]' 
                      : 'bg-red-50 group-hover:bg-[var(--secondary-color)]'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${
                    isDark 
                      ? 'text-white/70 group-hover:text-white' 
                      : 'text-[var(--secondary-color)] group-hover:text-white'
                  }`}>
                    {step.icon}
                  </div>
                </div>
                <span className={`text-3xl xs:text-4xl sm:text-5xl font-bold transition-colors duration-300 ${
                  isDark 
                    ? 'text-white group-hover:text-white/90' 
                    : 'text-[var(--text-primary)] group-hover:text-[var(--primary-color)]'
                }`}>
                  0{step.id}
                </span>
              </div>
              
              <h3 className={`text-lg xs:text-xl font-bold mb-3 xs:mb-4 flex-shrink-0 transition-colors ${
                isDark 
                  ? 'text-white group-hover:text-[var(--primary-color)]' 
                  : 'text-[var(--text-primary)] group-hover:text-[var(--primary-color)]'
              }`}>
                {step.title}
              </h3>
              
              <ul className="space-y-2 xs:space-y-3 flex-grow">
                {step.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 xs:gap-3 text-[var(--text-secondary)]">
                    <CheckCircle2 
                      size={16} 
                      className="xs:w-[18px] xs:h-[18px] text-[var(--primary-color)] mt-0.5 shrink-0 flex-shrink-0" 
                    />
                    <span className="text-xs xs:text-sm leading-relaxed flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlighted Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xs:gap-5 sm:gap-6 md:gap-8 px-2 sm:px-0">
          
          {/* Fee Card */}
          <div 
            className="lg:col-span-5 rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl relative overflow-hidden"
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.95))'
                : 'linear-gradient(135deg, #1e293b, #0f172a)',
              color: 'white',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 xs:w-40 xs:h-40 rounded-full blur-3xl opacity-20" style={{
              background: 'var(--secondary-color)'
            }}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 mb-5 xs:mb-6 sm:mb-8">
                <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-xl xs:rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                  <IndianRupee size={24} className="xs:w-7 xs:h-7 sm:w-[28px] sm:h-[28px] text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold">Nomination Fee</h3>
                  <p className={`text-xs xs:text-sm ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>
                    Processing fee applicable upon winning
                  </p>
                </div>
              </div>

              <div className="space-y-3 xs:space-y-4">
                <div className={`p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl border transition-colors ${
                  isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}>
                  <div className="flex justify-between items-center">
                    <p className={`text-xs xs:text-xs sm:text-sm uppercase tracking-wider font-medium ${
                      isDark ? 'text-gray-300' : 'text-slate-300'
                    }`}>
                      Single Nomination
                    </p>
                    <ArrowRight size={14} className={`xs:w-4 xs:h-4 ${isDark ? 'text-gray-500' : 'text-slate-500'}`} />
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">₹ 20,000</p>
                    <span className={`text-xs xs:text-sm font-normal ${isDark ? 'text-gray-400' : 'text-slate-400'}`}>
                      + GST
                    </span>
                  </div>
                </div>
                
                <div 
                  className="p-3 xs:p-4 sm:p-5 rounded-lg xs:rounded-xl border shadow-lg transform scale-[1.02] xs:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))',
                    borderColor: '#dc2626'
                  }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[10px] xs:text-xs bg-red-900/30 px-1.5 xs:px-2 py-0.5 rounded uppercase tracking-wider font-bold text-red-200">
                      Best Value
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs xs:text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                      3 & Above Nominations
                    </p>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">₹ 15,000</p>
                    <span className="text-xs xs:text-sm text-red-100 font-normal">+ GST (each)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deadline & Contact Split */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {/* Deadline Card */}
            <div 
              className={`rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border flex flex-col justify-center items-center text-center relative overflow-hidden group ${
                isDark 
                  ? 'bg-[var(--bg-primary)] border-white/10' 
                  : 'bg-[var(--bg-primary)] border-red-100'
              }`}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: isDark 
                    ? 'rgba(220, 38, 38, 0.1)' 
                    : 'rgba(254, 242, 242, 0.8)'
                }}
              ></div>
              <div className="relative z-10 w-full">
                <div 
                  className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-full mx-auto flex items-center justify-center mb-3 xs:mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isDark ? 'bg-white/10' : 'bg-red-50/80'
                  }`}
                >
                  <CalendarClock 
                    size={28} 
                    className="xs:w-8 xs:h-8 sm:w-[32px] sm:h-[32px] text-[var(--secondary-color)]" 
                  />
                </div>
                <h3 className={`text-base xs:text-lg sm:text-xl font-bold mb-1 xs:mb-2 ${
                  isDark ? 'text-white' : 'text-[var(--text-primary)]'
                }`}>
                  Submission Deadline
                </h3>
                <p className={`text-xs xs:text-sm mb-3 xs:mb-4 sm:mb-6 ${
                  isDark ? 'text-gray-400' : 'text-[var(--text-secondary)]'
                }`}>
                  Submit your entries before
                </p>
                <div 
                  className="inline-block px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 text-base xs:text-lg sm:text-xl font-bold rounded-lg shadow-md transform -rotate-1 group-hover:rotate-0 transition-transform text-white"
                  style={{
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
                  }}
                >
                  March 30, 2026
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div 
              className={`rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border relative overflow-hidden ${
                isDark 
                  ? 'bg-[var(--bg-primary)] border-white/10' 
                  : 'bg-[var(--bg-primary)] border-red-100'
              }`}
            >
              <div 
                className="absolute top-0 right-0 w-24 h-24 xs:w-32 xs:h-32 rounded-full -mr-12 -mt-12 xs:-mr-16 xs:-mt-16 blur-2xl"
                style={{
                  background: isDark 
                    ? 'rgba(245, 158, 11, 0.1)' 
                    : 'rgba(254, 243, 199, 0.6)'
                }}
              ></div>
              <h3 className={`text-base xs:text-lg sm:text-xl font-bold mb-3 xs:mb-4 sm:mb-6 relative z-10 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-[var(--text-primary)]'
              }`}>
                <MessageCircle size={18} className="xs:w-5 xs:h-5 text-[var(--secondary-color)]" />
                Contact for Queries
              </h3>
              <div className="space-y-3 xs:space-y-4 sm:space-y-6 relative z-10">
                <a 
                  href="mailto:sales@alifviewmedia.com" 
                  className={`flex items-start gap-2 xs:gap-3 sm:gap-4 group p-2 xs:p-3 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-white/10' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-9 h-9 xs:w-10 xs:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isDark ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-50 group-hover:bg-blue-100'
                  }`}>
                    <Mail size={16} className="xs:w-[18px] xs:h-[18px] text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] xs:text-xs font-bold uppercase mb-0.5 ${
                      isDark ? 'text-gray-400' : 'text-[var(--text-secondary)]'
                    }`}>
                      Email Support
                    </p>
                    <span className={`text-xs xs:text-sm font-semibold break-all transition-colors ${
                      isDark 
                        ? 'text-gray-300 group-hover:text-blue-400' 
                        : 'text-[var(--text-primary)] group-hover:text-blue-700'
                    }`}>
                      sales@alifviewmedia.com
                    </span>
                  </div>
                </a>
                
                <div className={`flex items-start gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-3 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-white/10' : 'hover:bg-slate-50'
                }`}>
                  <div className={`w-9 h-9 xs:w-10 xs:h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-green-500/20' : 'bg-green-50'
                  }`}>
                    <Phone size={16} className="xs:w-[18px] xs:h-[18px] text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-[10px] xs:text-xs font-bold uppercase mb-0.5 ${
                      isDark ? 'text-gray-400' : 'text-[var(--text-secondary)]'
                    }`}>
                      Helpline
                    </p>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="tel:9270096787" 
                        className={`text-xs xs:text-sm font-semibold transition-colors ${
                          isDark 
                            ? 'text-gray-300 hover:text-green-400' 
                            : 'text-[var(--text-primary)] hover:text-green-700'
                        }`}
                      >
                        9270096787
                      </a>
                      <div className={`h-px w-full ${isDark ? 'bg-white/10' : 'bg-[var(--border-color)]'}`}></div>
                      <a 
                        href="tel:9529518393" 
                        className={`text-xs xs:text-sm font-semibold transition-colors ${
                          isDark 
                            ? 'text-gray-300 hover:text-green-400' 
                            : 'text-[var(--text-primary)] hover:text-green-700'
                        }`}
                      >
                        9529518393
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NominationProcess

