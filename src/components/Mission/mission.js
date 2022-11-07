import "./mission.css";
import Fade from 'react-reveal/Fade';
import { useState, useRef } from 'react';

function Mission() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="mission-page">
            <div id="mission-top">
                <Fade up>
                    <h2>Our Mission</h2>
                    <p>Our mission is to create an environment where each individual has the right and opportunity to develop a solid foundation towards long-term sobriety. Ocean Valley Behavioral Health  will provide every individual a quiet, calm, and safe place to begin the journey.
                        It is our philosophy that in order to reduce the incidence and prevalence of substance abuse and other behavioral health problems among adults through the provision of addiction treatment services, each individual must be empowered to make decisions about their care with the expected outcome of an increased quality of life. </p>
                </Fade>
            </div>
            <div id="bottom-contact-container">
                <Fade left>
                    <form id="contact-form">
                        <p id="hp-contact-form-header">Reach Out</p>
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
                    <div id="info-and-map">
                        <div id="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.063180590256!2d-117.82638843022458!3d33.7602577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbcd13d3be81%3A0x3d8e1cca1625b0c7!2s13961%20Mauve%20Dr%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1667494799764!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Mission;