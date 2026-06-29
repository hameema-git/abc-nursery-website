import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function SchoolPreparationPage() {
  return (
    <>
      <Helmet>

        <title>
          School Preparation | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="ABC Nursery prepares children for a confident transition to primary school through the British EYFS curriculum, developing academic, social, and emotional skills."
        />

        <meta
          name="keywords"
          content="School Preparation Abu Dhabi, Kindergarten Readiness, Primary School Preparation UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/school-preparation"
        />

        <meta
          property="og:title"
          content="School Preparation | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Helping children build confidence and essential skills for a successful transition to primary school."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/school-preparation"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="School Preparation | ABC Nursery Abu Dhabi"
        />

        <meta
          name="twitter:description"
          content="Preparing children for a smooth and confident start to primary school."
        />

        <meta
          name="twitter:image"
          content="https://www.abc-nursery.ae/og-image.jpg"
        />

      </Helmet>

      <Navbar />

      <section className="programs-page">

        <section className="page-header">

          <h1>
            School Preparation
          </h1>

          <p>
            At ABC Nursery, we prepare children for a smooth transition into
            primary school by developing confidence, independence, and a
            strong foundation for lifelong learning through the British EYFS
            curriculum.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Building Academic Foundations
            </h2>

            <p>
              Children are introduced to early literacy, numeracy,
              communication, and problem-solving through engaging,
              age-appropriate learning experiences.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Developing Independence
            </h2>

            <p>
              We encourage children to become independent learners by
              developing self-care skills, responsibility, confidence,
              and positive daily routines.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Social & Emotional Readiness
            </h2>

            <p>
              Children build friendships, learn teamwork, strengthen
              communication skills, and develop emotional resilience in a
              supportive and caring environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Working Together with Parents
            </h2>

            <p>
              We work closely with families to ensure every child is
              confident, happy, and fully prepared for the exciting
              journey into primary education.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default SchoolPreparationPage;