import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function GalleryPage() {
  return (
    <>
      <Helmet>

        <title>
          Gallery | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="Explore the ABC Nursery Abu Dhabi gallery featuring classroom activities, creative learning, celebrations, school events, and memorable moments from our nursery."
        />

        <meta
          name="keywords"
          content="ABC Nursery Gallery, Nursery Photos Abu Dhabi, Preschool Activities UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/gallery"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Gallery | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Take a look at life at ABC Nursery through our gallery of learning, creativity, fun, and special moments."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/gallery"
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
          content="Gallery | ABC Nursery Abu Dhabi"
        />

        <meta
          name="twitter:description"
          content="Explore joyful moments from ABC Nursery Abu Dhabi."
        />

        <meta
          name="twitter:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />

        <Gallery />

    

      <Contact />

      <Footer />

    </>
  );
}

export default GalleryPage;