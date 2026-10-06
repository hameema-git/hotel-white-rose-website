import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { HOTEL, WHATSAPP_MESSAGE } from '../../data/hotelData'
import './FloatingWhatsApp.css'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
      // Show tooltip after button appears
      setTimeout(() => setTooltip(true), 1200)
      // Hide tooltip after a few seconds
      setTimeout(() => setTooltip(false), 5000)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <div className="floating-wa-wrap">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                className="wa-tooltip"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button className="tooltip-close" onClick={() => setTooltip(false)}>
                  <FaTimes />
                </button>
                <p>👋 Hi! Book your stay at Hotel White Rose on WhatsApp!</p>
                <a
                  href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-cta"
                >
                  Start Chat →
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa-btn"
            aria-label="Book via WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp />
            {/* Pulse rings */}
            <span className="wa-pulse" />
            <span className="wa-pulse wa-pulse--delay" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  )
}
