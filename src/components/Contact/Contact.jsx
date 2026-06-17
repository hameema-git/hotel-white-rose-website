import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaGlobe,
} from 'react-icons/fa'
import { HOTEL, WHATSAPP_MESSAGE } from '../../data/hotelData'
import './Contact.css'
import image from "../../assets/images/img1.webp";

const CONTACT_ITEMS = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: HOTEL.phone,
    href: `tel:${HOTEL.phone}`,
  },
   {
    icon: FaPhone,
    label: 'Mobile',
    value: HOTEL.mobile,
    href: 'tel:+919847250270',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'Chat & Book Instantly',
    href: `https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`,
    highlight: true,
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: HOTEL.email,
    href: `mailto:${HOTEL.email}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    value: HOTEL.address,
    href: 'https://maps.google.com/?q=Fort+Kochi,Kerala',
  },
  {
    icon: FaClock,
    label: 'Check-in / Check-out',
    value: 'Check-in: 11:30 AM · Check-out: 11:00 AM',
  },
  {
    icon: FaGlobe,
    label: 'Website',
    value: 'hotelwhiterose.in',
    href: HOTEL.website,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="contact-section section-pad" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-heading">Contact Hotel White Rose</h2>
          <p className="contact-intro">
            We respond fastest on WhatsApp. Reach out for room availability,
            rates, travel tips, or any assistance.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-cards">
              {CONTACT_ITEMS.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <div className={`contact-card ${item.highlight ? 'contact-card--whatsapp' : ''}`}>
                    <div className="contact-card-icon">
                      <Icon />
                    </div>
                    <div className="contact-card-text">
                      <span className="contact-card-label">{item.label}</span>
                      <span className="contact-card-value">{item.value}</span>
                    </div>
                  </div>
                )
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        style={{ textDecoration: 'none' }}
                      >
                        {inner}
                      </a>
                    ) : inner}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* WhatsApp CTA panel */}
          <motion.div
            className="contact-cta-panel"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="cta-panel-inner">
              <span className="cta-eyebrow">Instant Booking</span>
              <h3 className="cta-heading">Book Your Stay<br /><em>on WhatsApp</em></h3>
              <p className="cta-body">
                The fastest way to confirm your room at Hotel White Rose.
                We typically respond within minutes during business hours.
              </p>
              <ul className="cta-checklist">
                {[
                  'Instant room availability check',
                  'Best rate guaranteed',
                  'Personalised assistance',
                  'No booking fees',
                ].map((pt) => (
                  <li key={pt}>
                    <span className="cta-check">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-wa-btn"
              >
                <FaWhatsapp size={20} />
                Open WhatsApp
              </a>
              <p className="cta-note">Available 7 AM – 10 PM · No charges to message</p>
            </div>

            {/* Decorative image */}
            <div className="cta-deco-image">
              {/* <img
                src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80"
                alt="Fort Kochi evening waterfront"
                loading="lazy"
              /> */}
              <img src={image} alt="Hotel White Rose" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
