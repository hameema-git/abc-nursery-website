import "./WhyChoose.css";

import { useState } from "react";

import img1 from "../assets/images/Rectangle 40411.png";
import img2 from "../assets/images/Rectangle 40414.png";
import img3 from "../assets/images/Rectangle 40413.png";
import img4 from "../assets/images/Rectangle 40412.png";

function WhyChoose() {

    const cards = [

        {
            image: img1,
            title: "Language & Communication",
            text: "Building Strong Speaking, Listening, And Interaction Skills"
        },

        {
            image: img2,
            title: "Learning Through Play",
            text: "Making Learning Fun, Engaging, And Meaningful"
        },

        {
            image: img3,
            title: "Thinking & Creativity",
            text: "Encouraging Imagination And Problem-Solving Skills"
        },

        {
            image: img4,
            title: "Motor Skills Development",
            text: "Improving Fine And Gross Motor Coordination"
        }
    ];

    const [current, setCurrent] = useState(0);

    const prevSlide = () => {

        setCurrent(
            current === 0 ? cards.length - 1 : current - 1
        );
    };

    const nextSlide = () => {

        setCurrent(
            current === cards.length - 1 ? 0 : current + 1
        );
    };

    return (

        <section className="whychoose">

            <div className="why-container">

                {/* TITLE */}

                <h2 className="why-title">
                    WHY CHOOSE ABC NURSERY ?
                </h2>

                <p className="why-text">
                    Committed To Excellence In Early Childhood
                    Education, Providing A Safe, Nurturing
                    Environment That Supports Every Child's
                    Growth, Confidence, And Overall Development.
                </p>

                {/* CAROUSEL */}

                <div className="why-slider">

                    {/* LEFT */}

                    <button
                        className="arrow"
                        onClick={prevSlide}
                    >
                        &#8249;
                    </button>

                    {/* CARD */}

                    <div className="why-card">

                        <div className="pentagon-wrapper">

                            <img
                                src={cards[current].image}
                                alt=""
                                className="pentagon-image"
                            />

                        </div>

                        {/* TEXT */}

                        <h3 className="card-title">
                            {cards[current].title}
                        </h3>

                        <p className="card-text">
                            {cards[current].text}
                        </p>

                    </div>

                    {/* RIGHT */}

                    <button
                        className="arrow"
                        onClick={nextSlide}
                    >
                        &#8250;
                    </button>

                </div>

            </div>

        </section>
    );
}

export default WhyChoose;