import Navbar from "../components/Navbar";
import Programs from "../components/Programs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

function ProgramsPage() {
  return (
    <>
      <Helmet>

        <title>
          Best Nursery Near Muroor Road, Abu Dhabi
        </title>

        <meta
          name="description"
          content="Looking for a nursery close to Muroor Road? ABC Nursery in Abu Dhabi offers EYFS education, caring staff, and a convenient location for busy families."
        />

        <meta
          name="keywords"
          content="Near nursery in Muroor Road Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/programs"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Best Nursery Near Muroor Road, Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Looking for a nursery close to Muroor Road? ABC Nursery in Abu Dhabi offers EYFS education, caring staff, and a convenient location for busy families."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/programs"
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
          content="Best Nursery Near Muroor Road, Abu Dhabi"
        />

        <meta
          name="twitter:description"
          content="Looking for a nursery close to Muroor Road? ABC Nursery in Abu Dhabi offers EYFS education, caring staff, and a convenient location for busy families."
        />

        <meta
          name="twitter:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />

      <Programs />

      <Contact />

      <Footer />

    </>
  );
}

export default ProgramsPage;