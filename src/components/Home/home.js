import "./home.css";
import splashVid from "../../assets/video/jt-footage.mp4";
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHandHoldingHeart, FaBriefcaseMedical, FaSwimmer } from "react-icons/fa";
import recreation from "../../assets/images/pawan-thapa-38dVG7wNAow-unsplash.jpg";
import BottomContact from '../Bottom-Contact/bottom-contact';


function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="home-page">
            <div id="home-splash">
                <video src={splashVid} autoPlay muted loop playsInline className='video-bg' />
                <Fade up>
                    <div id="home-splash-text">
                        <h2>Healing. Recovery. Peace of mind.</h2>
                        <button id="home-splash-btn">
                            <Link to="/contact">Get Help Now</Link>
                        </button>
                    </div>
                </Fade>
            </div>
            <div id="our-services">
                <Fade up>
                    <div id="our-services-header">
                        <h3>What We Do</h3>
                    </div>
                    <div id="our-services-cards">
                        <Card>
                            <FaHandHoldingHeart className="service-icon" />
                            <Card.Body>
                                <Card.Title>Recovery</Card.Title>
                            
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaSwimmer className="service-icon" />
                            <Card.Body>
                                <Card.Title>Recreation</Card.Title>
                                
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaBriefcaseMedical className="service-icon" />
                            <Card.Body>
                                <Card.Title>Rehabilitation</Card.Title>
                    
                            </Card.Body>
                        </Card>
                    </div>
                    <button className="link-btn" onClick={scrollToTop}>
                        <Link to="/mission">Learn More</Link>
                    </button>
                </Fade>
            </div>
            <div id="choose-us">
                <Fade left>
                    <div id="choose-us-text">
                        <h3>Why Choose Ocean Valley?</h3>
                        
                        <p>A safe, fun, engaging approach to sobriety. Join in activities with the Ocean Valley community:</p>
                        <h4>Group Events</h4>
                        <li>Picnics/BBQs</li>
                        <li>Chili cookoffs</li>
                        <li>Local sporting events</li>
                        <li>Going to the movies</li>
                        <h4>Sports and Activities</h4>
                        <li>Hiking</li>
                        <li>Laser tag</li>
                        <li>Bowling</li>
                        <li>Frisbee golf</li>
                        <li>Miniature golf</li>
                        <li>Horseback riding</li>
                        <li>Water activities</li>
                        <button onClick={scrollToTop} id="choose-us-btn">
                            <Link to="/treatment">Learn More</Link>
                        </button>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage id="choose-us-image" src={recreation} alt="recreation"/>
                </Fade>
            </div>
        <BottomContact />
        </section>
    )
};

export default Home;