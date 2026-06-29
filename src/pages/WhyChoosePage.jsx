import Navbar from "../components/Navbar";
import WhyChoose from "../components/WhyChoose";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

function WhyChoosePage() {
  return (
    <>
      <Helmet>

        <title>
          Why Choose ABC Nursery | Trusted Preschool in Abu Dhabi
        </title>

        <meta
          name="description"
          content="Discover why families choose ABC Nursery in Abu Dhabi. We provide a safe environment, experienced teachers, British EYFS curriculum, and engaging learning experiences."
        />

        <meta
          name="keywords"
          content="Why Choose ABC Nursery, Preschool Abu Dhabi, Trusted Nursery Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/why-choose-us"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Why Choose ABC Nursery | Trusted Preschool in Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Discover why families choose ABC Nursery in Abu Dhabi. We provide a safe environment, experienced teachers, British EYFS curriculum, and engaging learning experiences."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/why-choose-us"
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
          content="Why Choose ABC Nursery | Trusted Preschool in Abu Dhabi"
        />

        <meta
          name="twitter:description"
          content="Discover why families choose ABC Nursery in Abu Dhabi. We provide a safe environment, experienced teachers, British EYFS curriculum, and engaging learning experiences."
        />

        <meta
          name="twitter:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />

      <WhyChoose />

      <Contact />

      <Footer />

    </>
  );
}

export default WhyChoosePage;