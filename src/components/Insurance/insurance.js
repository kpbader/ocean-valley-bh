import "./insurance.css";
import Fade from 'react-reveal/Fade';
import { useState, useRef } from 'react';
import anthem from "../../assets/images/Anthem-Inc-logo.png";
import beacon from "../../assets/images/beacon-logo.png";
import blueCross from "../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png";
import cigna from "../../assets/images/Cigna_logo.svg.png";
import MHN from "../../assets/images/MHN_insurance_logo-1280x720.jpeg";
import molina from "../../assets/images/kisspng-molina-healthcare-of-michigan-health-care-logo-molina-healthcare-logo-5a737cd3408777.6855993915175180352643.png";
import unitedH from "../../assets/images/United-Healthcare-Logo.png";


function Insurance() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="insurance-page">
                <div id="insurance-top">
                    <Fade up>
                    <div id="insurance-top-text">
                        <h2>Insurance</h2>
                        <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                    </div>
                    </Fade>
                </div>
                <Fade up>
                <div id="insurance-logos">
                    <img src={anthem} alt="anthem logo" />
                    <img src={beacon} alt="anthem logo" />
                    <img src={blueCross} alt="anthem logo" />
                    <img src={cigna} alt="anthem logo" />
                    <img src={MHN} alt="anthem logo" />
                    <img src={molina} alt="anthem logo" />
                    <img src={unitedH} alt="anthem logo" />
                </div>
                </Fade>
            <div id="insurance-contact-container">
                <Fade left>
                    <form id="insurance-contact-form">
                        <p id="insurance-contact-form-header">Don't see your provider? Reach out to us for further verification.</p>
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
                    <div id="insurance-map">
                        <div id="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.063180590256!2d-117.82638843022458!3d33.7602577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbcd13d3be81%3A0x3d8e1cca1625b0c7!2s13961%20Mauve%20Dr%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1667494799764!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Insurance;