import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function ParentResourcesPage() {
  return (
    <>
      <Helmet>

        <title>
          Parent Resources | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="Explore helpful parenting resources from ABC Nursery Abu Dhabi, including early childhood development tips, learning activities, health guidance, and school readiness advice."
        />

        <meta
          name="keywords"
          content="Parent Resources Abu Dhabi, Parenting Tips UAE, Child Development Resources"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/parent-resources"
        />

        <meta
          property="og:title"
          content="Parent Resources | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Helpful resources for parents to support their child's learning, development, and wellbeing."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/parent-resources"
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
            Parent Resources
          </h1>

          <p>
            At ABC Nursery, we believe parents and teachers work together to
            help every child succeed. Our parent resources provide practical
            guidance to support learning, wellbeing, and development both at
            nursery and at home.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Supporting Learning at Home
            </h2>

            <p>
              Simple daily activities such as reading together, storytelling,
              creative play, and conversations help strengthen your child's
              communication, confidence, and curiosity.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Child Development Guidance
            </h2>

            <p>
              Every child develops at their own pace. Our educators work
              closely with parents to support each child's emotional, social,
              physical, and cognitive growth.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Health and Wellbeing
            </h2>

            <p>
              Healthy nutrition, good sleep routines, regular physical
              activity, and positive emotional support all contribute to a
              happy and successful learning experience.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Working Together
            </h2>

            <p>
              We encourage open communication between parents and teachers to
              ensure every child receives the support they need throughout
              their early learning journey.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default ParentResourcesPage;