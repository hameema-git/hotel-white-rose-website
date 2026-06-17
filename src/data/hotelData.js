// ============================================
// Hotel White Rose — Static Data
// ============================================
import gallery1 from "../assets/images/gallery21.jpg";
import gallery2 from "../assets/images/gallery13.webp";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery23.jpg";
import gallery9 from "../assets/images/gallery24.jpg";
import gallery10 from "../assets/images/gallery25.jpg";
import gallery11 from "../assets/images/hotel3.jpg";
import gallery12 from "../assets/images/gallery12.webp";
import gallery13 from "../assets/images/dinning.jpg";
import gallery14 from "../assets/images/gallery2.jpg";
import gallery15 from "../assets/images/gallery26.jpeg";
import doubleRoom from "../assets/images/Double room.jpeg";
import twinRoom from "../assets/images/Twin room.jpeg";
import singleRoom from "../assets/images/single room.webp";
import tripleRoom from "../assets/images/Triple room.jpeg";


export const GALLERY_IMAGES = [
  { src: gallery8, alt: "Hotel White Rose", span: "wide" },
  { src: gallery9, alt: "Hotel White Rose", span: "wide" },
  { src: gallery10, alt: "Hotel White Rose", span: "wide" },
  { src: gallery11, alt: "Wooden Staircase and Reception Area", span: "wide" },
  { src: gallery12, alt: "Roof Top Dinning Area", span: "wide" },
  { src: gallery13, alt: "Roof Top Dinning Area Night View", span: "wide" },
  { src: gallery1, alt: "Traditional Kerala Heritage", span: "tall" },
  { src: gallery2, alt: "Traditional Kerala Heritage", span: "normal" },
  { src: gallery3, alt: "Elegant Hotel Lobby", span: "normal" },
  { src: gallery4, alt: "Hotel Corridor", span: "tall" },
  { src: gallery14, alt: "Hotel Corridor", span: "tall" },
  { src: gallery5, alt: "Hotel Corridor", span: "normal" },
  { src: gallery15, alt: "Hotel White Rose", span: "wide" },
  { src: gallery6, alt: "Traditional Kerala Architecture", span: "wide" },
  { src: gallery7, alt: "Hotel White Rose Night View", span: "wide" },
];
export const HOTEL = {
  name: 'Hotel White Rose',
  tagline: 'Heritage Comfort in the Heart of Fort Kochi',
  since: 2006,
  location: 'Fort Kochi, Kerala, India',
  address: 'Hotel White Rose, Fort Nagar, Fort Kochi, Kerala, India - 682001.',
  phone: ' 0484 2216263',
  whatsapp: '919847250270',
  email: 'hotelwhiterose@gmail.com',
  website: 'https://hotelwhiterose.in',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2!2d76.2425!3d9.9639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087668dde4e88b%3A0x1f3f6a9d5a3b7c2d!2sFort+Kochi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',

     googleMapsLink:
    "https://www.google.com/maps/place/Hotel+White+Rose/@9.9663563,76.2419901,16z/data=!3m1!4b1!4m9!3m8!1s0x3b086d3429c41e35:0x322ad193571090fd!5m2!4m1!1i2!8m2!3d9.966351!4d76.244565!16s%2Fg%2F1pp2wz9dg",
  socialLinks: {
    facebook: 'https://facebook.com/hotelwhiterose',
    instagram: 'https://www.instagram.com/whiterose_fortkochi?igsh=MTZrcm5vYm95cjN3OA==',
    tripadvisor: 'https://www.tripadvisor.in/HotelHighlight-g297633-d1019829-Reviews-Hotel_White_Rose-Kochi_Cochin_Ernakulam_District_Kerala.html',
  },
}

export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello Hotel White Rose! I would like to enquire about room availability and rates. Please assist me.'
)

export const ROOMS = [
  {
    id: 'deluxe-double',
    name: 'Double Room',
    count: 5,
    description:
"Spacious and elegantly appointed, our Deluxe Double rooms offer a serene retreat after a day exploring Fort Kochi's storied lanes. Featuring a plush double bed, warm Kerala-inspired décor, and modern amenities.",
    features: ['Double Bed', 'Air Conditioning','Free WiFi', 'Hot Water', 'Safe Locker'],
    // image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    image: doubleRoom,
    imageAlt: 'Deluxe Double Room at Hotel White Rose Fort Kochi',
  },
  {
    id: 'deluxe-twin',
    name: 'Twin Room',
    count: 5,
    description:
      'Perfect for friends or colleagues travelling together. Two comfortable single beds with ample space, warm lighting, and all the comforts of home in the heart of heritage Fort Kochi.',
    features: ['Two Single Beds', 'Air Conditioning','Free WiFi', 'Hot Water', 'Room Service','24hr Room Service'],
    // image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
     image: twinRoom,
    imageAlt: 'Deluxe Twin Room at Hotel White Rose Fort Kochi',
  },
  {
    id: 'single-room',
    name: 'Single Room',
    count: 3,
    description:
      'Thoughtfully designed for solo travellers seeking comfort without excess. Compact yet complete, our Single Rooms offer everything you need to rest, refresh and explore Fort Kochi at your own pace.',
    features: ['Single Bed', 'Air Conditioning','Free WiFi', 'Hot Water', '24hr Room Service'],
    // image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800&q=80',
    image :singleRoom,
    imageAlt: 'Single Room at Hotel White Rose Fort Kochi',
  },
  {
    id: 'triple-room',
    name: 'Triple Room',
    count: 1,
    description:
      'Our exclusive Triple Room comfortably accommodates families or groups of three. Generous floor space, three beds, and a warm, home-like atmosphere make it an ideal base for family explorations of Kochi.',
    features: ['Three Beds', 'Air Conditioning','Free WiFi', 'Hot Water', 'Mini Fridge','Extra Space'],
    // image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
    image :tripleRoom,
    imageAlt: 'Triple Room at Hotel White Rose Fort Kochi',
  },
]

export const FACILITIES = [
  { icon: 'wifi', label: 'Free WiFi', desc: 'High-speed internet throughout the property' },
  { icon: 'ac', label: 'Air Conditioned', desc: 'All rooms fully air conditioned' },
  { icon: 'room-service', label: '24hr Room Service', desc: 'Round-the-clock in-room dining' },
  { icon: 'travel', label: 'Travel Desk', desc: 'Tour packages & sightseeing assistance' },
  { icon: 'restaurant', label: 'Restaurant', desc: 'South Indian & multi-cuisine dining' },
  { icon: 'laundry', label: 'Laundry', desc: 'Same-day laundry & pressing service' },
  { icon: 'locker', label: 'Safe Locker', desc: 'Secure in-room valuables storage' },
  { icon: 'doctor', label: 'Doctor on Call', desc: '24-hour medical assistance available' },
  // { icon: 'tv', label: 'Cable TV', desc: 'Multi-channel entertainment' },
  { icon: 'car', label: 'Car Rental', desc: 'Airport transfers & local cab service' },
  { icon: 'hotwater', label: 'Hot Water', desc: 'Round-the-clock hot water supply' },
  { icon: 'money', label: 'Money Exchange', desc: 'Foreign currency exchange facility' },
  { icon: 'ayurvedic', label: 'Ayurvedic Massage', desc: 'Traditional Kerala wellness treatments' },
]

export const NEARBY = [
  {
    name: 'Fort Kochi Binale Venue',
  distance: '10 min walk',
  description: 'Experience the renowned Kochi-Muziris Biennale, India’s largest contemporary art exhibition featuring international artists, heritage venues, and cultural events.',
  icon: '🎨',
},
{
  name: 'Water Metro Terminal',
  distance: '12 min drive',
  description: 'Enjoy Kochi’s modern Water Metro service connecting islands and city destinations through scenic waterfront journeys.',
  icon: '🚢',
},

  {
    
    name: 'Chinese Fishing Nets',
    distance: '2 min walk',
    description: 'Iconic cantilevered fishing nets — Fort Kochi\'s most photographed landmark.',
    icon: '🎣',
  },
  {
    name: 'Fort Kochi Beach',
    distance: '5 min walk',
    description: 'A serene seafront promenade ideal for sunrise and sunset strolls.',
    icon: '🌊',
  },
  {
    name: 'St. Francis Church',
    distance: '8 min walk',
    description: "India's oldest European church, where Vasco da Gama was once buried.",
    icon: '⛪',
  },
  {
    name: 'Santa Cruz Basilica',
    distance: '10 min walk',
    description: 'A magnificent Portuguese-era basilica with stunning pastel interiors.',
    icon: '🏛️',
  },
  {
    name: 'Mattancherry Palace',
    distance: '15 min',
    description: 'The Dutch Palace housing remarkable Kerala murals and royal artefacts.',
    icon: '👑',
  },
  {
    name: 'Jew Town & Spice Market',
    distance: '20 min',
    description: 'Vibrant bazaars filled with Kerala spices, antiques, and curios.',
    icon: '🌶️',
  },
]

export const WHY_CHOOSE = [
  {
    icon: 'location',
    title: 'Prime Fort Kochi Location',
    desc: 'Steps from the Chinese Fishing Nets, Fort Kochi Beach, and heritage churches. Everything is walkable.',
  },
  {
    icon: 'price',
    title: 'Honest, Affordable Pricing',
    desc: 'Premium comfort without inflated resort prices. Experience Kochi heritage without compromise.',
  },
  {
    icon: 'wifi2',
    title: 'Free High-Speed WiFi',
    desc: 'Stay connected throughout your stay with complimentary high-speed internet in all rooms.',
  },
  {
    icon: 'food',
    title: 'In-House Restaurant',
    desc: 'Savour authentic Kerala cuisine and a multi-cuisine menu crafted with local ingredients.',
  },
  {
    icon: 'desk',
    title: 'Travel & Tour Desk',
    desc: 'Our knowledgeable staff help plan your Kerala itinerary — backwaters, spice gardens, and beyond.',
  },
  {
    icon: 'family',
    title: 'Families Welcome',
    desc: 'A warm, safe, and welcoming environment for couples, families, and solo travellers alike.',
  },
]

