import "./about.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import VW from '../../assets/images/matt-jones-dgLp5y_Jhuw-unsplash.webp';
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
                        <p>Ocean Valley Behavioral Health provides a quiet, calm, and safe place to journey towards healing. We believe that in reducing substance abuse and other behavioral health complications among adults by providing addiction treatment services.</p>
                        <p>We understand each person must be empowered to make the right decisions about their care and improve your quality of life. That's why our team focuses on getting you set up with the right treatment program that works for you.</p>
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
                        <p>See the full breakdown of our treatments and services.</p>
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