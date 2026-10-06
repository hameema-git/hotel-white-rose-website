import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaTripadvisor } from 'react-icons/fa'
import './Testimonials.css'

const REVIEWS = [
  {
    id: 1,
    name: 'Seaside06080261652',
    avatar: 'S',
    date: 'September 2026',
    rating: 5,
    text: 'Value for money. Very very accommodating. Safe for women solo travelers. Also in the heart of the city so makes it safe.',
    tags: ['Solo Traveller', 'Value for Money'],
  },
  {
    id: 2,
    name: 'Resort14689087066',
    avatar: 'R',
    date: 'September 2026',
    rating: 5,
    text: 'Nice room, prime location, silent area, staff are good.',
    tags: ['Prime Location', 'Great Staff'],
  },
  {
    id: 3,
    name: 'Meander60440024746',
    avatar: 'M',
    date: 'September 2026',
    rating: 5,
    text: 'Host was extremely understanding and helpful. Fully recommend coming here.',
    tags: ['Helpful Host', 'Recommended'],
  },
  {
    id: 4,
    name: 'Sightseer33404954209',
    avatar: 'S',
    date: 'February 2026',
    rating: 5,
    text: 'Amazing place, quite affordable and hygienic.',
    tags: ['Affordable', 'Clean & Hygienic'],
  },
  {
    id: 5,
    name: 'GoPlaces35120800239',
    avatar: 'G',
    date: 'February 2026',
    rating: 5,
    text: 'Very nice room and good services also.',
    tags: ['Comfortable Rooms', 'Good Service'],
  },
]

function StarRating({ count = 5 }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className={i < count ? 'star-filled' : 'star-empty'} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef(null)

  const go = (idx) => {
    setDirection(idx > active ? 1 : -1)
    setActive(idx)
  }

  const prev = () => go((active - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => go((active + 1) % REVIEWS.length)

  // Auto-advance every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length)
      setDirection(1)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  // Reset timer on manual navigation
  const handleNav = (fn) => {
    clearInterval(timerRef.current)
    fn()
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length)
      setDirection(1)
    }, 5000)
  }

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: 'easeOut' } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.3 } }),
  }

  const review = REVIEWS[active]

  return (
    <section id="testimonials" className="testimonials-section section-pad" ref={ref}>
      <div className="container">

        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">What Our Guests Say</span>
          <h2 className="section-heading">Trusted by Travellers</h2>
          <div className="tripadvisor-badge">
            <FaTripadvisor className="ta-icon" />
            <span>Verified reviews from TripAdvisor</span>
          </div>
        </motion.div>

        {/* Overall rating summary */}
        <motion.div
          className="rating-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rating-big">5.0</div>
          <div className="rating-detail">
            <StarRating count={5} />
            <span className="rating-count">{REVIEWS.length} reviews on TripAdvisor</span>
          </div>
          <div className="rating-divider" />
          <div className="rating-tags">
            {['Prime Location', 'Affordable', 'Friendly Staff', 'Clean Rooms', 'Safe'].map((tag) => (
              <span key={tag} className="rating-tag">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          className="testimonial-carousel"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* Quote mark decoration */}
          <div className="quote-deco">
            <FaQuoteLeft />
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={review.id}
              className="testimonial-card"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Avatar + name */}
              <div className="reviewer-header">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="reviewer-date">{review.date}</span>
                </div>
                <div className="reviewer-rating">
                  <StarRating count={review.rating} />
                </div>
              </div>

              {/* Review text */}
              <p className="review-text">"{review.text}"</p>

              {/* Tags */}
              <div className="review-tags">
                {review.tags.map((tag) => (
                  <span key={tag} className="review-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={() => handleNav(prev)}
              aria-label="Previous review"
            >
              <FaChevronLeft />
            </button>

            <div className="carousel-dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === active ? 'active' : ''}`}
                  onClick={() => handleNav(() => go(i))}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="carousel-btn"
              onClick={() => handleNav(next)}
              aria-label="Next review"
            >
              <FaChevronRight />
            </button>
          </div>
        </motion.div>

        {/* Mini cards row - all reviews at a glance */}
        <div className="mini-reviews-row">
          {REVIEWS.map((r, i) => (
            <motion.button
              key={r.id}
              className={`mini-review-card ${i === active ? 'active' : ''}`}
              onClick={() => handleNav(() => go(i))}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.07 }}
            >
              <div className="mini-avatar">{r.avatar}</div>
              <div className="mini-info">
                <StarRating count={r.rating} />
                <span className="mini-date">{r.date}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* TripAdvisor CTA */}
        <motion.div
          className="ta-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            href="https://www.tripadvisor.in/Hotel_Review-Fort_Kochi"
            target="_blank"
            rel="noopener noreferrer"
            className="ta-cta-btn"
          >
            <FaTripadvisor />
            Read All Reviews on TripAdvisor
          </a>
        </motion.div>

      </div>
    </section>
  )
}
