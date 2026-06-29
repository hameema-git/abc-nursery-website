import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>
          Best Nursery in Abu Dhabi | Trusted by Parents
        </title>

        <meta
          name="description"
          content="Looking for the best nursery in Abu Dhabi? ABC Nursery is trusted by families for its caring teachers, EYFS curriculum, and safe, modern facilities."
        />

        <meta
          name="keywords"
          content="Best Nursery in Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/about"
        />

        <meta
          property="og:title"
          content="Best Nursery in Abu Dhabi | Trusted by Parents"
        />

        <meta
          property="og:description"
          content="Looking for the best nursery in Abu Dhabi? ABC Nursery is trusted by families for its caring teachers, EYFS curriculum, and safe, modern facilities."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/about"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Navbar />

      <About />

      <Contact />

      <Footer />
    </>
  );
}

export default AboutPage;