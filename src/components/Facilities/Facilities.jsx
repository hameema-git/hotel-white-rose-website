import { useRef } from 'react'
import facility1 from "../../assets/images/facility.jpg";
import { motion, useInView } from 'framer-motion'
import {
  FaWifi, FaSnowflake, FaConciergeBell, FaMap, FaUtensils,
  FaTshirt, FaLock, FaUserMd, FaTv, FaCar, FaFire, FaMoneyBillWave, FaLeaf,
} from 'react-icons/fa'
import { FACILITIES } from '../../data/hotelData'
import './Facilities.css'

const ICON_MAP = {
  wifi:         FaWifi,
  ac:           FaSnowflake,
  'room-service': FaConciergeBell,
  travel:       FaMap,
  restaurant:   FaUtensils,
  laundry:      FaTshirt,
  locker:       FaLock,
  doctor:       FaUserMd,
  tv:           FaTv,
  car:          FaCar,
  hotwater:     FaFire,
  money:        FaMoneyBillWave,
  ayurvedic:    FaLeaf,
}

export default function Facilities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="facilities" className="facilities-section section-pad" ref={ref}>
      {/* Decorative top border */}
      <div className="facilities-top-deco" />

      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-heading">Hotel Facilities & Services</h2>
          <p className="facilities-intro">
            Everything you need for a comfortable and memorable stay in Fort Kochi.
          </p>
        </div>

        <div className="facilities-grid">
          {FACILITIES.map((fac, i) => {
            const Icon = ICON_MAP[fac.icon] || FaWifi
            return (
              <motion.div
                key={fac.icon}
                className="fac-item"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="fac-icon">
                  <Icon />
                </div>
                <div className="fac-text">
                  <span className="fac-label">{fac.label}</span>
                  <span className="fac-desc">{fac.desc}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Kerala texture band */}
        <motion.div
          className="facilities-band"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="band-text">
            <span className="band-eyebrow">Kerala Heritage</span>
            <h3>Authentic Ayurvedic Wellness</h3>
            <p>
              Experience traditional Kerala Ayurvedic massage and wellness treatments arranged
              through our in-house travel desk. Rejuvenate mind, body, and spirit in the land
              that gave Ayurveda to the world.
            </p>
          </div>
          <div className="band-image">
            {/* <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80"
              alt="Ayurvedic massage Kerala wellness treatment"
              loading="lazy"
            /> */}

            <img src={facility1} alt="Hotel White Rose" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
