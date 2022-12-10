import "./mission.css";
import Fade from 'react-reveal/Fade';
import BottomContact from '../Bottom-Contact/bottom-contact';

function Mission() {

    return (
        <section id="mission-page">
            <div id="mission-top">
                <Fade up>
                    <h2>Our Mission</h2>
                    <p>To build a solid foundation for recovery in an environment of healing to long-term sobriety.</p>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Mission;