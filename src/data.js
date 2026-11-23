// All editable site content lives here. Change text, dates, links in this one file.

export const SITE = {
  name: 'Anchor Foundation',
  url: typeof __SITE_URL__ !== 'undefined' ? __SITE_URL__ : 'https://anchorfoundation.co.ke',
  email: 'info@anchorfoundation.co.ke',
  phone: '+254 741 973 192',
  phoneHref: 'tel:+254741973192',
  whatsapp: 'https://wa.me/254741973192',
  address: 'Nairobi, Kenya',
  till: '4455474',
}

export const SOCIALS = [
  { key: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/share/1AvmGt3rw9/' },
  { key: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/_anchorfoundation?igsh=MTI1YXJ0amp5OXJjZQ==' },
  { key: 'tiktok', name: 'TikTok', url: 'https://vm.tiktok.com/ZS9ew3DeFtEEh-fKOs4/' },
  { key: 'youtube', name: 'YouTube', url: 'https://youtube.com/@anchortv_254?si=nLRcUz6Nrbiwu8wM' },
]

export const NAV = [
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
]

export const PILLARS = [
  { title: 'Mindset', text: 'Shifting how people see themselves and their future, through faith, mentorship and encouragement.' },
  { title: 'Equipping', text: 'Giving young people and families the skills, support and resources they need to move forward.' },
  { title: 'Empowerment', text: 'Creating opportunities so every person can reach their full potential and give back.' },
]

export const MISSION =
  'To empower and uplift our community through collaborative efforts, equitable opportunities and sustainable initiatives, fostering a culture of education, inclusion and social justice.'
export const VISION =
  'To create a thriving and inclusive community where every individual has the opportunity to reach their full potential and contribute positively to society.'

export const VALUES = [
  { title: 'Community centered', text: 'Every programme starts with the people we serve.' },
  { title: 'Equity and justice', text: 'Fair opportunities for everyone, whatever their background.' },
  { title: 'Integrity and transparency', text: 'Honest, open and accountable in all that we do.' },
  { title: 'Empowerment through education', text: 'Knowledge and mentorship that change life stories.' },
]

export const ACTIVITIES = [
  { when: 'Every Thursday', title: 'Gathering of Anchors', text: 'Our weekly gathering of worship and fellowship, 9:00 – 10:00 pm.' },
  { when: 'League season', title: 'Anchor FC', text: 'Follow our league fixtures on Facebook, Instagram and TikTok (Anchor Foundation).' },
  { when: 'Throughout the year', title: 'Free health camps', text: 'Free diagnosis and health consultations for the community.' },
  { when: 'Annually', title: "Children's home visits", text: 'We visit a children’s home each year in any of Kenya’s 47 counties. Need our help? Contact us.' },
  { when: '10th October', title: 'Anchor Ride Day', text: 'Our annual cycling event bringing the community together.' },
  { when: 'School terms', title: 'Mentorship', text: 'Mentorship programmes in primary schools, high schools and campuses.' },
  { when: 'Second Sunday of December', title: 'Thanksgiving', text: 'A day of gratitude, worship and celebration with the Anchor family.' },
  { when: 'Planting seasons', title: 'Tree planting', text: 'Planting and donating trees to schools, churches and communities.' },
]

// Programmes. `folder` selects the photo folder under src/assets/programs (or `files` for loose images).
export const PROGRAMS = [
  { id: 'sports', icon: 'trophy', title: 'Sporty Events', folder: 'sports', description: 'Empowering the youth through sports, teamwork and discipline — home of Anchor FC.' },
  { id: 'worship', icon: 'church', title: 'Worship Concerts', folder: 'worship', description: 'Building faith and community through music, worship and the Gathering of Anchors.' },
  { id: 'homevisit', icon: 'house', title: "Children's Home Visits", folder: 'homevisit', description: 'Bringing love, meals, care and mentorship to children in need.' },
  { id: 'trees', icon: 'tree', title: 'Tree Planting', folder: 'treeplanting', description: 'Planting trees in schools, churches and neighbourhoods for a greener Kenya.' },
  { id: 'health', icon: 'health', title: 'Free Health Camps', files: ['medical1', 'medical2'], description: 'Free blood pressure, weight and sugar checks and consultations for the community.' },
  { id: 'sign', icon: 'hand', title: 'Sign Language Classes', files: ['signlanguage1'], description: 'Free classes open to both the hearing and the deaf, building an inclusive community.' },
]

// 24-hour local (Kenya, EAT = UTC+3) start times.
export const EVENTS = [
  { start: '2026-04-24T21:00:00+03:00', end: '2026-04-25T04:00:00+03:00', displayDate: '24 Apr 2026', title: 'Gathering of Anchors – Worship Night', venue: 'GPF Thiba', time: '9:00 PM – 4:00 AM' },
  { start: '2026-06-01T09:00:00+03:00', end: '2026-06-01T17:00:00+03:00', displayDate: '1 Jun 2026', title: 'Environmental Day', venue: 'Community Outreach', time: 'All day' },
  { start: '2026-08-09T10:00:00+03:00', end: '2026-08-09T15:00:00+03:00', displayDate: '9 Aug 2026', title: 'Children’s Home Outreach', venue: 'Nyeri Town', time: '10:00 AM – 3:00 PM' },
  { start: '2026-10-10T08:00:00+03:00', end: '2026-10-10T14:00:00+03:00', displayDate: '10 Oct 2026', title: 'Anchor Ride Day', venue: 'Ngurubani', time: '8:00 AM – 2:00 PM' },
  { start: '2026-12-13T09:00:00+03:00', end: '2026-12-13T13:00:00+03:00', displayDate: '13 Dec 2026', title: 'Anchor Thanksgiving Day', venue: 'UPC Church, Thiba', time: '9:00 AM – 1:00 PM' },
]
