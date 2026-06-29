import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function LearningThroughPlayPage() {
  return (
    <>
      <Helmet>

        <title>
          Learning Through Play | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="At ABC Nursery Abu Dhabi, children learn through play using the British EYFS curriculum, encouraging creativity, confidence, communication, and lifelong learning."
        />

        <meta
          name="keywords"
          content="Learning Through Play Abu Dhabi, Play Based Learning, EYFS Nursery Abu Dhabi"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/learning-through-play"
        />

        <meta
          property="og:title"
          content="Learning Through Play | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Discover how ABC Nursery uses play-based learning to help children develop confidence, creativity, and essential life skills."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/learning-through-play"
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
            Learning Through Play
          </h1>

          <p>
            At ABC Nursery, we believe children learn best through play.
            Every activity is carefully planned to develop creativity,
            confidence, communication, and a lifelong love of learning.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Why Play Matters
            </h2>

            <p>
              Play is a natural way for children to explore the world,
              solve problems, build relationships, and develop confidence.
              Through guided activities, children learn while enjoying every
              moment of their day.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Supporting Every Area of Development
            </h2>

            <p>
              Our play-based approach strengthens communication, language,
              physical development, creativity, early mathematics,
              literacy, and social skills in line with the British EYFS
              curriculum.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Building Confidence and Independence
            </h2>

            <p>
              Children are encouraged to make choices, work together,
              express themselves, and become confident learners in a
              caring and supportive environment.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Every Day is an Adventure
            </h2>

            <p>
              From creative arts and storytelling to outdoor exploration
              and sensory activities, every experience is designed to
              inspire curiosity and make learning enjoyable.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default LearningThroughPlayPage;