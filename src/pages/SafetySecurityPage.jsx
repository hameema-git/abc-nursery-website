import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function SafetySecurityPage() {
  return (
    <>
      <Helmet>

        <title>
          Safety & Security | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="ABC Nursery provides a safe, secure, and caring environment with trained staff, child-friendly facilities, and strict health and safety standards."
        />

        <meta
          name="keywords"
          content="Safe Nursery Abu Dhabi, Child Safety Abu Dhabi, Secure Nursery UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/safety-security"
        />

        <meta
          property="og:title"
          content="Safety & Security | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Discover how ABC Nursery keeps children safe through secure facilities, trained staff, and high health and safety standards."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/safety-security"
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
            Safety & Security
          </h1>

          <p>
            At ABC Nursery, the safety and wellbeing of every child is our
            highest priority. We provide a secure, caring environment where
            children can learn, explore, and grow with confidence.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Safe Learning Environment
            </h2>

            <p>
              Our classrooms and outdoor play areas are designed to provide
              children with a clean, secure, and age-appropriate environment
              that supports learning and exploration.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Experienced & Caring Staff
            </h2>

            <p>
              Our qualified educators and support staff are trained to provide
              attentive care while following established health and safety
              procedures throughout the day.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Health & Hygiene
            </h2>

            <p>
              We maintain high standards of cleanliness and hygiene to create
              a healthy environment for children, staff, and visitors.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Parent Peace of Mind
            </h2>

            <p>
              Families can feel confident knowing their children are cared for
              in a safe, welcoming, and supportive nursery environment every
              day.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default SafetySecurityPage;