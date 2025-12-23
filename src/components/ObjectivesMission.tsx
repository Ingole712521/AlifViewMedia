import React, { useState, useEffect } from 'react'
import { Target, Award, Users, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Star } from 'lucide-react'

const ObjectivesMission: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('objectives-mission')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const objectives = [
    {
      icon: <Users size={28} className="text-white" />,
      title: "Knowledge Sharing",
      description: "To create a credible platform for industry knowledge sharing",
      gradient: "from-blue-500 to-cyan-500",
      color: "var(--primary-color)"
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: "Recognize Excellence",
      description: "To recognize and felicitate excellence in the Industries",
      gradient: "from-amber-500 to-orange-500",
      color: "var(--accent-color)"
    },
    {
      icon: <TrendingUp size={28} className="text-white" />,
      title: "Networking",
      description: "To enable meaningful networking opportunities",
      gradient: "from-purple-500 to-pink-500",
      color: "var(--secondary-color)"
    }
  ]

  return (
    <section 
      id="objectives-mission"
      className="section-padding w-full relative overflow-hidden" 
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl animate-pulse" style={{ backgroundColor: 'var(--primary-color)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s', backgroundColor: 'var(--accent-color)' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s', backgroundColor: 'var(--secondary-color)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 relative"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              <Target size={40} className="text-white z-10" />
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            </div>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 sm:mb-8 leading-normal bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent pb-2">
            Our Objectives & Mission
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <Star size={20} className="text-[var(--primary-color)]" fill="currentColor" />
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          </div>
        </div>

        {/* Introduction
        <div className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed px-4 relative z-10">
                Alifview is a professional business networking platform specializing in conferences, award ceremonies, and industry-focused forums. We curate high-impact events that bring together key stakeholders, decision-makers, and industry leaders across sectors
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 rounded-full opacity-30" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            </div>
          </div>
        </div> */}

        {/* Objectives Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className={`text-center mb-10 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: 'var(--primary-color)' }}>
                <Target size={32} className="text-white" />
              </div>
              <span>Our Objectives</span>
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto px-4">
              We are committed to creating value and driving excellence across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className={`card group hover:scale-105 transition-all duration-500 relative overflow-hidden border-2 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  borderColor: 'transparent',
                  background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(135deg, var(--primary-color), var(--accent-color)) border-box'
                }}
              >
                {/* Animated background gradient */}
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20 group-hover:w-60 group-hover:h-60"
                  style={{ backgroundColor: objective.color }}
                ></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative"
                      style={{ backgroundColor: objective.color }}
                    >
                      {objective.icon}
                      <div className="absolute inset-0 rounded-2xl animate-ping opacity-20" style={{ backgroundColor: objective.color }}></div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 text-center group-hover:text-[var(--primary-color)] transition-colors duration-300">
                    {objective.title}
                  </h4>
                  
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed text-center">
                    {objective.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="mt-6 flex justify-center">
                    <div className="w-16 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: objective.color }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="card relative overflow-hidden border-2 hover:shadow-2xl transition-all duration-500" style={{ 
            borderColor: 'transparent',
            background: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(135deg, var(--primary-color), var(--accent-color), var(--secondary-color)) border-box'
          }}>
            {/* Animated decorative elements */}
            <div 
              className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
              style={{ backgroundColor: 'var(--accent-color)' }}
            ></div>
            <div 
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse"
              style={{ animationDelay: '1s', backgroundColor: 'var(--secondary-color)' }}
            ></div>
            
            {/* Shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center mb-6 relative">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 relative"
                    style={{ backgroundColor: 'var(--accent-color)' }}
                  >
                    <Sparkles size={48} className="text-white z-10" />
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Star size={24} className="text-[var(--primary-color)] animate-pulse" fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent mb-6">
                  Our Mission
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                    <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}>
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-justify group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    At AlifView Media, our mission is to acknowledge and celebrate the accomplishments that inspire progress and set new standards of excellence
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 transform group-hover:scale-125 transition-transform duration-300">
                    <div className="p-2 rounded-full" style={{ backgroundColor: 'var(--primary-color)' }}>
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-justify group-hover:text-[var(--text-primary)] transition-colors duration-300">
                    We aim to shine a spotlight on those who have made significant contributions and to provide a stage where hard work, dedication, and achievements can be recognized and celebrated
                  </p>
                </div>
              </div>

              {/* Mission Statement Highlight */}
              <div 
                className="mt-10 p-6 sm:p-8 rounded-xl border-l-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  borderLeftColor: 'var(--primary-color)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star size={20} className="text-[var(--primary-color)]" fill="currentColor" />
                    <Star size={24} className="text-[var(--accent-color)]" fill="currentColor" />
                    <Star size={20} className="text-[var(--primary-color)]" fill="currentColor" />
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] text-center italic leading-relaxed bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] bg-clip-text text-transparent">
                    "Celebrating Excellence, Inspiring Progress"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block relative group">
            <button 
              className="text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-semibold text-white relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)'
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ObjectivesMission

