import React, { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

interface MediaItem {
  id: number
  type: 'image' | 'video'
  url: string
  title: string
  category: string
  description: string
  year: string
  thumbnail?: string
}

const MediaGallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filters = ['All', 'Events']

  return (
    <section 
      className="section-padding red-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Our Media Gallery
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 px-2">
            Discover our extensive portfolio showcasing memorable moments, innovative events, 
            and transformative media solutions that define excellence in conference organization.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80 text-xs sm:text-sm">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80 text-xs sm:text-sm">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80 text-xs sm:text-sm">Countries</div>
            </div>
            {/* <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">0%</div>
              <div className="text-white/80 text-xs sm:text-sm">Satisfaction Rate</div>
            </div> */}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-white text-red-600 shadow-lg transform scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30 hover:transform hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-8 sm:py-12 md:py-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            {/* Animated Icon */}
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                {/* Middle pulsing ring */}
                <div className="absolute inset-4 border-2 border-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                {/* Inner spinning element */}
                <div className="absolute inset-8 border-2 border-dashed border-white/40 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                We're crafting something extraordinary for you. Our gallery will showcase 
                <span className="text-white font-semibold"> stunning events</span>, 
                <span className="text-white font-semibold"> innovative solutions</span>, and 
                <span className="text-white font-semibold"> memorable moments</span> that define excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">Ready to Create Your Own Success Story?</h3>
          <p className="text-sm xs:text-base sm:text-lg text-white/90 mb-6 max-w-2xl mx-auto px-2">
            Join thousands of satisfied clients who have transformed their events with our innovative solutions.
          </p>
          <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </span>
          </button>
        </div>

        {/* Enhanced Modal */}
        {selectedMedia && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative max-w-6xl w-full">
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-video relative">
                  {selectedMedia.type === 'image' ? (
                    <img 
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video 
                      controls 
                      className="w-full h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={selectedMedia.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-semibold">
                      {selectedMedia.category}
                    </span>
                    <span className="text-gray-500">{selectedMedia.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedMedia.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MediaGallery
