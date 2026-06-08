import { Link } from "react-router-dom";
import logo from "../assets/images/abc logo.png";

import { Player } from "@lottiefiles/react-lottie-player";

import mascotAnimation from
"../assets/animations/Bouncing Fruits.json";

import bubbleAnimation from
"../assets/animations/bubble bg.json";

import "./BlogNavbar.css";

function BlogNavbar() {
  return (
    <header>

      <nav className="blog-navbar">

        {/* Bubble Background */}

        <div className="blog-bubbles">
          <Player
            autoplay
            loop
            src={bubbleAnimation}
          />
        </div>

        {/* Animated Fruit */}

        <div className="blog-character">
          <Player
            autoplay
            loop
            src={mascotAnimation}
          />
        </div>

        {/* Logo */}

        <div className="blog-logo">
          <img
            src={logo}
            alt="ABC Nursery"
          />
        </div>

        {/* Home Button */}

        <Link
          to="/"
          className="home-btn"
        >
          Back To Home
        </Link>

      </nav>

    </header>
  );
}

export default BlogNavbar;