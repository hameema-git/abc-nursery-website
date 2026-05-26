import "./Contact.css";
import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({

        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        message: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const subject = "ABC Nursery Inquiry";

        const body = `
Name: ${formData.first_name} ${formData.last_name}

Phone: ${formData.phone}

Email: ${formData.email}

Message:
${formData.message}
        `;

        window.location.href = `mailto:nurseryabc1979@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (

        <section id="contact" className="contact">

            <div className="contact-top-shape"></div>

            <div className="contact-container">

                <h2 className="contact-title">
                    GET IN TOUCH
                </h2>

                <p className="contact-subtitle">
                    Needs Help? Let's Get In Touch
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="contact-form"
                >

                    <div className="form-row">

                        <input
                            type="text"
                            name="first_name"
                            placeholder="Name"
                            required
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="last_name"
                            placeholder="Your Last Name"
                            required
                            value={formData.last_name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-row">

                        <input
                            type="text"
                            name="phone"
                            placeholder="+971"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Id"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />

                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;