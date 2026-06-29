import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function NurseryFeesPage() {
  return (
    <>
      <Helmet>

        <title>
          Nursery Fees Abu Dhabi | Affordable EYFS Education
        </title>

        <meta
          name="description"
          content="Discover affordable nursery fees at ABC Nursery Abu Dhabi. Contact us to learn about our flexible enrollment options and quality British EYFS education."
        />

        <meta
          name="keywords"
          content="Nursery Fees Abu Dhabi, Preschool Fees Abu Dhabi, Affordable Nursery UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/nursery-fees"
        />

        <meta
          property="og:title"
          content="Nursery Fees Abu Dhabi | Affordable EYFS Education"
        />

        <meta
          property="og:description"
          content="Learn more about ABC Nursery's affordable fee structure and enrollment options."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/nursery-fees"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />

      <section className="programs-page">

        <section className="page-header">

          <h1>
            Nursery Fees
          </h1>

          <p>
            ABC Nursery offers high-quality British EYFS education at
            competitive and affordable fees. We aim to provide excellent
            value while maintaining the highest standards of care and
            learning.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Affordable Quality Education
            </h2>

            <p>
              Our fee structure is designed to provide families with access
              to outstanding early childhood education in a safe, caring,
              and stimulating environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Flexible Programs
            </h2>

            <p>
              We offer different attendance options to suit your family's
              schedule. Please contact our admissions team for the latest
              fee structure and available programs.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Contact Our Admissions Team
            </h2>

            <p>
              For detailed fee information, current offers, and enrollment
              assistance, please contact ABC Nursery. Our team will be happy
              to guide you through the available options.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default NurseryFeesPage;