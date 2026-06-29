import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function ContactPage() {
  return (
    <>
      <Helmet>

        <title>
          Contact ABC Nursery Abu Dhabi | Book a Visit
        </title>

        <meta
          name="description"
          content="Get in touch with ABC Nursery Abu Dhabi. Contact us to book a nursery tour, enquire about admissions, or learn more about our British EYFS curriculum."
        />

        <meta
          name="keywords"
          content="Contact ABC Nursery Abu Dhabi, Nursery Contact UAE, Book Nursery Tour Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/contact"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Contact ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Contact ABC Nursery to enquire about admissions, book a visit, or speak with our friendly team."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/contact"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

        {/* Twitter */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact ABC Nursery Abu Dhabi"
        />

        <meta
          name="twitter:description"
          content="Book a visit or contact ABC Nursery Abu Dhabi today."
        />

        <meta
          name="twitter:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />


        <Contact />

     

      <Footer />

    </>
  );
}

export default ContactPage;