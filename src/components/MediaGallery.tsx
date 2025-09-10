import React, { useState } from 'react'
import { Play, ArrowRight, X } from 'lucide-react'

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
  
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Conference Hall',
      category: 'Events',
      description: 'State-of-the-art conference facilities designed for seamless professional gatherings and networking events.',
      year: '2024'
    },
    {
      id: 2,
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive Board Meeting',
      category: 'Corporate',
      description: 'High-level corporate meetings where innovation strategies and business excellence are discussed.',
      year: '2024'
    },
    {
      id: 3,
      type: 'video',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Summit Highlights Reel',
      category: 'Video',
      description: 'A comprehensive overview of our most successful technology summits and their groundbreaking outcomes.',
      year: '2024'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Innovation Technology Summit',
      category: 'Technology',
      description: 'Cutting-edge technology presentations showcasing the latest innovations in digital transformation.',
      year: '2024'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Networking Excellence',
      category: 'Events',
      description: 'Professional networking events that connect industry leaders and foster meaningful business relationships.',
      year: '2024'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Digital Innovation Workshop',
      category: 'Technology',
      description: 'Interactive workshops focusing on emerging technologies and digital transformation strategies.',
      year: '2024'
    }
  ]

  const filters = ['All', 'Events', 'Corporate', 'Technology', 'Video']
  const filteredItems = activeFilter === 'All' ? mediaItems : mediaItems.filter(item => item.category === activeFilter)

  return (
    <section 
      className="section-padding red-gradient-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Media Gallery
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover our extensive portfolio showcasing memorable moments, innovative events, 
            and transformative media solutions that define excellence in conference organization.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white/80 text-sm">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80 text-sm">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-video relative">
                <img 
                  src={item.type === 'video' ? item.thumbnail : item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                      <Play size={24} className="text-red-600 ml-1" />
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                        {item.category}
                      </span>
                      <span className="text-white/80 text-sm">{item.year}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your Own Success Story?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
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
