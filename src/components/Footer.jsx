import "./Footer.css";

import logo from "../assets/images/abc logo.png";

import {
    FaWhatsapp,
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram
} from "react-icons/fa";

import {
    FaXTwitter,
    FaEnvelope,
    FaLocationDot
} from "react-icons/fa6";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* LOGO */}

                <div className="footer-logo-wrapper">

                    <img
                        src={logo}
                        alt="ABC Nursery"
                        className="footer-logo"
                    />

                </div>

                {/* TEXT */}

                <p className="footer-text">
                    A Safe And Nurturing Environment Where
                    Children Are Encouraged To Learn,
                    Grow, And Thrive With Confidence,
                    Curiosity, And Joy Every Day.
                </p>

                {/* WORKING HOURS */}

                <div className="footer-section">

                    <h3>Working Hours</h3>

                    <p>
                        Monday to Friday : 7:00 AM – 5:00 PM
                    </p>

                    <p>
                        Saturday & Sunday : Closed
                    </p>

                </div>

                {/* CONTACT */}

                <div className="footer-section">

                    <h3>Contact Us</h3>

                    {/* WHATSAPP */}

                    <a
                        href="https://wa.me/971506227041"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >

                        <FaWhatsapp className="footer-icon" />

                        050 622 7041

                    </a>

                    {/* EMAIL */}

                    <a
                        href="mailto:nurseryabc1979@gmail.com"
                        className="footer-link"
                    >

                        <FaEnvelope className="footer-icon" />

                        nurseryabc1979@gmail.com

                    </a>

                    {/* ADDRESS */}

                    <a
                        href="https://maps.app.goo.gl/rcaHCsGJ4WapoxNK7?g_st=awb"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link address-link"
                    >

                        <FaLocationDot className="footer-icon" />

                        Villa 149-151, Delma Street,
                        15th between Muroor - Airport Rd
                        near Zayed Al Thani School -
                        Abu Dhabi - UAE

                    </a>

                </div>

                {/* SOCIALS */}

                <div className="socials">

                    {/* <a href="#">
                        <FaLinkedinIn />
                    </a> */}

                    <a href="https://www.facebook.com/share/1BJHvJvbox/">
                        <FaFacebookF />
                    </a>

                    <a href="https://www.instagram.com/abc_nursery.abudhabi?utm_source=qr&igsh=MTk0ZGY4OG90NjRybw==">
                        <FaInstagram />
                    </a>

                    {/* <a href="#">
                        <FaXTwitter />
                    </a> */}

                </div>

                {/* MAP */}

                {/* <div className="map-container">

                    <iframe
                        title="ABC Nursery Location"
                        src="https://www.google.com/maps?q=24.4539,54.3773&z=15&output=embed"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div> */}


                {/* MAP */}

{/* <a
    href="https://maps.app.goo.gl/rcaHCsGJ4WapoxNK7?g_st=awb"
    target="_blank"
    rel="noreferrer"
    className="map-link"
>

    <div className="map-container">

        <iframe
            title="ABC Nursery Location"
            src="https://www.google.com/maps?q=24.4539,54.3773&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
        ></iframe>

    </div>

</a> */}

{/* <div className="map-wrapper">

    <div className="map-container">

        <iframe
            title="ABC Nursery Location"
            src="https://www.google.com/maps?q=24.4539,54.3773&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
        ></iframe>

    </div>

    <a
        href="https://www.google.com/maps/dir/?api=1&destination=24.4539,54.3773"
        target="_blank"
        rel="noreferrer"
        className="open-map-btn"
    >
        Open In Google Maps
    </a>

</div> */}

{/* MAP */}

<a
    href="https://maps.app.goo.gl/rcaHCsGJ4WapoxNK7?g_st=awb"
    target="_blank"
    rel="noreferrer"
    className="map-link"
>

    <div className="map-container">

        <iframe
            title="ABC Nursery Location"
            src="https://www.google.com/maps?q=24.4539,54.3773&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
        ></iframe>

        {/* CLICK OVERLAY */}

        <div className="map-overlay"></div>

    </div>

</a>

                {/* COPYRIGHT */}

                {/* <div className="copyright">

                    © 2024 ABC Nursery. All Rights Reserved

                </div> */}
                {/* <div className="copyright">

    Design And Developed By
    Credo Digital Designs LLC SPC.
    <br />

    For Enquiries :
    <a
        href="tel:+971509132555"
        className="copyright-link"
    >
        +971509132555
    </a>

</div> */}

{/* <div className="copyright">

    <p>
        Designed & Developed By
    </p>

    <h4>
        Credo Digital Designs LLC SPC
    </h4>

    <a
        href="tel:+971509132555"
        className="copyright-btn"
    >
        Contact Us
    </a>

</div> */}

<div className="copyright">

    <p>
        Designed & Developed By
    </p>

    <a
        href="https://wa.me/971509132555?text=Hello%20Credo%20Digital%20Designs%20LLC%20SPC"
        target="_blank"
        rel="noreferrer"
        className="credo-link"
    >
        Credo Digital Designs LLC SPC
    </a>

</div>

            </div>

        </footer>
    );
}

export default Footer;