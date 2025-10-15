// Performance monitoring and Core Web Vitals tracking

export const measurePerformance = () => {
  if (typeof window === 'undefined') return

  // Measure First Contentful Paint (FCP)
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log('FCP:', entry.startTime)
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'fcp',
            value: Math.round(entry.startTime)
          })
        }
      }
    }
  })
  observer.observe({ entryTypes: ['paint'] })

  // Measure Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]
    console.log('LCP:', lastEntry.startTime)
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'lcp',
        value: Math.round(lastEntry.startTime)
      })
    }
  })
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

  // Measure Cumulative Layout Shift (CLS)
  let clsValue = 0
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value
      }
    }
    // console.log('CLS:', clsValue)
    if (window.gtag) {
      window.gtag('event', 'timing_complete', {
        name: 'cls',
        value: Math.round(clsValue * 1000)
      })
    }
  })
  clsObserver.observe({ entryTypes: ['layout-shift'] })

  // Measure First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fidEntry = entry as any
      const fid = fidEntry.processingStart - fidEntry.startTime
      console.log('FID:', fid)
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'fid',
          value: Math.round(fid)
        })
      }
    }
  })
  fidObserver.observe({ entryTypes: ['first-input'] })
}

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      }
    })
  })

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img)
  })
}

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return

  // Preload critical fonts
  const fontPreload = document.createElement('link')
  fontPreload.rel = 'preload'
  fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  fontPreload.as = 'style'
  document.head.appendChild(fontPreload)

  // Preload critical images
  // Only preload assets that actually exist in public/ or built assets
  const criticalImages = [
    '/images/company-logo.png'
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = src
    link.as = 'image'
    document.head.appendChild(link)
  })
}

// Optimize images
export const optimizeImages = () => {
  if (typeof window === 'undefined') return

  const images = document.querySelectorAll('img')
  images.forEach(img => {
    // Add loading="lazy" for non-critical images
    if (!img.classList.contains('critical')) {
      img.loading = 'lazy'
    }
    
    // Add proper alt text if missing
    if (!img.alt) {
      img.alt = 'Alif View Media'
    }
  })
}

// Initialize all performance optimizations
export const initPerformanceOptimizations = () => {
  measurePerformance()
  lazyLoadImages()
  preloadCriticalResources()
  optimizeImages()
}
