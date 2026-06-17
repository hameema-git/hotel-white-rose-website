import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { HOTEL, WHATSAPP_MESSAGE } from '../../data/hotelData'
import logo from "../../assets/images/logo.jpg";
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  // const handleNavClick = (href) => {
  //   setMenuOpen(false)
  //   const el = document.querySelector(href)
  //   if (el) el.scrollIntoView({ behavior: 'smooth' })
  // }

  const handleNavClick = (href) => {
  setMenuOpen(false)

  setTimeout(() => {
    const el = document.querySelector(href)

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, 200)
}

  return (
    <motion.nav
      className={`navbar-rose ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        {/* <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')}>
          <span className="logo-icon">🌹</span>
          <span className="logo-text">
            <span className="logo-main">Hotel White Rose</span>
            <span className="logo-sub">Fort Kochi · Kerala . Est. 2006</span>
          </span>
        </a> */}

        {/* <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')}>

  <img
    src={logo}
    alt="Hotel White Rose Logo"
    className="navbar-logo-img"
  /> */}

  {/* <span className="logo-text">
    <span className="logo-main">Hotel White Rose</span>
    <span className="logo-sub">Fort Kochi · Kerala · Est. 2006</span>
  </span> */}

{/* </a> */}


<a
  href="#home"
  className="navbar-logo"
  onClick={() => handleNavClick('#home')}
>

  <img
    src={logo}
    alt="Hotel White Rose Logo"
    className="navbar-logo-img"
  />

  {/* <span className="logo-sub">
    Fort Kochi · Kerala · Est. 2006
  </span> */}

</a>
        {/* Desktop Nav Links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`nav-link-item ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          <FaWhatsapp />
          <span>Book Now</span>
        </a>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
              >
                <a
                  href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-whatsapp-btn"
                >
                  <FaWhatsapp /> Book on WhatsApp
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
