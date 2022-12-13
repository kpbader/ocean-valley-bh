import "./insurance.css";
import Fade from 'react-reveal/Fade';
import anthem from "../../assets/images/Anthem-Inc-logo.png";
import beacon from "../../assets/images/beacon-logo.png";
import blueCross from "../../assets/images/bluecross-blueshield-simple-modern-therapy-logo.png";
import cigna from "../../assets/images/Cigna_logo.svg.png";
import optima from "../../assets/images/4516741cOptum-logo-ora-RGB.webp"
import horizon from '../../assets/images/horizon-logo.webp';
import umr from '../../assets/images/umr-logo.webp';
import unitedH from "../../assets/images/United-Healthcare-Logo.png";
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';


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
                    <LazyLoadImage src={anthem} alt="anthem logo" />
                    <LazyLoadImage src={beacon} alt="anthem logo" />
                    <LazyLoadImage src={blueCross} alt="anthem logo" />
                    <LazyLoadImage src={cigna} alt="anthem logo" />
                    <LazyLoadImage src={optima} alt="logo" />
                    <LazyLoadImage src={horizon} alt="logo" />
                    <LazyLoadImage src={unitedH} alt="logo" />
                    <LazyLoadImage src={umr} alt="logo" />
                </div>
            </Fade>
            <BottomContact />
        </section>
    )
};

export default Insurance;