import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function ToddlerDevelopmentPage() {
  return (
    <>
      <Helmet>

        <title>
          Toddler Development Program Abu Dhabi | ABC Nursery
        </title>

        <meta
          name="description"
          content="ABC Nursery's Toddler Development Program in Abu Dhabi helps young children build confidence, language, motor skills, and social development through the British EYFS curriculum."
        />

        <meta
          name="keywords"
          content="Toddler Development Abu Dhabi, Toddler Program Abu Dhabi, EYFS Toddler Program"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/toddler-development"
        />

        <meta
          property="og:title"
          content="Toddler Development Program Abu Dhabi | ABC Nursery"
        />

        <meta
          property="og:description"
          content="Helping toddlers grow through play, creativity, and early learning at ABC Nursery Abu Dhabi."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/toddler-development"
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
            Toddler Development Program
          </h1>

          <p>
            Our Toddler Development Program encourages young children to
            explore, learn, and develop independence through meaningful
            play-based experiences inspired by the British EYFS curriculum.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Building Confidence
            </h2>

            <p>
              We encourage toddlers to become confident learners by providing
              age-appropriate activities that inspire curiosity, independence,
              and creativity.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Language & Social Skills
            </h2>

            <p>
              Through storytelling, songs, group activities, and interactive
              play, children develop communication skills while learning to
              build friendships and work together.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Learning Through Exploration
            </h2>

            <p>
              Hands-on experiences help toddlers strengthen fine motor skills,
              problem-solving abilities, and early cognitive development in a
              fun and supportive environment.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default ToddlerDevelopmentPage;