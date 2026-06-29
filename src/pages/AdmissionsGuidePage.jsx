import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function AdmissionsGuidePage() {
  return (
    <>
      <Helmet>

        <title>
          Nursery Admissions Abu Dhabi | Join ABC Nursery
        </title>

        <meta
          name="description"
          content="Learn how to enroll your child at ABC Nursery Abu Dhabi. Find admission requirements, application steps, and start your child's early learning journey today."
        />

        <meta
          name="keywords"
          content="Nursery Admission Abu Dhabi, ABC Nursery Admissions, Preschool Enrollment Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/admissions-guide"
        />

      </Helmet>

      <Navbar />

      <section className="programs-page">

        <section className="page-header">

          <h1>
            Nursery Admissions Guide
          </h1>

          <p>
            Joining ABC Nursery is simple. We welcome families looking for a
            caring, safe, and inspiring early learning environment based on
            the British EYFS curriculum.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Admission Process
            </h2>

            <p>
              Parents can contact our admissions team to arrange a nursery
              tour, discuss available programs, and complete the enrollment
              process. Our staff will guide you through every step and answer
              any questions about your child's transition.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Required Documents
            </h2>

            <ul>
              <li>Child's passport copy</li>
              <li>Emirates ID copy</li>
              <li>Passport-size photographs</li>
              <li>Vaccination record</li>
              <li>Parent Emirates ID copy</li>
            </ul>

          </section>

          <section className="page-section">

            <h2>
              Book a Nursery Tour
            </h2>

            <p>
              We encourage parents to visit ABC Nursery to meet our teachers,
              explore our classrooms, and learn more about our learning
              approach before enrolling.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default AdmissionsGuidePage;