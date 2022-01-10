/*
Herald.js
Author: Derek Jeong
Description: Herald.js is a react hook component for rendering Wizrds-herald page of the official webwizrd site.
*/

import React, { useState }  from "react";
import {
	Grid, Button, Divider, Paper
	} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import Alert from '@material-ui/lab/Alert';

// images

// css
import "./Products.css";

export default function Herald() {
	const history = useHistory();

    return (
		<div className="Products">
			<Grid
			container
			spacing={2}
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{width: window.innerWidth > 760 ? "90%" : "90%", margin: "0 auto"}}
			>
				<Grid item xs={window.innerWidth > 760 ? 6 : 12} style={{textAlign: window.innerWidth > 760 ? "left" : "center"}}>
					<div style={{width: "70%", margin: "0 auto"}}>
						<h2 className="header">Wizrds' Herald</h2>
						<h4 style={{color: "black"}}>Excel with Wizrd-Ware</h4>
						<h4 style={{color: "Gray"}}>Make magic happen with this one-of-a-kind tool.</h4>
						<p>Connect with your fans, team, customers, and more with our one-of-a-kind app that allows you to send SMS, MMS, and email, for updates, announcements, and more. <span style={{color: "red"}}>(Coming Soon)</span> </p>
						<Divider style={{width: window.innerWidth > 760 ? "90%" : "100%", border: "1px solid black"}}/>
						<Button 
							size="medium" 
							color="primary"
							onClick={() => console.log("onclick !")}
							style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
							color: "black", backgroundColor: "transparent", textTransform: "none", border: "black 1px solid", outline: "none", marginTop: "7%"}}>
							More info
						</Button>
					</div>
				</Grid>
				<Grid item xs={window.innerWidth > 760 ? 6 : 12}>
					<Paper style={{ boxShadow: "0px 0px 9px 5px rgba(0,0,0,0.36)", backgroundColor: "gainsboro", 
					margin: "0 auto", marginTop: "20px", marginBottom: "20px", 
					display: "block", width: window.innerWidth > 760 ? "80%" : "100%", height: "300px"}}>
						<h2 style={{verticalAlign: "middle", textAlign: "center", lineHeight: "250px"}}>Coming soon</h2>
					</Paper>
					<Row className="mb-3 center" style={{textAlign: "center", margin: "0 auto", display: "block"}}>
					<Button
						as={Col}
						size="medium" 
						color="primary"
						onClick={() => console.log("onclick!")}
						style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
						color: "white", backgroundColor: "#A13AFE", textTransform: "none", border: "none", outline: "none", marginRight: "10px"}}>
						Buy Now
					</Button>
					<Button
						as={Col}
						size="medium" 
						color="primary"
						onClick={() => console.log("onclick!")}
						style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
						color: "black", backgroundColor: "transparent", textTransform: "none", border: "black 1px solid", outline: "none"}}>
						Subscribe
					</Button>
					</Row>
				</Grid>
			</Grid>
		</div>
    );
}
