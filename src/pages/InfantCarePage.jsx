import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function InfantCarePage() {
  return (
    <>
      <Helmet>

        <title>
          Infant Care in Abu Dhabi | Baby Nursery (2–12 Months)
        </title>

        <meta
          name="description"
          content="ABC Nursery provides a safe, nurturing, and stimulating infant care program in Abu Dhabi for babies aged 2–12 months, supporting early development and emotional wellbeing."
        />

        <meta
          name="keywords"
          content="Infant Care Abu Dhabi, Baby Nursery Abu Dhabi, Infant Daycare Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/infant-care"
        />

        <meta
          property="og:title"
          content="Infant Care in Abu Dhabi | Baby Nursery (2–12 Months)"
        />

        <meta
          property="og:description"
          content="Safe and nurturing infant care for babies aged 2–12 months at ABC Nursery Abu Dhabi."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/infant-care"
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
            Infant Care (2–12 Months)
          </h1>

          <p>
            At ABC Nursery, our infant care program provides a loving,
            secure, and stimulating environment where babies can grow,
            explore, and thrive during their earliest months of life.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Individualized Care
            </h2>

            <p>
              Every infant has unique needs. Our experienced caregivers
              follow each baby's individual feeding, sleeping, and play
              routine while providing warm, responsive care throughout the
              day.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Early Development
            </h2>

            <p>
              Through sensory play, music, movement, and gentle interaction,
              we encourage cognitive, physical, and emotional development in
              a calm and nurturing environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Safe Environment
            </h2>

            <p>
              Our infant rooms are designed with safety, hygiene, and comfort
              in mind, giving parents complete peace of mind while their baby
              learns and grows.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default InfantCarePage;