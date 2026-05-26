import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChoose from "./components/WhyChoose"
import Contact from "./components/Contact";
import Leadership from "./components/Leadership"
import ParentReview from "./components/ParentReviews"
import FAQ from "./components/FAQ"
import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {

    return (

        <ParallaxProvider>

            <Navbar />

            <Hero />

            <About />

            <Programs />
            <WhyChoose/>
            <Contact/>
            <Leadership/>
            <ParentReview/>
            <FAQ/>

            <Gallery />
            {/* <Contact/> */}

            <Footer />


            {/* WHATSAPP BUTTON */}

            <a
                href="https://wa.me/9710506227041"
                className="whatsapp-float"
                target="_blank"
            >

                <i className="fab fa-whatsapp"></i>

            </a>

            {/* CALL BUTTON */}

            <a
                href="tel:+9710506227041"
                className="call-float"
            >

                <i className="fas fa-phone-alt"></i>

            </a>
            

        </ParallaxProvider>

    );
}

export default App;

