import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLeaf, FaStar } from 'react-icons/fa'
import hotelFront3 from "../../assets/images/gallery21.jpg";
import hotelFront4 from "../../assets/images/gallery11.webp";
import './About.css'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.15 } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="about-section section-pad" ref={ref}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Image column */}
          <div className="col-lg-6">
            <motion.div
              className="about-image-block"
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <div className="about-img-main">
                {/* <img
                  src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80"
                  alt="Hotel White Rose Fort Kochi heritage building"
                  loading="lazy"
                /> */}
                {/* <div className="main-image">
                          <img src={hotelFront4} alt="Hotel White Rose" />
                        </div> */}
              </div>
              {/* <div className="about-img-accent">
                <img
                  src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=400&q=80"
                  alt="Fort Kochi Chinese Fishing Nets at sunrise"
                  loading="lazy"
                />
              </div> */}

              <div className="about-img-main">
  <img src={hotelFront4} alt="Hotel White Rose" />
</div>

<div className="about-img-accent">
  <img src={hotelFront3} alt="Hotel White Rose" />
</div>
              {/* Floating badge */}
              <div className="about-badge">
                <span className="badge-year">2006</span>
                <span className="badge-label">Serving Guests</span>
              </div>
            </motion.div>
          </div>

          {/* Text column */}
          <div className="col-lg-6">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-heading">
                A Piece of Heritage,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold-dark)' }}>In the Heart of Fort Kochi</em>
              </h2>

              <div className="ornament">
                <FaLeaf className="ornament-icon" />
              </div>

              <p className="about-body">
                Nestled among the colonial streets and spice-scented lanes of Fort Kochi,
                Hotel White Rose has been a trusted home-away-from-home for travellers since 2006.
                We offer the warmth of Kerala hospitality wrapped in the quiet charm of heritage architecture.
              </p>
              <p className="about-body">
                Whether you are a foreign explorer discovering India's most storied port city,
                a domestic traveller chasing Kochi's vibrant festivals, or a family making memories
                along the Malabar Coast — our doors are open, and our service is personal.
              </p>
              <p className="about-body">
                Comfort, affordability, and genuine care. That is the Hotel White Rose promise.
              </p>

              <div className="about-highlights">
                {[
                  ['14+', 'Comfortable Rooms'],
                  ['13', 'Facilities & Services'],
                  ['100m', 'From Chinese Fishing Nets'],
                ].map(([num, label]) => (
                  <div className="about-highlight-item" key={label}>
                    <span className="highlight-num">{num}</span>
                    <span className="highlight-label">{label}</span>
                  </div>
                ))}
              </div>

              <div className="about-rating">
                <div className="stars">
                  {[1,2,3,4,5].map(i => <FaStar key={i} />)}
                </div>
                <span>"A warm, clean, affordable stay right in the heart of Fort Kochi."</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
