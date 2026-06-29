import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../assets/images/abc logo.png";

import { useState, useEffect, useRef } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

/* ANIMATIONS */

import mascotAnimation from
"../assets/animations/Bouncing Fruits.json";

import bubbleAnimation from
"../assets/animations/bubble bg.json";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    const menuRef = useRef();

    /* CLOSE MENU WHEN CLICKING OUTSIDE */

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    return (

        <header>

            <nav
                className="navbar"
                ref={menuRef}
            >

                {/* BUBBLE BACKGROUND */}

                <div className="navbar-bubbles">

                    <Player
                        autoplay
                        loop
                        src={bubbleAnimation}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    />

                </div>

                {/* ANIMATED CHARACTER */}

                <div className="navbar-character">

                    <Player
                        autoplay
                        loop
                        src={mascotAnimation}
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    />

                </div>

                {/* LOGO */}

                <div className="logo">

                    <img
                        src={logo}
                        alt="ABC Nursery Logo"
                    />

                </div>

                {/* MENU ICON */}

                <div
                    className="menu"
                    onClick={() =>
                        setShowMenu(!showMenu)
                    }
                >

                    {showMenu ? "✕" : "☰"}

                </div>

                {/* MOBILE MENU */}

                <div
                    className={`mobile-menu ${
                        showMenu ? "active" : ""
                    }`}
                >

                    <a
                        href="#home"
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </a>

                    {/* <a
                        href="#about"
                        onClick={() => setShowMenu(false)}
                    >
                        About
                    </a> */}

                       <a
                        href="/about"
                        onClick={() => setShowMenu(false)}
                    >
                        About
                    </a>


                    <a
                        href="/programs"
                        onClick={() => setShowMenu(false)}
                    >
                        Programs
                    </a>
                        <a
                        href="/why-choose-us"
                        onClick={() => setShowMenu(false)}
                    >
                        Why Choose Us
                    </a>
                         {/* <a
                        href="/EyfsCurriculumPage"
                        onClick={() => setShowMenu(false)}
                    >
                        EyfsCurriculamPage
                    </a> */}

                    <a
                        href="#gallery"
                        onClick={() => setShowMenu(false)}
                    >
                        Gallery
                    </a>

                    <a
                        href="#contact"
                        onClick={() => setShowMenu(false)}
                    >
                        Contact
                    </a>
                        <Link
        to="/blog"
        onClick={() => setShowMenu(false)}
        className="blog-link"
    >
        Blogs
    </Link>

                </div>

            </nav>

        </header>
    );
}

export default Navbar;