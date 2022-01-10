/*
Footer.js
Author: Derek Jeong
Description: Footer.js is a react hook component for rendering the footer part on all pages of the Webwizrds official site.
*/

import React, { useState } from "react";
import wizrds_logo from "../img/wizrds_logo.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Linkedin from '@material-ui/icons/LinkedIn';
import { IconButton, Grid, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import "./Footer.css";


export default function Footer() {

        const history = useHistory();
        const buttonContents = [
                {label: "Careers", link: "careers"},
                {label: "Blog", link: "blog"},
                {label: "About Us", link: "about-us"},
                {label: "Contact Us", link: "contact-us"}
        ];

        const contructBttns = (label, link, i) => (
                <Button
                key={i}
                className="footerBttns" 
                size="small" 
                color="primary"
                style={{outline: "none", border: "none", textTransform: "none", marginLeft: "10px"}}
                onClick={(e) => FromOtherPage(e, link)}
                >
                <p className="Bttn-text">{label}</p>
                </Button>
        );

        const FromOtherPage = (e, link) => {
                e.preventDefault();
                if (link === "contact-us") {
                        history.push('/');
                        setTimeout(() => {
                        const PageNode = document.getElementById(link);
                        PageNode.scrollIntoView({behavior: "smooth"});
                        }, 0);
                }
                else {
                        history.push("/" + link);
                }
        }

        return (
		<div className="footer" style={{marginTop: "5%"}}>
                        <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{width: "100%", margin: "0 auto"}}>
                                <Grid item xs={4} className="para" style={{color: "white"}}>
                                {buttonContents.map((item, i) => (
                                contructBttns(item.label, item.link, i)
                                ))}
                                </Grid>
                                <Grid item xs={window.innerWidth > 760 ? 2 : 4} className="logo-align">
                                        <img className="logo" src={wizrds_logo} alt="logo" style={{width: window.innerWidth > 760 ? "40%" : "100%"}}/>
                                        <Grid item xs={12} className="para" style={{color: "white", textAlign: "center"}}>
                                        <p>&copy; 2022 Wizrds LLC.<br/> A Mister Waverly company.<br/> All rights reserved.</p>
                                        </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                        <ul className="social-icons">
                                                        <IconButton
                                                        edge="end"
                                                        aria-label="Menu"
                                                        onClick={() => window.open("https://twitter.com/WebWizrds", "_blank")}
                                                        style={{margin: "0 auto", outline: "none", border: "none"}}
                                                        type="add"
                                                        >
                                                        <Twitter className="social-icons"/>
                                                        </IconButton>                                  
                                                        <IconButton
                                                        edge="end"
                                                        aria-label="Menu"
                                                        onClick={() => window.open("https://www.facebook.com/webwizrds", "_blank")}
                                                        style={{margin: "0 auto", outline: "none", border: "none"}}
                                                        type="add"
                                                        >
                                                        <FacebookIcon className="social-icons"/>
                                                        </IconButton>                                     
                                                        <IconButton
                                                        edge="end"
                                                        aria-label="Menu"
                                                        onClick={() => window.open("https://www.linkedin.com/company/wizrds-llc", "_blank")}
                                                        style={{margin: "0 auto", outline: "none", border: "none"}}
                                                        type="add"
                                                        >
                                                        <Linkedin className="social-icons"/>
                                                        </IconButton>
                                        </ul>
                                </Grid>
                        </Grid>
                </div>
        );

}
