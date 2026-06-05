export const preloadImage = (href: string, type = 'image/webp') => {
  if (document.querySelector(`link[rel="preload"][href="${href}"]`)) {
    return () => {}
  }

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.type = type
  link.href = href
  document.head.appendChild(link)

  return () => link.remove()
}

/** Decode into browser cache so route change paints instantly */
export const warmImageCache = (...sources: string[]) => {
  sources.forEach((src) => {
    preloadImage(src)
    const img = new Image()
    img.src = src
  })
}
