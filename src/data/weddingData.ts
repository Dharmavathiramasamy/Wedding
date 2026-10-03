// Central configuration object — edit all wedding details here.
import couplePhoto from '../assets/couple1.jpeg';
import couple1 from '../assets/image.png';
import couple2 from '../assets/couple2.jpeg';
import couple3 from '../assets/couple3.jpeg';
import couple4 from '../assets/couple4.jpeg';
import couple5 from '../assets/couple5.jpeg';
import couple6 from '../assets/couple6.jpeg';
import couple7 from '../assets/couple7.jpeg';
import couple8 from '../assets/couple8.jpeg';
import couple9 from '../assets/couple9.jpeg';
export interface StoryEntry {
  date: string;
  title: string;
  description: string;
  icon: string;
}

export interface EventDetail {
  name: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  icon: string;
  dressCode: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const weddingData = {
  couple: {
    groomShort: 'Purushothaman',
    brideShort: 'Jansi',
    groomFull: 'Purushothaman Ramasamy',
    brideFull: 'Jansi Elangovan',
    tagline: 'Together with their families, invite you to celebrate their union',
    hashtag: '#PurushothamanWedsJansi',
  },
  wedding: {
    date: '2026-11-11T08:00:00',
    dateDisplay: 'November 11, 2026',
    dateShort: '11.11.2026',
    city: 'Paramathi Vellur, Namakkal',
    daysText: 'Days Until Forever',
  },
  hero: {
    couplePhoto,
    subtext: 'Two souls, one journey — we invite you to witness the beginning of our forever',
  },
  story: [
    {
      date: '2026',
      title: 'The First Meeting',
     description: 'Their first meeting happened at the Murugan Temple. A simple moment that marked the beginning of their beautiful journey together.',
     icon: 'temple',
    },
    {
      date: '2026',
      title: 'Falling in Love',
      description: 'Through late-night calls, weekend treks, and countless sunsets, what started as friendship blossomed into something deep and lasting.',
      icon: 'heart',
    },
    {
      date: '2026',
      title: 'The Proposal',
      description: 'Their engagement marked a beautiful new chapter in their journey together, surrounded by the love and blessings of their families.',
      icon: 'ring',
    },
    {
      date: '2026',
      title: 'Forever Begins',
      description: 'Surrounded by family and friends in the city of lakes, we begin our greatest adventure — a lifetime of love, laughter, and togetherness.',
      icon: 'infinity',
    },
  ] as StoryEntry[],
events: [
  {
    name: 'Engagement Night',
    type: 'Engagement Celebration',
    date: '10/11/2026',
    time: '9:00 PM',
    venue: 'VSS Mangala Mahal',
    address: 'VSS mangala mahal, 4X28+9QP, Pandamangalam, Tamil Nadu 637208',
    description:
      'An evening filled with love, happiness, and the beautiful beginning of a new chapter as the couple celebrates their engagement with family and friends.',
    icon: 'ring',
    dressCode: 'Traditional / Festive Attire',
  },

  {
    name: 'Marriage Ceremony',
    type: 'Sacred Wedding',
    date: '11/11/2026',
    time: '4:30 AM',
    venue: 'Arulmigu Prasanna Venkatramanaswamy Temple',
    address:
      'Pandamangalam Village, Paramathi Velur Taluk, Namakkal District, Tamil Nadu',
    description:
      'With the blessings of the divine and their families, the couple will begin their journey together in a sacred wedding ceremony at the temple.',
    icon: 'temple',
    dressCode: 'Traditional Indian Attire',
  },

  {
    name: 'Reception',
    type: 'Wedding Celebration',
    date: '12/11/2026',
    time: '11:00 AM - 2:00 PM',
    venue: 'JAS Party Hall',
    address: 'Gobinathampatti, Harur, Dharmapuri, Tamil Nadu',
    description:
      'Join the couple, along with their family and friends, for a joyful celebration filled with love, laughter, blessings, and togetherness.',
    icon: 'sparkles',
    dressCode: 'Traditional / Festive Attire',
  },
] as EventDetail[],
gallery: [
  {
    src: couple1,
    alt: 'Couple in traditional wedding attire',
  },
  {
    src: couple2,
    alt: 'Couple embracing',
  },
  {
    src: couple3,
    alt: 'Wedding ceremony',
  },
  {
    src: couple4,
    alt: 'Couple in traditional attire',
  },
  {
    src: couple5,
    alt: 'Bride and groom',
  },
  {
    src: couple6,
    alt: 'Couple with floral garlands',
  },
  {
    src: couple7,
    alt: 'Wedding ceremony',
  },
  {
    src: couple8,
    alt: 'Couple celebrating',
  },
  {
    src: couple9,
    alt: 'Wedding celebration',
  },
  
] as GalleryImage[],
  venue: {
    name: 'VSS Mangala Mahal',
    address: 'VSS mangala mahal, 4X28+9QP, Pandamangalam, Tamil Nadu 637208',
    mapsUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=77.96%2C11.09%2C77.98%2C11.11&layer=mapnik&marker=11.1009737%2C77.9669576',
    mapsLink:
      'https://www.google.com/maps/dir/?api=1&destination=11.1028383,77.965299&travelmode=driving&dir_action=navigate',
    description: 'Nestled on the shores of Lake Pichola, The Leela Palace Udaipur offers a breathtaking backdrop of the Aravalli Mountains and the shimmering lake — the perfect setting for our celebration.',
    highlights: [
      'Grand ballroom and garden spaces',
      'Valet parking available for all guests',
    ],
    
  },
  rsvp: {
    whatsappNumber: '9344418426',
    whatsappMessage: 'Hello! I would like to RSVP for Purushothaman & Jansi\'s wedding.',
    email: 'dharmavathiramasamy@gmail.com',
    deadline: 'November 11, 2026',
  },
  message: {
    quote: 'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.',
    author: 'Maya Angelou',
    body: 'We are deeply grateful for your presence in our lives and would be honored to have you join us as we take this sacred step together. Your blessings mean the world to us, and we cannot wait to celebrate this joyous occasion surrounded by the people we love most.',
  },
  music: {
    // Using a royalty-free instrumental track URL
    src: 'https://cdn.pixabay.com/audio/2022/10/18/audio_34501665c2.mp3',
    title: 'Shehnai Melody',
  },
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'Story', href: '#story' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Venue', href: '#venue' },
    { label: 'RSVP', href: '#rsvp' },
  ],
};

export type WeddingData = typeof weddingData;
