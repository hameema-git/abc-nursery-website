import "./Hero.css";

import { motion } from "framer-motion";

import heroImage from "../assets/images/girl image.png";
import bgImage from "../assets/images/Rectangle 40409.png";
import clouds from "../assets/images/Group 33.png";
import pencil from "../assets/images/pencil.png";
import { Player } from
"@lottiefiles/react-lottie-player";
import skatingAnimation from
"../assets/animations/Orange skating.json";

function Hero() {

    return (

        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >

            {/* FLOATING ELEMENTS */}

            {/* <div className="floating star1">⭐</div>

            <div className="floating star2">✨</div> */}

            {/* <div className="floating rainbow">🌈</div>

            <div className="floating balloon">🎈</div>

            <div className="floating teddy">🧸</div>

            <div className="floating rocket">🚀</div> */}
{/* 
            <div className="floating heart">💖</div> */}

            {/* <div className="hero-sun">
                ☀️
            </div> */}

            {/* LEFT CONTENT */}

            <motion.div

                className="hero-content"

                initial={{
                    x:-100,
                    opacity:0
                }}

                animate={{
                    x:0,
                    opacity:1
                }}

                transition={{
                    duration:1
                }}
            >

                <motion.h1

                    className="hero-heading"

                    initial={{
                        y:-50,
                        opacity:0
                    }}

                    animate={{
                        y:0,
                        opacity:1
                    }}

                    transition={{
                        duration:1
                    }}
                >

                    Welcome To <span>ABC Nursery</span>

                </motion.h1>

                <motion.p

                    className="hero-description"

                    initial={{
                        y:40,
                        opacity:0
                    }}

                    animate={{
                        y:0,
                        opacity:1
                    }}

                    transition={{
                        delay:0.3,
                        duration:1
                    }}
                >

                    Inspiring Young Minds Through Safe,
                    Engaging And Joyful Learning Experiences

                </motion.p>

                {/* <motion.button

                    className="hero-btn"

                    whileHover={{
                        scale:1.08,
                        y:-5
                    }}

                    whileTap={{
                        scale:0.95
                    }}

                    initial={{
                        opacity:0,
                        scale:0.8
                    }}

                    animate={{
                        opacity:1,
                        scale:1
                    }}

                    transition={{
                        delay:0.6,
                        duration:0.5
                    }}
                >

                    Admissions Open

                </motion.button> */}

                <motion.a

    href="#contact"

    className="hero-btn"

    whileHover={{
        scale:1.05,
        y:-3
    }}

    whileTap={{
        scale:0.96
    }}

    initial={{
        opacity:0,
        scale:0.8
    }}

    animate={{
        opacity:1,
        scale:1
    }}

    transition={{
        delay:0.6,
        duration:0.5
    }}
>

     <span className="btn-spark spark1">✨</span>
    <span className="btn-spark spark2">🎉</span>
    <span className="btn-spark spark3">⭐</span>
    <span className="btn-spark spark4">💖</span>
    <span className="btn-spark spark5">🌈</span>
    <span className="btn-spark spark6">🎈</span>
     <span className="btn-spark spark6">🎈</span>
      <span className="btn-spark spark6">🎈</span>
 
    Admissions Open

</motion.a>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div

                className="hero-image"

                initial={{
                    x:100,
                    opacity:0
                }}

                animate={{
                    x:0,
                    opacity:1
                }}

                transition={{
                    duration:1.2
                }}
            >

                <motion.img

                    src={heroImage}

                    alt="Kids learning at ABC Nursery Abu Dhabi"

                    animate={{
                        y:[0,-18,0]
                    }}

                    transition={{
                        duration:4,
                        repeat:Infinity,
                        ease:"easeInOut"
                    }}
                />

            </motion.div>

            {/* PENCIL */}

            <motion.img

                src={pencil}

                alt=""

                className="pencil"

                animate={{
                    rotate:[-10,5,-10]
                }}

                transition={{
                    duration:3,
                    repeat:Infinity
                }}
            />

            {/* CLOUDS */}

            {/* <motion.img

                src={clouds}

                alt=""

                className="clouds"

                animate={{
                    x:[0,20,0]
                }}

                transition={{
                    duration:8,
                    repeat:Infinity,
                    ease:"easeInOut"
                }}
            /> */}

            {/* SKATING CHARACTER */}

<div className="cloud-skater">

    <Player
        autoplay
        loop
        src={skatingAnimation}
        style={{
            height:"100%",
            width:"100%"
        }}
    />

</div>

            {/* CLOUDS */}

<img
    src={clouds}
    alt=""
    className="clouds"
/>

        </section>
    );
}

export default Hero;