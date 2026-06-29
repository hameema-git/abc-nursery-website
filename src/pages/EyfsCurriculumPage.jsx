import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "./ProgramsPage.css";

import { Helmet } from "react-helmet-async";

function EyfsCurriculumPage() {
  return (
    <>
      <Helmet>

        <title>
          EYFS Curriculum Abu Dhabi | British Early Years Education
        </title>

        <meta
          name="description"
          content="ABC Nursery follows the British EYFS curriculum in Abu Dhabi, helping children develop through play, creativity, communication, and confidence."
        />

        <meta
          name="keywords"
          content="EYFS Curriculum Abu Dhabi, British Nursery Abu Dhabi, Early Years Foundation Stage UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/eyfs-curriculum"
        />

        <meta
          property="og:title"
          content="EYFS Curriculum Abu Dhabi | British Early Years Education"
        />

        <meta
          property="og:description"
          content="Discover how ABC Nursery's British EYFS curriculum helps children learn, play, and grow in a safe environment."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/eyfs-curriculum"
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
      British EYFS Curriculum in Abu Dhabi
    </h1>

    <p>
      ABC Nursery follows the British Early Years Foundation Stage (EYFS)
      curriculum, helping children develop academically, socially,
      emotionally, and physically through structured play and hands-on
      learning experiences.
    </p>

  </section>

  <div className="container">

    <section className="page-section">

      <h2>
        What is the EYFS Curriculum?
      </h2>

      <p>
        The Early Years Foundation Stage (EYFS) is the official British
        curriculum for children from birth to five years. It focuses on
        building confidence, communication skills, creativity, independence,
        and a lifelong love for learning in a safe and nurturing environment.
      </p>

    </section>

    <section className="page-section">

      <h2>
        The Seven Areas of Learning
      </h2>

      <ul>
        <li>Communication and Language</li>
        <li>Physical Development</li>
        <li>Personal, Social and Emotional Development</li>
        <li>Literacy</li>
        <li>Mathematics</li>
        <li>Understanding the World</li>
        <li>Expressive Arts and Design</li>
      </ul>

    </section>

    <section className="page-section">

      <h2>
        Learning Through Play
      </h2>

      <p>
        At ABC Nursery, every activity is designed to encourage curiosity,
        creativity, critical thinking, and confidence. Children explore,
        discover, and learn naturally through guided play and interactive
        experiences.
      </p>

    </section>

    <section className="page-section">

      <h2>
        Why Parents Choose ABC Nursery
      </h2>

      <ul>
        <li>British EYFS Curriculum</li>
        <li>Experienced and caring teachers</li>
        <li>Safe and secure learning environment</li>
        <li>Age-appropriate classrooms</li>
        <li>Focus on school readiness</li>
        <li>Over 45 years of trusted childcare experience</li>
      </ul>

    </section>

  </div>

</section>

      <Contact />

      <Footer />

    </>
  );
}

export default EyfsCurriculumPage;