import "./navBar.css";
import { Link } from 'react-router-dom';
import ovbhLOGO from "../../assets/images/ovbh_placeholder-1-01.png";
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {

// offCanvas 
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
// const onClick = () => setShow(true);

    return (
        <section id="nav-bar">
            <div id="nav-logo">
                <img src={ovbhLOGO} alt="OVBH logo" />
            </div>
            <Nav id="main-nav-links">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/ocean-valley-bh" className="header-nav-tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/mission" className="header-nav-tab">Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="header-nav-tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="header-nav-tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/ocean-valley-bh" className="header-nav-tab">Home</Link>
                            <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                            <Link to="/mission" className="header-nav-tab">Mission</Link>
                            <Link to="/about" className="header-nav-tab">About</Link>
                            <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                            <Link to="/contact" className="header-nav-tab">Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >
        </section>
    )
};

export default NavBar;