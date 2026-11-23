import { EVENTS, SITE, SOCIALS } from '../data'

// Structured data (JSON-LD) so search engines understand the organisation and its events.
export default function Schema() {
  const graph = [
    {
      '@type': ['NGO', 'Organization'],
      '@id': `${SITE.url}/#org`,
      name: SITE.name,
      url: `${SITE.url}/`,
      logo: `${SITE.url}/icon-512.png`,
      image: `${SITE.url}/og-image.jpg`,
      description:
        'Anchor Foundation empowers communities in Kenya through youth sports, worship, children’s home visits, free health camps, mentorship and tree planting.',
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: { '@type': 'Country', name: 'Kenya' },
      address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' },
      sameAs: SOCIALS.map((s) => s.url),
      contactPoint: [{ '@type': 'ContactPoint', telephone: SITE.phone, email: SITE.email, contactType: 'customer support', areaServed: 'KE', availableLanguage: ['en', 'sw'] }],
    },
    { '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, publisher: { '@id': `${SITE.url}/#org` }, inLanguage: 'en-KE' },
    ...EVENTS.map((e) => ({
      '@type': 'Event',
      name: e.title,
      startDate: e.start,
      endDate: e.end,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: { '@type': 'Place', name: e.venue, address: { '@type': 'PostalAddress', addressCountry: 'KE' } },
      organizer: { '@id': `${SITE.url}/#org` },
      isAccessibleForFree: true,
      image: `${SITE.url}/og-image.jpg`,
      description: `${e.title} hosted by Anchor Foundation at ${e.venue}.`,
    })),
  ]
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />
}
