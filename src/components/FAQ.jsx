import "./FAQ.css";

import { useState } from "react";

function FAQ() {

    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [

        {
            question: "What age groups do you accept?",
            answer: "We offer programs for infants, toddlers, and preschool children."
        },

        {
            question: "What are your working hours?",
            answer: "We are open Monday to Friday, from 7:00 AM to 5:00 PM."
        },

        {
            question: "Is the environment safe for children?",
            answer: "Yes, we provide a safe and child-friendly environment with trained staff and safety measures."
        },

        {
            question: "Can I visit the nursery before enrolling?",
            answer: "Yes, parents are welcome to visit the nursery before enrollment."
        },

        {
            question: "Do you provide transportation services?",
            answer: "Yes, transportation services are available in selected areas."
        }

    ];

    const toggleFAQ = (index) => {

        if(openIndex === index){

            setOpenIndex(null);

        }else{

            setOpenIndex(index);
        }
    };

    return (

        <section className="faq">

            <div className="faq-container">

                {/* TITLE */}

                <h2 className="faq-title">
                    FREQUENTLY ASKED QUESTIONS
                </h2>

                {/* FAQ LIST */}

                <div className="faq-list">

                    {
                        faqs.map((item, index) => (

                            <div
                                className={`faq-card ${openIndex === index ? "active" : ""}`}
                                key={index}
                            >

                                {/* QUESTION */}

                                <div
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >

                                    <h3>
                                        {item.question}
                                    </h3>

                                    <span>
                                        {openIndex === index ? "−" : "+"}
                                    </span>

                                </div>

                                {/* ANSWER */}

                                {
                                    openIndex === index && (

                                        <p className="faq-answer">
                                            {item.answer}
                                        </p>
                                    )
                                }

                            </div>
                        ))
                    }

                </div>

            </div>

        </section>
    );
}

export default FAQ;