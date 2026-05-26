import "./Programs.css";

import baby from "../assets/images/Ellipse 577.png";
import toddler from "../assets/images/Ellipse 578.png";
import preschool from "../assets/images/Ellipse 579.png";

function Programs() {

    return (

        <section id="programs" className="programs">

            <div className="programs-container">

                {/* TITLE */}

                <h2 className="programs-title">
                    PROGRAMS DESIGNED FOR
                    <br />
                    EVERY AGE GROUP
                </h2>

                <p className="programs-subtitle">
                    نقدم برامج تعليمية تناسب جميع المراحل العمرية
                </p>

                {/* CARD 1 */}

                <div className="program-card">

                    <div className="program-image">
                        <img src={baby} alt="" />
                    </div>

                    <div className="program-content">

                        <h3>Infants</h3>

                        <h4>الرضع</h4>

                        <p>
                            A Safe And Nurturing Environment
                            Focused On Early Sensory Development
                        </p>

                    </div>

                </div>

                {/* CARD 2 */}

                <div className="program-card reverse">

                    <div className="program-content">

                        <h3>Toddlers</h3>

                        <h4>الأطفال الصغار</h4>

                        <p>
                            Encouraging Communication,
                            Movement, And Social Interaction
                            Through Play
                        </p>

                    </div>

                    <div className="program-image">
                        <img src={toddler} alt="" />
                    </div>

                </div>

                {/* CARD 3 */}

                <div className="program-card">

                    <div className="program-image">
                        <img src={preschool} alt="" />
                    </div>

                    <div className="program-content">

                        <h3>Preschool</h3>

                        <h4>مرحلة ما قبل المدرسة</h4>

                        <p>
                            Building Confidence,
                            Creativity, And School
                            Readiness Skills
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Programs;