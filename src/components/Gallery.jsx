import "./Gallery.css";

import img1 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.28 PM.jpeg";
import img2 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.28 PM (1).jpeg";
import img3 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.29 PM.jpeg";
import img4 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.29 PM (1).jpeg";

import img5 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.30 PM.jpeg";
import img6 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.30 PM (1).jpeg";
import img7 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.31 PM.jpeg";
import img8 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.31 PM (1).jpeg";

import img9 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.32 PM.jpeg";
import img10 from "../assets/images/WhatsApp Image 2026-05-22 at 9.52.28 PM.jpeg";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">

        <h2 className="gallery-title">
          MOMENTS AT ABC NURSERY
        </h2>

        <p className="gallery-subtitle">
          Explore joyful moments of learning,
          creativity, fun, and friendship shared
          by our little stars every single day.
        </p>

        {/* GALLERY GRID */}

        <div className="gallery-grid">

          <img src={img1} alt="Kids Activity" />
          <img src={img2} alt="Classroom Learning" />
          <img src={img3} alt="Creative Play" />
          <img src={img4} alt="Fun Learning" />

          <img src={img5} alt="School Event" />
          <img src={img6} alt="Happy Students" />
          <img src={img7} alt="Celebration" />
          <img src={img8} alt="Group Activity" />

          {/* LAST ROW */}

          <div className="gallery-last-row">
            <img src={img9} alt="Kids Event" />
            <img src={img10} alt="Nursery Moments" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;