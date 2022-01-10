/*
AboutUs.js
Author: Derek Jeong
Description: AboutUs.js is a react hook component for rendering 'about-us' page of the official webwizrd site.
*/

import React, { useState }  from "react";
import {
	Grid, Button, Divider, IconButton, Card, CardContent, CardActions, Typography, Box
	} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Linkedin from '@material-ui/icons/LinkedIn';

// images
import header_img from "../img/header_img.jpeg";
import collaboration from "../img/values/collaboration.svg";
import creativity from "../img/values/creativity.svg";
import integrity from "../img/values/integrity.svg";
import waverly from "../img/profile/waverly_profile.jpg";
import caleb from "../img/profile/caleb_profile.png";
import tariq from "../img/profile/tariq_profile.jpg";
import derek from "../img/profile/Derek_profile.jpg";
import aditi from "../img/profile/Aditi_profile.jpg";
import reilly from "../img/profile/Reilly_profile.jpg";
import rhys from "../img/profile/Rhys_profile.jpg";

// css
import "./AboutUs.css";

export default function AboutUs() {
        
        const valueContents = [
                {img: collaboration, label: "Collaboration", desc: "We commit to working with our clients to make their visions a reality."},
                {img: creativity, label: "Creativity", desc: "We believe in being bold in design to manifest the visions of our clients and produce work that showcases a unique user experience."},
                {img: integrity, label: "Integrity", desc: "We strive to be honest and true to the principles and practice of software development."}
        ];

        const [newteamClicked, setNewteamClicked] = useState("bold");
        const [pastTeamClicked, setPastTeamClicked] = useState("300");

        const [profileContents, setProfileContents] = useState([
                {name: "Tariq Elamin", img: tariq, position: "UI/UX Designer"},
                {name: "Waverly Hampton III", img: waverly, position: "CEO"},
                {name: "Derek Jeong", img: derek, position: "Front-End Developer"},
                {name: "Aditi Ranka", img: aditi, position: "Front-End Developer"},
                {name: "Reilly Thompson", img: reilly, position: "Full-Stack Developer"},
                {name: "Rhys Wright", img: rhys, position: "Back-End Developer"}
        ]);

        const newTeam = () => {
                setNewteamClicked("bold");
                setPastTeamClicked("300");
                setProfileContents([
                        {name: "Tariq Elamin", img: tariq, position: "UI/UX Designer"},
                        {name: "Waverly Hampton III", img: waverly, position: "CEO"},
                        {name: "Derek Jeong", img: derek, position: "Front-End Developer"},
                        {name: "Aditi Ranka", img: aditi, position: "Front-End Developer"},
                        {name: "Reilly Thompson", img: reilly, position: "Full-Stack Developer"},
                        {name: "Rhys Wright", img: rhys, position: "Back-End Developer"}
                ]);
        }

        const pastTeam = () => {
                setNewteamClicked("300");
                setPastTeamClicked("bold");
                setProfileContents([
                        {name: "Caleb Bender", img: caleb, position: "Back-End Developer"}
                ]);
        }

        return (
                <div className="AboutUs">
                        <header>
                                <img src={header_img} alt="header" style={{width: "100%", height: window.innerWidth > 760 ? "300px" : "150px", objectFit: "cover"}}/>
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
                                        <h1 style={{marginBottom: "5%"}}>Mission & Values </h1>
                                        <p style={{width: "80%", margin: "0 auto", fontSize: "1.2rem"}}>The Wizrds are a highly-skilled team of programmers whose mission is to develop dreams. <br /> We take pride in helping our clients make their visions reality, in addition to providing <br /> products that help individuals and small businesses reach their fullest potentials.</p>
                                </Grid>
                                {valueContents.map((item, i) => (
                                <Grid key={i} item xs={window.innerWidth > 760 ? 4 : 12} style={{marginTop: "5%", height: "300px"}}>
                                        <img src={item.img} alt="values" style={{width: "100px"}}/>
                                        <h2 style={{marginTop: "3%"}}>{item.label}</h2>
                                        <p style={{width: "80%", margin: "0 auto", fontSize: "1.2rem"}}>{item.desc}</p>
                                </Grid>
                                ))}
                                <Grid item xs={10} style={{marginTop: "20%", marginBottom: "3%"}}>
                                        <h1 style={{textAlign: "center"}}>Wizrds</h1>
                                </Grid>
                                <Grid item xs={5}>
                                <Button
                                key={0}
                                style={{outline: "none", border: "none", textTransform: "none", fontSize: "1.5rem", fontWeight: pastTeamClicked}}
                                onClick={pastTeam}
                                >
                                Past
                                </Button>
                                </Grid>
                                <Grid item xs={5}>
                                <Button
                                key={1}
                                style={{outline: "none", border: "none", textTransform: "none", fontSize: "1.5rem", fontWeight: newteamClicked}}
                                onClick={newTeam}
                                >
                                Present
                                </Button>
                                </Grid>
                        </Grid>
                        <Grid
			key={1} 
			container
			spacing={2}
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{width: "100%", margin: "0 auto"}}
			>
                                {profileContents.map((item, i) => (
                                <Grid key={i} item xs={window.innerWidth > 760 ? 4 : 6} style={{marginTop: "5%"}}>
                                        <Typography sx={{ fontSize: 15 }} color="textPrimary" gutterBottom>
                                        {item.name}
                                        </Typography>
                                        <img src={item.img} alt="avatar" className="avatar" />
                                        <Typography variant="h6" component="div" style={{marginTop: "3%"}}>
                                        {item.position}
                                        </Typography>
                                </Grid>
                                ))}
                        </Grid>
                </div>
        );

        
}
