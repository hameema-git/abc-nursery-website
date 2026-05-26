import "./About.css";

import stars from "../assets/images/Group1.png";

import card1 from "../assets/images/Rectangle 40411.png";
import card2 from "../assets/images/Rectangle 40412.png";
import card3 from "../assets/images/Rectangle 40413.png";
import card4 from "../assets/images/Rectangle 40414.png";

function About() {

    return (

        <section  id="about" className="about">

            <div className="about-container">

                {/* ABOUT TITLE */}

                <h2 className="about-title">
                    ABOUT US
                </h2>

                <h3 className="about-heading">
                    At ABC Nursery, We Believe Every Child
                    Is Unique And Full Of Potential
                </h3>

                <p className="about-text">
                    At ABC Nursery, We Believe That Every Child Is
                    Unique And Possesses Special Abilities.
                    We Aim To Develop Children's Intellectual And
                    Social Skills In A Loving, Safe, And Supportive
                    Environment.

                    We Operate According To The Highest Educational
                    Standards In The UAE And Are Committed To
                    Providing A Fun And Engaging Learning
                    Experience That Fosters Children's Self-Confidence.
                </p>

             
                                            <img
    src={stars}
    alt=""
    className="stars"
/>
                                            {/* <img
    src={stars}
    alt=""
    className="stars1"
/> */}

                {/* FOCUS TITLE */}

                <h2 className="focus-title">
                    WHAT WE FOCUS ON
                </h2>

                {/* FOCUS GRID */}

                <div className="focus-grid">

                    {/* CARD 1 */}

                    <div className="focus-card">

                        <img src={card1} alt="" />

                        <div className="focus-overlay">

                            <h3>
                                Language & Communication
                            </h3>

                            <p>
                                Building Strong Speaking,
                                Listening, And Interaction Skills
                            </p>

                        </div>

                    </div>

                    {/* CARD 2 */}

                    <div className="focus-card">

                        <img src={card2} alt="" />

                        <div className="focus-overlay">

                            <h3>
                                Motor Skills Development
                            </h3>

                            <p>
                                Improving Fine And Gross Motor
                                Coordination
                            </p>

                        </div>

                    </div>

                    {/* CARD 3 */}

                    <div className="focus-card">

                        <img src={card3} alt="" />

                        <div className="focus-overlay">

                            <h3>
                                Thinking & Creativity
                            </h3>

                            <p>
                                Encouraging Imagination
                                And Problem-Solving
                            </p>

                        </div>

                    </div>

                    {/* CARD 4 */}

                    <div className="focus-card">

                        <img src={card4} alt="" />

                        <div className="focus-overlay">

                            <h3>
                                Learning Through Play
                            </h3>

                            <p>
                                Making Learning Fun,
                                Engaging, And Meaningful
                            </p>
                                        {/* <img
                                src={Group}
                                alt=""
                                className="stars"
                            /> */}


                            

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;