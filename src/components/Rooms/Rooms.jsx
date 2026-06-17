import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheck, FaWhatsapp } from 'react-icons/fa'
import { ROOMS, HOTEL, WHATSAPP_MESSAGE } from '../../data/hotelData'
import './Rooms.css'

export default function Rooms() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="rooms" className="rooms-section section-pad" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Accommodation</span>
          <h2 className="section-heading">Our Rooms & Suites</h2>
          <p className="rooms-intro">
            Each room is thoughtfully appointed to offer comfort, privacy, and the quiet warmth of
            Kerala hospitality — at rates that respect your budget.
          </p>
        </div>

        <div className="rooms-grid">
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.id}
              className="room-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Image */}
              <div className="room-img-wrap">
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  loading="lazy"
                />
                <div className="room-count-badge">
                  {room.count} {room.count === 1 ? 'Room' : 'Rooms'}
                </div>
              </div>

              {/* Body */}
              <div className="room-body">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-desc">{room.description}</p>

                <ul className="room-features">
                  {room.features.map((f) => (
                    <li key={f}>
                      <FaCheck className="feature-check" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(
                    `Hello! I am interested in booking the ${room.name} at Hotel White Rose, Fort Kochi. Please share availability and rates.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="room-cta btn-rose-primary"
                >
                  <FaWhatsapp />
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="rooms-bottom-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p>Not sure which room to choose? We'll help you pick the perfect option.</p>
          <a
            href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-rose-green"
          >
            <FaWhatsapp />
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
