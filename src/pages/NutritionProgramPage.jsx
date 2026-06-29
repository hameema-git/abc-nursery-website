import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function NutritionProgramPage() {
  return (
    <>
      <Helmet>

        <title>
          Nutrition Program | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="ABC Nursery promotes healthy eating habits through a balanced nutrition program that supports children's growth, wellbeing, and learning."
        />

        <meta
          name="keywords"
          content="Nutrition Program Abu Dhabi, Healthy Nursery Meals, Child Nutrition UAE"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/nutrition-program"
        />

        <meta
          property="og:title"
          content="Nutrition Program | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Healthy nutrition supports healthy learning. Discover our nutrition program for young children."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/nutrition-program"
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
            Nutrition Program
          </h1>

          <p>
            Good nutrition plays an essential role in every child's growth,
            development, and overall wellbeing. At ABC Nursery, we encourage
            healthy eating habits that support active learning and healthy
            lifestyles.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Healthy Eating Habits
            </h2>

            <p>
              We encourage children to enjoy a variety of nutritious foods,
              helping them develop positive eating habits from an early age.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Balanced Nutrition
            </h2>

            <p>
              A balanced diet supports children's physical growth, brain
              development, concentration, and energy throughout the day.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Working With Parents
            </h2>

            <p>
              We work closely with parents to understand each child's dietary
              needs, allergies, and nutritional requirements to ensure a safe
              and healthy environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Healthy Lifestyle
            </h2>

            <p>
              Along with nutritious meals, children participate in active play
              and physical activities that promote healthy development and
              lifelong wellbeing.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default NutritionProgramPage;