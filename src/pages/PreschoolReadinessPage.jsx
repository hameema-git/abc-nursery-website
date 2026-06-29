import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function PreschoolReadinessPage() {
  return (
    <>
      <Helmet>

        <title>
          Preschool Readiness in Abu Dhabi | ABC Nursery
        </title>

        <meta
          name="description"
          content="ABC Nursery prepares children for school through the British EYFS curriculum, building confidence, independence, communication, and early academic skills."
        />

        <meta
          name="keywords"
          content="Preschool Readiness Abu Dhabi, School Readiness Abu Dhabi, EYFS Preschool"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/preschool-readiness"
        />

        <meta
          property="og:title"
          content="Preschool Readiness in Abu Dhabi | ABC Nursery"
        />

        <meta
          property="og:description"
          content="Helping children become confident and prepared for primary school through the British EYFS curriculum."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/preschool-readiness"
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
            Preschool Readiness
          </h1>

          <p>
            At ABC Nursery, we help children develop the confidence,
            independence, and essential skills needed for a smooth transition
            to primary school through the British EYFS curriculum.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Building Independence
            </h2>

            <p>
              Children learn daily routines, personal responsibility,
              self-care, and decision-making skills that prepare them for
              school life.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Early Learning Skills
            </h2>

            <p>
              We introduce early literacy, numeracy, communication, and
              problem-solving through engaging, age-appropriate activities
              that inspire a love of learning.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Social & Emotional Development
            </h2>

            <p>
              Children build friendships, learn teamwork, develop confidence,
              and strengthen emotional resilience in a caring and supportive
              environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Preparing for Primary School
            </h2>

            <p>
              Our experienced educators work closely with families to ensure
              every child is well prepared for the next stage of their
              educational journey.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default PreschoolReadinessPage;