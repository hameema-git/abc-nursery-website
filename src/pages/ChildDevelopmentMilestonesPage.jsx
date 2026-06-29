import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

import "./ProgramsPage.css";

function ChildDevelopmentMilestonesPage() {
  return (
    <>
      <Helmet>

        <title>
          Child Development Milestones | ABC Nursery Abu Dhabi
        </title>

        <meta
          name="description"
          content="Learn about important child development milestones from infancy through preschool. ABC Nursery Abu Dhabi supports every stage of your child's growth using the British EYFS curriculum."
        />

        <meta
          name="keywords"
          content="Child Development Milestones Abu Dhabi, Early Childhood Development, EYFS Development"
        />

        <link
          rel="canonical"
          href="https://www.abc-nursery.ae/child-development-milestones"
        />

        <meta
          property="og:title"
          content="Child Development Milestones | ABC Nursery Abu Dhabi"
        />

        <meta
          property="og:description"
          content="Supporting every stage of your child's physical, emotional, social, and cognitive development."
        />

        <meta
          property="og:url"
          content="https://www.abc-nursery.ae/child-development-milestones"
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
            Child Development Milestones
          </h1>

          <p>
            Every child develops at their own pace. At ABC Nursery, we support
            children through every stage of growth while encouraging confidence,
            curiosity, and a lifelong love of learning.
          </p>

        </section>

        <div className="container">

          <section className="page-section">

            <h2>
              Physical Development
            </h2>

            <p>
              Children strengthen both fine and gross motor skills through
              movement, outdoor play, creative activities, and hands-on
              learning experiences.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Language & Communication
            </h2>

            <p>
              Storytelling, conversations, songs, and group activities help
              children build vocabulary, listening skills, and confidence in
              communication.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Social & Emotional Growth
            </h2>

            <p>
              We encourage kindness, independence, teamwork, and emotional
              wellbeing, helping children develop positive relationships and
              self-confidence.
            </p>

          </section>

          <section className="page-section">

            <h2>
              Cognitive Development
            </h2>

            <p>
              Through the British EYFS curriculum, children develop early
              problem-solving, creativity, mathematical thinking, and
              curiosity while enjoying meaningful play.
            </p>

          </section>

        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default ChildDevelopmentMilestonesPage;