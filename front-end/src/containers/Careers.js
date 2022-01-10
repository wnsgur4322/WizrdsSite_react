/*
Careers.js
Author: Derek Jeong
Description: Careers.js is a react hook component for rendering 'Careers' page of the official webwizrd site.
*/

import React, { useState }  from "react";
import {
	Grid, Button, Divider, IconButton
	} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import Alert from '@material-ui/lab/Alert';

// images
import header_img from "../img/header_img.jpeg"
// css
import "./Careers.css";

export default function Careers() {

        const careerContents = [
                {label: "Front-end Developer"},
                {label: "Back-end Developer"},
                {label: "Full-Stack Developer"},
                {label: "UI/UX Designer"},
                {label: "Tester"},
                {label: "Software Architect"}
        ];

        return (
                <div className="Careers">
                        <header>
                                <div className = "head-image"> 
                                <img src={header_img} alt="header" style={{width: "100%", height: window.innerWidth > 760 ? "300px" : "150px", objectFit: "cover"}}/>
                                </div>
                                <div className='text-on-image'>
                                        <p>Join Our Team</p>
                                </div>
                        </header>
			<Grid
			key={0} 
			container
			spacing={0}
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{width: "100%", margin: "0 auto", paddingTop: "5%"}}
			>
                                <Grid item xs={10} style={{textAlign: "center"}}>
                                        <h1>Be A Wizrd</h1>
                                        <p style={{width: "80%", margin: "0 auto"}}>We are not currently hiring. Check back soon.</p>
                                </Grid>
                        </Grid>
			<Grid
			key={1} 
			container
			spacing={0}
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{width: "80%", margin: "0 auto", marginTop: "5%"}}
			>
                                {careerContents.map((content, i) => (
                                <Grid key={i }item xs={4} style={{textAlign: "center", paddingTop: "2%"}}>
                                        <h4 className="roles">{content.label}</h4>
                                </Grid>
                                ))}
                        </Grid>
                </div>
        );

        
}
