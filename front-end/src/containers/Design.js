/*
Design.js
Author: Derek Jeong
Description: Design.js is a react hook component for rendering Web Development page of the official webwizrd site.
*/

import React, { useState }  from "react";
import {
	Grid, Button, Divider, IconButton
	} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Form, Col, Row } from "react-bootstrap";
import Alert from '@material-ui/lab/Alert';

// images

// css
import "./Services.css";

export default function Design() {
	const history = useHistory();
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
	<div className="Services">
		<Grid
		container
		spacing={3}
		direction="row"
		justifyContent="center"
		alignItems="center"
		style={{width: window.innerWidth > 760 ? "90%" : "90%", margin: "0 auto"}}
		>
			<Grid item xs={window.innerWidth > 760 ? 5 : 12} style={{textAlign: window.innerWidth > 760 ? "left" : "center"}}>
				<h2 className="header">Design</h2>
				<h4>Get your dream designed right</h4>
				<p>Services include wireframe design and updating your current website or app's layout/design.</p>
				<Divider style={{width: window.innerWidth > 760 ? "90%" : "100%", border: "1px solid black"}}/>
				<Button 
					size="medium" 
					color="primary"
					onClick={() => console.log("onclick !")}
					style={{ borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "20%" : "40%",
					color: "black", backgroundColor: "transparent", textTransform: "none", border: "black 1px solid", outline: "none", marginTop: "7%"}}>
					More info
				</Button>
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
							placeholder="Questions, or project description"
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
	);
}