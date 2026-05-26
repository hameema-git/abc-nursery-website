import "./Leadership.css";

import leader2 from "../assets/images/leader2.jpeg";
import leader3 from "../assets/images/leader3.jpeg";

function Leadership() {

    return (

        <section className="leadership">

            <div className="leadership-container">

                <h2 className="leadership-title">
                    OUR LEADERSHIP TEAM
                </h2>

                <div className="leadership-grid">

                    {/* LEADER 1 */}

                    <div className="leader-card">

                        <img
                            src={leader2}
                            alt="Hadeel"
                        />

                        <h3>Hadeel</h3>

                        <p>Nursery Manager</p>

                    </div>

                    {/* LEADER 2 */}

                    <div className="leader-card">

                        <img
                            src={leader3}
                            alt="Gemma"
                        />

                        <h3>Gemma</h3>

                        <p>Administrator</p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Leadership;