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

            <img src={ovbhLOGO} alt="OVBH logo" />

            <Nav id="main-nav-links">
                <Link to="/ocean-valley-bh" className="header-nav-tab">Home</Link>
                <Link to="/treatment" className="header-nav-tab">Treatment</Link>
                <Link to="/mission" className="header-nav-tab">Mission</Link>
                <Link to="/about" className="header-nav-tab">About</Link>
                <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                <Link to="/contact" className="header-nav-tab">Contact</Link>
            </Nav>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/ocean-valley-bh" className="header-nav-tab" onClick={handleClose}>Home</Link>
                            <Link to="/treatment" className="header-nav-tab" onClick={handleClose}>Treatment</Link>
                            <Link to="/mission" className="header-nav-tab" onClick={handleClose}>Mission</Link>
                            <Link to="/about" className="header-nav-tab" onClick={handleClose}>About</Link>
                            <Link to="/insurance" className="header-nav-tab" onClick={handleClose}>Insurance</Link>
                            <Link to="/contact" className="header-nav-tab" onClick={handleClose}>Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >
        </section>
    )
};

export default NavBar;