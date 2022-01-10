/*
Home.js
Author: Derek Jeong
Description: Home.js is a react hook component for rendering Home page of the official webwizrd site.
*/

import React, { useState }  from "react";
import {
	Grid, CardMedia, Button, Paper, Divider, TextField
	} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Form, Col, Row } from "react-bootstrap";
import Carousel from 'react-material-ui-carousel';
import { useHistory } from "react-router-dom";

// images
import wizrds_logo from "../img/wizrds_logo.png";
import herald from "../img/ad/Herald's.png";
import yummmmm from "../img/ad/yummmmm.png";
import webDev from "../img/services/Web_development.svg";
import appDev from "../img/services/App_development.svg";
import UXUI from "../img/services/UX_UI.svg";
import ContactWizrd from "../img/ContactWizrd.svg";

// css
import "./Home.css";

export default function Home() {
	const history = useHistory();

	
    // Ad box text for carousel
	const ADitems = [
		{
			description: "Connect with your fans, team, and customers with our one-of-a-kind app that allows you to send SMS, MMS, and email, for updates, announcements, and more.",
			ad_img: herald,
			link: "products/wizrds-herald",
			btnColor: "#A13AFE"
		},
		{
			description: "Order from your favorite local restaurants, get access to recipes, and discover some delicious deals. Mmmmm...That's good.",
			ad_img: yummmmm,
			link: "products/yummmmm",
			btnColor: "#F2BD2B"
		}
	];

	// render ad item with Paper
	function AdItem(props)
	{
		return (
			<div>
				<Paper style={{ boxShadow: "0px 0px 9px 5px rgba(0,0,0,0.36)", backgroundColor: "transparent", 
				margin: "0 auto", marginTop: "20px", marginBottom: "20px", 
				display: "block", width: window.innerWidth > 760 ? "80%" : "300px"}}>
					<CardMedia
					component="img"
					image={props.item.ad_img}
					alt={"ad"}
					style={{width: window.innerWidth > 760 ? "100%" : "100%", margin: "0 auto", objectFit: "fill"}}
					height="300"
					/>
				</Paper>
				<div style={{marginBottom: "50px"}}>
					<h4 style={{marginBottom: "15px"}}>{props.item.description}</h4>
					<Button 
					size="medium" 
					color="primary"
					onClick={() => history.push("/" + props.item.link)}
					style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
						color: "white", backgroundColor: props.item.btnColor, textTransform: "none", border: "none", outline: "none"}}>
					Explore
					</Button>
				</div>
			</div>
		)
	};

	// text varialbes for services containers
	const servicesContents = [
		{ direction: "row-reverse", img: webDev, header: "Website Development", price: "Custom Website", 
		description: "Our developers will work on creating a custom website with your own features, animation, and layout. Grow your business with your own website.",
		exploreFunction: () => history.push("/web-development")},
		{ direction: "row", img: appDev, header: "App Development", price: "Custom App", 
		description: "Be the next big thing! Get the app you always wanted!",
		exploreFunction: () => history.push("/app-development")},
		{ direction: "row-reverse", img: UXUI, header: "Design", price: "Wireframing or CSS Coding", 
		description: "Our designers can create a wireframe/layout for your website or app, or we can make your old website or app look brand new!",
		exploreFunction: () => history.push("/design")}
	];

	// contact wizrds form part
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const [submitFailed, setSubmitFailed] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);
	const [msg, setMsg] = useState("");

	const setField = (field, value) => {
		setForm({
		  ...form,
		  [field]: value
		})
	// Check and see if errors exist, and remove them from the error object:
		if ( !!errors[field] ) setErrors({
		  ...errors,
		  [field]: null
		})
	}

	const findFormErrors = () => {
			const { organization, email, name  } = form;
			const newErrors = {};       

			if (!organization || organization === '') newErrors.organization = 'This field cannot be blank'
			if (! email ||  email === '') newErrors.email = 'This field cannot be blank'
			if (! name ||  name === '') newErrors.name = 'This field cannot be blank'

			return newErrors
	}

	async function handleContactSubmit(event) {
		event.preventDefault();

		const newErrors = findFormErrors();
		setSubmitFailed(false);
		setSubmitSuccess(false);

		if (Object.keys(newErrors).length > 0) {
				setErrors(newErrors);
		} else {
				const data = {
					sender: form.email,
					organization: form.organization,
					name: form.name,
					content: form.textarea
				}
				await fetch('/api/mail/send', {
					method: 'POST',
					port: 3080,
					headers: { 
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then(async response => {
					console.log(response.headers.get('Content-Type'));
					// const data =  await response.json();
					console.log("-- data:", response);
					console.log("-- res.status:", response.status);
					setMsg("something went wrong");
					if(!response.ok){
						console.log("something went wrong", response.status);
						const error = (response && response.statusText) || response.status;
						return Promise.reject(error);
					} else{
						if (response.ok) {
							setSubmitSuccess(true);
							setMsg("Thank you for reaching out! our team will contact you soon");
							document.getElementById("contactForm").reset();
							console.log("--res.data:", response);
						}
						return response.data;
					}
				})
				.catch((err) => {
					setSubmitFailed(true);
					setSubmitSuccess(false);
					console.error("-- error:", err);
				})
				console.log("end fetch call");
		}
	}

  	return (
		<div className="Home">
			{/* ad box carousel */}
			<div id="coming-soon">
			<Grid
			key={0} 
			container
			spacing={0}
			direction="row"
			justifyContent="center"
			alignItems="center"
			style={{width: window.innerWidth > 760 ? "50%" : "100%", margin: "0 auto"}}
			>
					<Grid item xs={10} style={{textAlign: "center"}}>
						<Carousel 
						fullHeightHover={false}
						navButtonsWrapperProps={{   
								// Move the buttons to the bottom. Unsetting top here to override default style.
								style: {
								bottom: '1',
								top: '1',
								}
						}}
						navButtonsProps={{          
								// Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
								style: {
									backgroundColor: 'grey',
								}
						}}
						indicatorIconButtonProps={{
							style: {
								padding: '10px',
								outline: 'none',
								border: 'none'
							}
						}}
						activeIndicatorIconButtonProps={{
							style: {
								color: '#A13AFE'
							}
						}}
						indicators={true}
						>
						{
								ADitems.map( (item, i) => <AdItem key={i} item={item}/> )
						}
						</Carousel>
					</Grid>
			</Grid>
			</div>
			<br /><br />
			{/* services part */}
			<div id="our-services">
				{servicesContents.map((item, i) => (
				<div key={i + 1} >
				<Grid
				container
				spacing={3}
				direction={item.direction}
				justifyContent="center"
				alignItems="center"
				style={{width: window.innerWidth > 760 ? "90%" : "90%", margin: "0 auto"}}
				>
					<Grid item xs={window.innerWidth > 760 ? 6 : 12} style={{textAlign: "center"}}>
						<img src={item.img} alt="svg"/>
					</Grid>
					<Grid item xs={window.innerWidth > 760 ? 6 : 12} style={{textAlign: "center"}}>
					<h2 className="header">{item.header}</h2>
					<h4>{item.price}</h4>
					<p>{item.description}</p>
					<Button 
						size="medium" 
						color="primary"
						onClick={item.exploreFunction}
						style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
							color: "black", backgroundColor: "transparent", textTransform: "none", border: "black 2px solid"}}>
						Explore
					</Button>
					</Grid>
				</Grid>
				<Divider variant="middle" style={{width: "90%", margin: "0 auto"}}/>
				</div>
				))}
			</div>
			<br /><br />
			{/* contact wizrds part */}
			<div id="contact-us">
				<h1 style={{textAlign: "center"}}>Contact A Wizrd</h1>
				<br />
				<Grid
				key={4} 
				container
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="center"
				style={{width: window.innerWidth > 760 ? "90%" : "90%", margin: "0 auto"}}
				>
					<Grid item xs={window.innerWidth > 760 ? 6 : 12} style={{textAlign: "center"}}>
						<img src={ContactWizrd} alt="svg"/>
					</Grid>
					<Grid item xs={window.innerWidth > 760 ? 6 : 12}>
						<Form id={"contactForm"} onSubmit={handleContactSubmit} style={{textAlign: "left", width: "80%", margin: "0 auto"}}>
							<Form.Group className="formBox" size="md" controlId="text">
								<Form.Label>Organization *</Form.Label>
								<Form.Control
								type="text"
								onChange={(e) => setField('organization', e.target.value)}
								isInvalid={!!errors.organization}
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.organization}
								</Form.Control.Feedback>
							</Form.Group>
							<Row className="mb-3">
							<Form.Group as={Col} className="formBox" size="md" controlId="text">
								<Form.Label>Email *</Form.Label>
								<Form.Control
								type="email"
								onChange={(e) => setField('email', e.target.value)}
								isInvalid={!!errors.email}
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} className="formBox" size="md" controlId="text">
								<Form.Label>Name *</Form.Label>
								<Form.Control
								type="text"
								onChange={(e) => setField('name', e.target.value)}
								isInvalid={!!errors.name}
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.name}
								</Form.Control.Feedback>
							</Form.Group>
							</Row>
							<Form.Group 
								className="formBox"
								size="md" 
								controlId="textarea" 
								>
								<Form.Control
								as="textarea"
								rows={5}
								placeholder="Type your questions, comments, or project description here, and one of the Wizrds will get back to you."
								onChange={(e) => setField('textarea', e.target.value)}
								/>
							</Form.Group>
							<br />
							{submitFailed && <Alert severity="error" style={{marginBottom: "10px"}}>{msg}</Alert> }
							{submitSuccess && <Alert severity="success" style={{marginBottom: "10px"}}>{msg}</Alert> }
							<Button
								type="submit"
								size="medium" 
								color="primary"
								style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "25%" : "40%",
								color: "white", backgroundColor: "#A13AFE", textTransform: "none", border: "none", outline: "none", display: "block", margin: "0 auto" }}>
								Submit
							</Button>
						</Form>
					</Grid>
				</Grid>
			</div>
		</div>
  	);
}
