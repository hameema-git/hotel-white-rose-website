import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaMapMarkerAlt, FaTag, FaWifi, FaUtensils, FaConciergeBell, FaUsers,
} from 'react-icons/fa'
import { WHY_CHOOSE } from '../../data/hotelData'
import './WhyChooseUs.css'

const ICONS = {
  location: FaMapMarkerAlt,
  price: FaTag,
  wifi2: FaWifi,
  food: FaUtensils,
  desk: FaConciergeBell,
  family: FaUsers,
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="why-section section-pad" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow">Why Stay With Us</span>
          <h2 className="section-heading">The White Rose Difference</h2>
          <p className="why-intro">
            Fort Kochi has many hotels. Here is why guests return to White Rose.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon] || FaConciergeBell
            return (
              <motion.div
                key={item.icon}
                className="why-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="why-icon-wrap">
                  <Icon />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
