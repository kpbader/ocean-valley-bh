import "./mission.css";
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';

function Mission() {

    return (
        <section id="mission-page">
            <div id="mission-top">
                <Fade up>
                    <h2>Our Mission</h2>
                    <p>Our mission is to create an environment where each individual has the right and opportunity to develop a solid foundation towards long-term sobriety. Ocean Valley Behavioral Health  will provide every individual a quiet, calm, and safe place to begin the journey.
                        It is our philosophy that in order to reduce the incidence and prevalence of substance abuse and other behavioral health problems among adults through the provision of addiction treatment services, each individual must be empowered to make decisions about their care with the expected outcome of an increased quality of life. </p>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Mission;