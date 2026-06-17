import SEO from '../components/SEO/SEO'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Rooms from '../components/Rooms/Rooms'
import Facilities from '../components/Facilities/Facilities'
import Gallery from '../components/Gallery/Gallery'
import Location from '../components/Location/Location'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Rooms />
        <Facilities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
