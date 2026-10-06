

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand } from 'react-icons/fa'
import { GALLERY_IMAGES } from '../../data/hotelData'
import './Gallery.css'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  // const [lightbox, setLightbox] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(null)

  const nextImage = () => {
  setCurrentIndex((prev) =>
    prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
  )
}

const prevImage = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
  )
}
  return (
    <section id="gallery" className="gallery-section section-pad" ref={ref}>
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="section-eyebrow">Visual Journey</span>

          <h2 className="section-heading">
            Explore Hotel White Rose
          </h2>

          <p className="gallery-intro">
            Discover our heritage interiors, elegant spaces,
            traditional Kerala architecture, comfortable rooms,
            and the timeless charm that makes Hotel White Rose
            a favourite stay in Fort Kochi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className={`gallery-item gallery-item--${img.span}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              // onClick={() => setLightbox(img)}
              onClick={() => setCurrentIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />

              <div className="gallery-overlay">
                <FaExpand className="gallery-expand-icon" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {/* {lightbox && ( */}

        {currentIndex !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* <img
                src={lightbox.src}
                alt={lightbox.alt}
              />

              <p className="lightbox-caption">
                {lightbox.alt}
              </p> */}

<button
  className="lightbox-arrow left"
  onClick={prevImage}
>
  ❮
</button>

<button
  className="lightbox-arrow right"
  onClick={nextImage}
>
  ❯
</button>

              <img
  src={GALLERY_IMAGES[currentIndex].src}
  alt={GALLERY_IMAGES[currentIndex].alt}
/>

<p className="lightbox-caption">
  {GALLERY_IMAGES[currentIndex].alt}
</p>

              <button
                className="lightbox-close"
                // onClick={() => setLightbox(null)}
                onClick={() => setCurrentIndex(null)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}