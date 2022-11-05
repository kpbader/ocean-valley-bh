import "./home.css";
import splashVid from "../../assets/video/jt-footage.mp4";
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";

function Home() {
    return (
        <section id="home-page">
            <div id="home-splash">
                <video autoPlay muted loop>
                    <source src={splashVid} type="video/mp4" />
                </video>
                <Fade up>
                    <h2>Empowering individuals to overcome addiction and other life obstacles</h2>
                </Fade>
            </div>
            <div id="our-services">
                <div id="our-services-header">
                    <h3>What We Can Provide</h3>
                </div>
                <div id="our-services-cards">
                    <Card>
                        <HiUserGroup className="service-icon" />
                        <Card.Body>
                            <Card.Text>
                                Transportation, food, transitional housing
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                         <FaHandHoldingHeart className="service-icon" /> 
                        <Card.Body>
                            <Card.Text>
                                Job Placement
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        {/* <FaTshirt className="service-icon" /> */}
                        <Card.Body>
                            <Card.Text>
                                Clothing, medical, and EBT/GR assistance
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <button id="learn-more-btn">
                        <Link to="/what-we-do">Learn More</Link>
                    </button>
            </div>
        </section>
    )
};

export default Home;