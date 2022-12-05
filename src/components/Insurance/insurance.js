import "./insurance.css";
import Fade from 'react-reveal/Fade';
import anthem from "../../assets/images/Anthem-Inc-logo.png";
import beacon from "../../assets/images/beacon-logo.png";
import blueCross from "../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png";
import cigna from "../../assets/images/Cigna_logo.svg.png";
import MHN from "../../assets/images/MHN_insurance_logo-1280x720.jpeg";
import molina from "../../assets/images/kisspng-molina-healthcare-of-michigan-health-care-logo-molina-healthcare-logo-5a737cd3408777.6855993915175180352643.png";
import unitedH from "../../assets/images/United-Healthcare-Logo.png";
import BottomContact from '../Bottom-Contact/bottom-contact';


function Insurance() {

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
            <BottomContact />
        </section>
    )
};

export default Insurance;