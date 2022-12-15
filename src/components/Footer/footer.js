import "./footer.css";
import footerLOGO from "../../assets/images/ovbh_placeholder-1-01.png";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="footer">
                <img id="footer-logo" src={footerLOGO} alt="footer logo" />
            <Nav id="footer-navLinks">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/ocean-valley-bh" className="footer-nav-tab" onClick={scrollToTop}>Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/treatment" className="footer-nav-tab" onClick={scrollToTop}>Treatment</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/mission" className="footer-nav-tab" onClick={scrollToTop}>Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="footer-nav-tab" onClick={scrollToTop}>About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insurance" className="footer-nav-tab" onClick={scrollToTop}>Insurance</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="footer-nav-tab" onClick={scrollToTop}>Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </section>
    )
};

export default Footer;