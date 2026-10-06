import hotelFront1 from "../../assets/images/hotel-front1.jpg";
import hotelFront2 from "../../assets/images/hotel-front2.jpg";
import hotelFront3 from "../../assets/images/hotel-front.jpg";

import { FaWhatsapp } from "react-icons/fa";
import { HOTEL, WHATSAPP_MESSAGE } from "../../data/hotelData";
import "./Hero.css";

export default function Hero() {

  const scrollToRooms = () => {
    document.querySelector("#rooms")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">

      <div className="hero-left">

        {/* <span className="hero-eyebrow">
          SINCE 2006
        </span> */}
{/* 
        <h1 className="hero-title">
          Welcome to
          <span>Hotel White Rose</span>
        </h1> */}

        {/* <h1 className="hero-title">
  Stay in the Heart of
  <span>Fort Kochi</span>
</h1>

        <p className="hero-subtitle">
          Heritage Comfort in the Heart of Fort Kochi
        </p>

        <p className="hero-description">
          Experience warm hospitality, timeless charm and a relaxing stay in the historic heart of Fort Kochi.
        </p> */}

        <h1 className="hero-title">
  Stay in the Heart of
  <span>Fort Kochi</span>
</h1>

<p className="hero-subtitle">
  Heritage Comfort • Prime Location • Warm Hospitality
</p>

<p className="hero-description">
  Experience authentic Kerala hospitality, elegant accommodations, and easy access to Fort Kochi's most iconic attractions.
</p>

        <div className="hero-buttons">

          <a
            href={`https://wa.me/${HOTEL.whatsapp}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp />
            Book on WhatsApp
          </a>

          <button
            onClick={scrollToRooms}
            className="btn-outline"
          >
            Explore Rooms
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h3>14+</h3>
            <p>Rooms</p>
          </div>

          <div>
            <h3>18+</h3>
            <p>Years Service</p>
          </div>

          <div>
            <h3>13+</h3>
            <p>Facilities</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="main-image">
          <img src={hotelFront1} alt="Hotel White Rose" />
        </div>

        <div className="floating-image top">
          <img src={hotelFront2} alt="Hotel Exterior" />
        </div>

        <div className="floating-image bottom">
          <img src={hotelFront3} alt="Hotel View" />
        </div>

      </div>

    </section>
  );
}