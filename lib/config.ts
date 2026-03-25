export const SITE_CONFIG = {
  name: 'AROEHAN',
  tagline: 'Empowering Tribal & Rural Communities',
  description:
    'AROEHAN is a leading NGO in India working with tribal and rural communities in Palghar district. We focus on education, health, livelihood, water conservation, and community empowerment.',
  url: 'https://aroehan.org',
  email: 'contact@aroehan.org',
  phone: '+91 25202 99245',
  address: 'Bungalow No 7, Suriya Nagri Society, House No: 933, Kankradi Road, Dahanu Road – 401602',
  social: {
    linkedin: 'https://www.linkedin.com/company/wearoehan',
    facebook: 'https://www.facebook.com/wearoehan',
    youtube:  'https://www.youtube.com/channel/UCSC5dfxxMp9wleeVDxukIXg',
    instagram: 'https://www.instagram.com/we_aroehan/',
    twitter: 'https://twitter.com/WeAroehan',
  },
  keywords: [
    'NGO in India',
    'rural development NGO',
    'CSR partnership India',
    'donate NGO India',
    'volunteer NGO India',
    'tribal community NGO',
    'Palghar NGO',
    'Maharashtra NGO',
  ],
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Story',
    href: '#',
    children: [
      { label: 'About Us',     href: '/about' },
      { label: 'Trustee Board', href: '/about#trustee' },
      { label: 'Core Team',    href: '/about#team' },
    ],
  },
  {
    label: 'Our Work',
    href: '/our-work',
    children: [
      { label: 'Portfolio',    href: '/our-work' },
      { label: 'Photo Gallery', href: '/our-work#gallery' },
      { label: 'Video Gallery', href: '/our-work#videos' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Reports',         href: '/resources#reports' },
      { label: 'Blog / Stories',  href: '/resources#blog' },
      { label: 'News',            href: '/resources#news' },
      { label: 'Events',          href: '/resources#events' },
    ],
  },
  { label: 'Opportunity', href: '/opportunity' },
  { label: 'Contact',     href: '/contact' },
];

export const CAUSES = [
  {
    category: 'Water & Thirst',
    icon: '💧',
    items: [
      { label: 'Check Dam',  price: '₹16–20 Lakhs' },
      { label: 'Well',       price: '₹8–12 Lakhs' },
    ],
  },
  {
    category: 'Livelihood',
    icon: '🌾',
    items: [
      { label: 'Rice Mill for 1 SHG',         price: '₹90,000' },
      { label: 'Backyard Poultry for 1 SHG',  price: '₹50,000' },
    ],
  },
  {
    category: 'Agriculture',
    icon: '🌿',
    items: [
      { label: 'Fruit Orchard for 1 Farmer',  price: '₹15,000' },
      { label: '200 Jasmine Saplings',         price: '₹3,500' },
      { label: 'Lift Irrigation',              price: '₹8–12 Lakhs' },
      { label: 'Agriculture Supplies Kit',     price: '₹8,000' },
    ],
  },
  {
    category: 'Health & Nutrition',
    icon: '❤️',
    items: [
      { label: '1 Kitchen Garden / Household', price: '₹500–700' },
      { label: '1 ASHA Kit',                   price: '₹20,000' },
    ],
  },
  {
    category: 'Sanitation',
    icon: '🏠',
    items: [
      { label: '1 Toilet Block with Twin Pit', price: '₹35,000' },
    ],
  },
];

export const WORK_AREAS = [
  { title: 'Education',             icon: '📚', desc: 'Holistic development of children through quality education and skill-building programs.' },
  { title: 'Health & Nutrition',    icon: '🏥', desc: 'Improving community health through awareness, screening, and primary healthcare support.' },
  { title: 'Water Conservation',    icon: '💧', desc: 'Building check dams, wells, and rainwater harvesting structures to reduce water scarcity.' },
  { title: 'Livelihood',            icon: '🌾', desc: 'Empowering farmers and women through SHGs, better agriculture, and allied livelihoods.' },
  { title: 'Women Empowerment',     icon: '👩', desc: 'Strengthening tribal women through self-help groups, training, and leadership development.' },
  { title: 'Community Governance',  icon: '🏛️', desc: 'Building local governance capacity and accountability through community participation.' },
];
