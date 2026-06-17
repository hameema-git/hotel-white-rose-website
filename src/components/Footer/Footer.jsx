import { FaWhatsapp, FaFacebook, FaInstagram, FaTripadvisor, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { HOTEL, WHATSAPP_MESSAGE } from '../../data/hotelData'
import logo from "../../assets/images/logo.jpg";
import './Footer.css'

const NAV_LINKS = ['Home', 'About', 'Rooms', 'Facilities', 'Gallery', 'Location', 'Contact']

const scrollTo = (id) => {
  document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top wave decoration */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill= "#7A8F42"></path>
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                {/* <span className="footer-logo-icon">🌹</span> */}

                  <img
                    src={logo}
                    alt="Hotel White Rose Logo"
                    className="navbar-logo-img"
                  />
                <div>
                  <span className="footer-logo-main">Hotel White Rose</span>
                  <span className="footer-logo-sub">Fort Kochi · Est. 2006</span>
                </div>
              </div>
              <p className="footer-brand-desc">
                A heritage-style boutique hotel in the heart of Fort Kochi, Kerala.
                Warm hospitality, comfortable rooms, and memories that last — since 2006.
              </p>
              <div className="footer-social">
                <a href={HOTEL.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href={HOTEL.socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href={HOTEL.socialLinks.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
                  <FaTripadvisor />
                </a>
                <a
                  href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="footer-social-wa"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-links">
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <button onClick={() => scrollTo(link)} className="footer-link-btn">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaMapMarkerAlt />
                  <span>{HOTEL.address}</span>
                </li>
                <li>
                  <FaPhone />
                  <a href={`tel:${HOTEL.phone}`}>{HOTEL.phone}</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href={`mailto:${HOTEL.email}`}>{HOTEL.email}</a>
                </li>
              </ul>
              <a
                href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-btn"
              >
                <FaWhatsapp />
                Book via WhatsApp
              </a>
            </div>

            {/* Attractions */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Nearby</h4>
              <ul className="footer-links">
                {['Fort Kochi Binale Venue','Water Metro Terminal','Chinese Fishing Nets', 'Fort Kochi Beach', 'St. Francis Church', 'Santa Cruz Basilica', 'Mattancherry Palace', 'Jew Town'].map((place) => (
                  <li key={place}>
                    <span className="footer-nearby-item">✦ {place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {new Date().getFullYear()} Hotel White Rose, Fort Kochi. All rights reserved.</p>
            {/* <p className="footer-seo-note">
              Budget Hotel in Fort Kochi · Heritage Accommodation Kerala · Affordable Hotel near Chinese Fishing Nets
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
