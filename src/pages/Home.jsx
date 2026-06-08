import "../App.css";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Leadership from "../components/Leadership";
import ParentReview from "../components/ParentReviews";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import { ParallaxProvider } from "react-scroll-parallax";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <ParallaxProvider>

      <Helmet>

        <title>
          ABC Nursery Abu Dhabi | Preschool, Daycare & Early Learning Since 1979
        </title>

        <meta
          name="description"
          content="ABC Nursery Abu Dhabi offers preschool, daycare, kindergarten preparation and early childhood education programs. Trusted by families since 1979."
        />

        <meta
          name="keywords"
          content="ABC Nursery Abu Dhabi, Preschool Abu Dhabi, Nursery Abu Dhabi, Daycare Abu Dhabi, Early Learning UAE, Childcare Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://abc-nursery.ae/"
        />

        <meta
          property="og:title"
          content="ABC Nursery Abu Dhabi | Preschool & Early Learning"
        />

        <meta
          property="og:description"
          content="Quality preschool, daycare and early learning programs in Abu Dhabi since 1979."
        />

        <meta
          property="og:url"
          content="https://abc-nursery.ae/"
        />

        <meta
          property="og:type"
          content="website"
        />

      </Helmet>

      <Navbar />

      <Hero />

      <About />

      <Programs />

      <WhyChoose />

      <Contact />

      <Leadership />

      <ParentReview />

      <FAQ />

      <Gallery />

      <Footer />

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/9710506227041"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* CALL BUTTON */}
      <a
        href="tel:+9710506227041"
        className="call-float"
      >
        <i className="fas fa-phone-alt"></i>
      </a>

    </ParallaxProvider>
  );
}

export default Home;