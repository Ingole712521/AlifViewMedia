import React from 'react'
import { Award, Trophy } from 'lucide-react'

interface WinnerEntry {
  award: string
  winner: string
}

interface WinnerCategory {
  title: string
  winners: WinnerEntry[]
}

const awardWinners2026: WinnerCategory[] = [
  {
    title: 'Developer Excellence',
    winners: [
      { award: 'Developer of the Year (Residential) – Metro', winner: 'Kalpataru Limited' },
      { award: 'Developer of the Year – Mumbai Metropolitan Region', winner: 'Veenaa Developers Pvt. Ltd.' },
      { award: 'Excellence in Sustainable Real Estate Development Award', winner: 'Godrej Properties Limited' }
    ]
  },
  {
    title: 'Project Excellence',
    winners: [
      { award: 'Best Commercial Project of the Year', winner: 'Kalpataru Limited for Kalpataru Virtus' },
      { award: 'Best Integrated Township Project of the Year', winner: 'Kalpataru Limited for Kalpataru Parkcity' },
      { award: 'Best Residential Project of the Year – Signature Luxury', winner: 'Kalpataru Limited for Kalpataru Oceana' }
    ]
  },
  {
    title: 'Branding & Marketing Leadership Awards',
    winners: [
      { award: 'Excellence in Real Estate Development & Marketing Management', winner: 'Plotrix Pvt. Ltd.' },
      { award: 'Best Use of Technology in Marketing – AI', winner: 'Kalpataru Limited' },
      { award: 'Excellence in Visual Design & Communication', winner: 'Kalpataru Limited for The Roots' },
      { award: 'Excellence in Real Estate Business Transformation Award', winner: 'Sellability' },
      { award: 'Leading Business Publication of the Year', winner: 'The Business Fame' },
      { award: 'Best Integrated Marketing Campaign of the Year', winner: 'Kalpataru Limited for Kalpataru One Worli' }
    ]
  },
  {
    title: 'Real Estate Consultant Awards',
    winners: [
      {
        award: 'PropTech-Enabled Corporate Mandate Consultant of the Year',
        winner: 'PrahaladSingh Patel, CEO & Managing Director, ProWaVe Consultants Pvt. Ltd.'
      }
    ]
  },
  {
    title: 'Individual Leadership Awards',
    winners: [
      { award: 'Real Estate Influencer of the Year', winner: 'Sagar Visawadia, Founder, Dream Properties' },
      {
        award: 'Emerging Entrepreneur of the Year',
        winner: 'Chintan Vasani, Partner, Wisebiz Developers & Joint Treasurer, NAREDCO NextGen National'
      },
      {
        award: 'Real Estate Growth Strategist of the Year',
        winner: "Yash Paleja, Founder, BlindSpot Podcast & India's Leading Real Estate Strategist"
      },
      {
        award: 'Real Estate Thought Leader & Author of the Year',
        winner: 'Dr. Adv. Harshul Savla, Developer, Best Selling Author, World Record Holder, TEDx Speaker'
      },
      {
        award: 'Strategic Procurement Leader of the Year',
        winner: 'Dr. Nitin Athavle, AVP, Kohinoor Group Pune & Planedge Consultants Pvt.Ltd.'
      },
      {
        award: 'Real Estate Business Leader of the Year',
        winner: 'Kaushall Prakash, Founder & MD, Plotrix Pvt Ltd & VDPL'
      }
    ]
  }
]

interface AwardWinners2026Props {
  theme: 'light' | 'dark'
}

const AwardWinners2026: React.FC<AwardWinners2026Props> = ({ theme }) => {
  return (
    <div
      id="event-award-winners"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#ffffff',
        background: theme === 'light'
          ? 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%), radial-gradient(circle at 70% 30%, rgba(220, 38, 38, 0.03) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.02) 0%, transparent 50%)'
          : 'none'
      }}
    >
      {theme === 'light' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.015) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      )}
      {theme === 'dark' && (
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-5"
          style={{
            background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-0">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
            >
              <Trophy size={32} className="sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
            Award Winners 2026
          </h2>
          <p className="text-[var(--text-secondary)] text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium px-2">
            Celebrating the leaders and organisations shaping Maharashtra&apos;s real estate future
          </p>
          <div
            className="w-24 sm:w-32 h-1 sm:h-1.5 mx-auto rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)' }}
          />
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12 px-2 sm:px-0">
          {awardWinners2026.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl sm:rounded-3xl border-2 overflow-hidden shadow-lg sm:shadow-xl"
              style={{
                borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.55)' : 'rgba(226, 232, 240, 1)',
                backgroundColor: theme === 'dark' ? 'rgba(15, 23, 42, 0.55)' : 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)' }}
                  >
                    <Award size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {category.winners.map((entry) => (
                    <div
                      key={`${category.title}-${entry.award}`}
                      className="group rounded-xl sm:rounded-2xl p-4 sm:p-5 border transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                      style={{
                        borderColor: theme === 'dark' ? 'rgba(71, 85, 105, 0.45)' : 'rgba(226, 232, 240, 1)',
                        backgroundColor: theme === 'dark' ? 'rgba(30, 41, 59, 0.5)' : '#f8fafc'
                      }}
                    >
                      <p className="text-sm sm:text-base font-semibold text-[var(--primary-color)] mb-2 leading-snug">
                        {entry.award}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                        {entry.winner}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AwardWinners2026
