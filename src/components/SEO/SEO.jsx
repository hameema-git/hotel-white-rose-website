import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'Hotel White Rose – Heritage Hotel in Fort Kochi, Kerala',
  description = 'Hotel White Rose is a heritage-style budget hotel in Fort Kochi, Kerala. Comfortable rooms, prime location near Chinese Fishing Nets, affordable rates. Book direct on WhatsApp.',
  canonical = 'https://hotelwhiterose.in',
  image = 'https://hotelwhiterose.in/og-image.jpg',
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Hotel White Rose',
    description,
    url: 'https://hotelwhiterose.in',
    telephone: '+91-98470-00000',
    email: 'info@hotelwhiterose.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Chinese Fishing Nets, Fort Kochi',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      postalCode: '682001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 9.9639,
      longitude: 76.2425,
    },
    starRating: { '@type': 'Rating', ratingValue: '3' },
    priceRange: '₹₹',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Travel Desk', value: true },
    ],
    openingHours: 'Mo-Su 00:00-24:00',
    foundingDate: '2006',
  }

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Keywords — Local SEO */}
      <meta
        name="keywords"
        content="Hotel in Fort Kochi, Budget Hotel Fort Kochi, Affordable Hotel Fort Kochi, Fort Kochi Accommodation, Hotel near Chinese Fishing Nets, Heritage Hotel Kochi, Fort Kochi Stay, Kerala Budget Hotel, Kochi Tourist Hotel, Hotel White Rose"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hotel White Rose" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags */}
      <meta name="geo.region" content="IN-KL" />
      <meta name="geo.placename" content="Fort Kochi, Kerala" />
      <meta name="geo.position" content="9.9639;76.2425" />
      <meta name="ICBM" content="9.9639, 76.2425" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  )
}
