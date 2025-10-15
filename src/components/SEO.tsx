import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title = "Alif View Media | Premier Conference Organizer | Corporate Events & Technology Summits",
  description = "Alif View Media is a premier conference organizer delivering exceptional value through landmark summits, corporate conferences, and prestigious awards ceremonies. We craft transformative corporate experiences that inspire, connect, and create lasting impact.",
  keywords = "conference organizer, corporate events, technology summits, awards ceremonies, event management, business conferences, professional networking, innovation events, digital transformation, corporate meetings, executive summits, business awards, event planning, conference management, corporate experiences",
  image = "https://www.alifviewmedia.com/images/company-logo.png",
  url = "https://www.alifviewmedia.com",
  type = "website"
}) => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Alif View Media" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Organization & Website JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Alif View Media',
            url,
            logo: image,
            sameAs: [
              'https://www.linkedin.com/company/alifviewmedia',
              'https://twitter.com/alifviewmedia',
              'https://www.facebook.com/alifviewmedia',
              'https://www.instagram.com/alifviewmedia'
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Alif View Media',
            url
          })
        }}
      />
    </>
  )
}

export default SEO
