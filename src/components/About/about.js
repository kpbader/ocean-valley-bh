import "./about.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import VW from '../../assets/images/matt-jones-dgLp5y_Jhuw-unsplash.jpg';
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function About() {


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="about-page">
            <div id="about-top">
                <Fade up>
                    <div id="about-top-text">
                        <h2>Our Philosophy</h2>
                        <p>Ocean Valley Behavioral Health provides a quiet, calm, and safe place to begin your journey of healing. We believe that in order to reduce the occurrence and prevalence of substance abuse and other behavioral health problems among adults through the provision of addiction treatment services.</p>
                        <p>We understand that each individual must be empowered to make decisions about their care with the expected outcome of increased quality of life. That's where our team comes in. Helping you team up with a support system and treatment program that works for you.</p>
                    </div>
                </Fade>
            </div>
            <div id="aboutTwo">
                <Fade left>
                    <LazyLoadImage src={VW} alt="van" />
                </Fade>
                <Fade right>
                    <div id="aboutTwo-text">
                        <h2>Our Services</h2>
                        <p>See here for a full breakdown of our treatments and services.</p>
                        <button>
                            <Link to="/treatment" onClick={scrollToTop}>Treatment</Link>
                        </button>
                    </div>
                </Fade>
            </div>
        <BottomContact />
        </section>
    )
};

export default About;