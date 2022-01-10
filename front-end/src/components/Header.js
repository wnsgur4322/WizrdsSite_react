/*
Header.js
Author: Aditi Ranka
Description: Header.js is a react hook component for rendering the header part on all pages of the Webwizrds official site.
*/

import React, {useReducer} from "react";
import wizrds_logo from "../img/wizrds_logo.png";
import {Button} from '@material-ui/core';
import {Navbar, Nav} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "./Header.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import * as Scroll from 'react-scroll';


export default function Header() {
    // for scroll-down when button has clicked
    let Link = Scroll.Link;

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);       // for force update on react state
    const history = useHistory();
    const navButtonContents = [
        {label: "Our Services", link: "our-services"},
        {label: "Our Products", link: "coming-soon"},
        {label: "Contact Us", link: "contact-us"},
        {label: "About Us", link: "about-us"}
    ];
    
    const otherPage = (e, link) => {
        e.preventDefault();
        history.push("/" + link);
        forceUpdate();
    }

    const FromOtherPage = (e, link) => {
        e.preventDefault();
        if (window.location.pathname !== "/") {
            history.push('/');
            setTimeout(() => {
            const PageNode = document.getElementById(link);
            PageNode.scrollIntoView({behavior: "smooth"});
            }, 0);
        }
    }

    const navContructBttns = (label, link, i) => (
        label !== "About Us" ?
        <Button
            key={i}
            className="headerbtns" 
            style={{outline: "none", border: "none", textTransform: "none", marginLeft: "10px", display: "flex"}}
        >
            <Link className="btn-text" activeClass="active" onClick={(e) => FromOtherPage(e, link)} 
            to={link} spy={true} smooth={true}>{label} {label === "Our Products" ? <span style={{color: "red", fontSize: "0.9rem"}}><br />(Coming Soon)</span> : undefined}</Link>
        </Button> :
        <Button
            key={i}
            className="headerbtns" 
            style={{outline: "none", border: "none", textTransform: "none", marginLeft: "10px"}}
            onClick={(event) => otherPage(event, link)}
        >
            <p className="btn-text">{label}</p>
        </Button>
    );

    return (
        <div className="header-nav">
            <Navbar collapseOnSelect expand="sm"  className="head-nav">
                <Navbar.Brand>
                    <img className="header-logo d-inline-block align-top" src={wizrds_logo} alt="logo" 
                    onClick={() => {history.push("/"); forceUpdate();}} style={{cursor: "pointer"}}/>{' '}
                </Navbar.Brand>

                <NavbarToggle className="toggle-color" aria-controls='responsive-navbar-nav' bg="light"/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end nav-items" style={{ width: "100%" }}> 
                        {navButtonContents.map((item, i) => (
                        navContructBttns(item.label, item.link, i)))}
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

