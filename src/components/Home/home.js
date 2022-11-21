import "./home.css";
import splashVid from "../../assets/video/jt-footage.mp4";
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart, FaBriefcaseMedical, FaSwimmer, FaLaptopMedical } from "react-icons/fa";
import { useState, useRef } from 'react';
import recreation from "../../assets/images/pawan-thapa-38dVG7wNAow-unsplash.jpg"


function Home() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

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
                        <h2>Find healing and peace of mind</h2>
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
                                {/* <Card.Text>
                                    Therapy and support groups for mental health disorders
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaSwimmer className="service-icon" />
                            <Card.Body>
                                <Card.Title>Recreation</Card.Title>
                                {/* <Card.Text>
                                    Compassionate staff that is dedicated to your success
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaBriefcaseMedical className="service-icon" />
                            <Card.Body>
                                <Card.Title>Rehabilitation</Card.Title>
                                {/* <Card.Text>
                                    Evidence-based practices that give you the best chance of recovery
                                </Card.Text> */}
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
                        {/* <FaLaptopMedical className="service-icon" id="choose-us-icon" /> */}
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
                    <img src={recreation} alt="recreation"/>
                </Fade>
            </div>
        
            <div id="bottom-contact-container">
                <Fade left>
                    <form id="contact-form">
                        <h3 id="hp-contact-form-header">Have questions?</h3>
                        <h4>Don't wait! Our staff is ready to help. Reach out today.</h4>
                        <div id="form-slot-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={name} name="name" />
                        </div>
                        <div id="form-slot-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" defaultValue={email} name="email" />
                        </div>
                        <div id="form-slot-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" defaultValue={message} rows="10" cols="45" />
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </Fade>
                <Fade right>
                    <div id="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.063180590256!2d-117.82638843022458!3d33.7602577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbcd13d3be81%3A0x3d8e1cca1625b0c7!2s13961%20Mauve%20Dr%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1667494799764!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Home;