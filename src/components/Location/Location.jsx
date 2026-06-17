import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaWalking, FaCar } from 'react-icons/fa'
import { HOTEL, NEARBY } from '../../data/hotelData'
import './Location.css'

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="location" className="location-section section-pad" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Getting Here</span>
          <h2 className="section-heading">Our Location in Fort Kochi</h2>
          <p className="location-intro">
            Positioned in the heart of heritage Fort Kochi, within walking distance of all
            the iconic landmarks that make this district unforgettable.
          </p>
        </div>

        <div className="location-layout">
          {/* Map */}
          <motion.div
            className="location-map"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="map-frame">
              <iframe
                title="Hotel White Rose Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.220446969635!2d76.244565!3d9.966351000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d3429c41e35%3A0x322ad193571090fd!2sHotel%20White%20Rose!5e0!3m2!1sen!2sin!
              !5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              
            </div>
            <div className="map-address-card">
              <FaMapMarkerAlt className="addr-icon" />
              <div>
                <strong>Hotel White Rose</strong>
                <span>{HOTEL.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Nearby attractions */}
          <motion.div
            className="location-nearby"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <h3 className="nearby-heading">Nearby Attractions</h3>
            <ul className="nearby-list">
              {NEARBY.map((place, i) => (
                <motion.li
                  key={place.name}
                  className="nearby-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <span className="nearby-emoji">{place.icon}</span>
                  <div className="nearby-info">
                    <div className="nearby-top">
                      <strong className="nearby-name">{place.name}</strong>
                      <span className="nearby-dist">
                        {place.distance.includes('min walk') ? (
                          <><FaWalking />&nbsp;{place.distance}</>
                        ) : (
                          <><FaCar />&nbsp;{place.distance}</>
                        )}
                      </span>
                    </div>
                    <p className="nearby-desc">{place.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="directions-cta">
              {/* <a
                href="https://maps.google.com/?q=Fort+Kochi,Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose-green"
              >
                <FaMapMarkerAlt />
                Get Directions
              </a> */}

              <a
  href={HOTEL.googleMapsLink}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-rose-green"
>
  <FaMapMarkerAlt />
  View Hotel on Google Maps
</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
