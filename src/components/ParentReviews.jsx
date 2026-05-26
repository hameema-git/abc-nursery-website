import "./ParentReviews.css";

import aminaImg from "../assets/images/Amina Khan.jpg";

function ParentReviews() {

    const reviews = [

        {
            text: "ABC Nursery has been amazing for my child. The teachers are caring, and the environment is very safe and welcoming.",
            name: "Amina Khan",
            role: "Parent of KG Student",
            image: aminaImg
        },

        {
            text: "My child loves going to nursery every day. I've seen great improvement in communication and confidence.",
            name: "Sara Ahmed",
            role: "Parent of KG Student",
            image: null
        },

        {
            text: "The teachers are caring and supportive. My child has become more confident and excited to learn.",
            name: "Saeed Al Kaabi",
            role: "Parent of KG Student",
            image: null
        },

        {
            text: "The activities are fun and educational. We can clearly see positive growth in our child.",
            name: "Abdullah Al Ameri",
            role: "Parent of KG Student",
            image: null
        },

        {
            text: "The staff are kind, patient, and professional. My child feels comfortable and happy every day.",
            name: "Maryam",
            role: "Parent of KG Student",
            image: null
        }

    ];

    return (

        <section className="reviews">

            <div className="reviews-container">

                {/* TITLE */}

                <h2 className="reviews-title">
                    WHAT PARENTS SAY
                </h2>

                <p className="reviews-subtitle">
                    Hear From Our Happy Parents About Their
                    Experience With ABC Nursery
                </p>

                {/* CARDS */}

                <div className="reviews-slider">

                    {
                        reviews.map((review, index) => (

                            <div
                                className="review-card"
                                key={index}
                            >

                                <p className="review-text">
                                    {review.text}
                                </p>

                                <div className="review-bottom">

                                    <div className="review-user">

                                        {/* IMAGE / EMOJI */}

                                        <div className="review-avatar">

                                            {
                                                review.image ? (

                                                    <img
                                                        src={review.image}
                                                        alt={review.name}
                                                    />

                                                ) : (

                                                    <span>🙂</span>

                                                )
                                            }

                                        </div>

                                        <div>

                                            <h4>
                                                {review.name}
                                            </h4>

                                            <span>
                                                {review.role}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="quote">
                                        ❞
                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>

                {/* DOTS */}

                <div className="review-dots">

                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </section>
    );
}

export default ParentReviews;