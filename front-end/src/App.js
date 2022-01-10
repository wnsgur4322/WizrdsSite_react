/*
App.js
Author: Derek Jeong
Description: App.js is a react root component for rendering all react child hooks.
*/

import React, { useState, useEffect } from "react";
import './App.css';
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
    	<div className="App">
      		<Header/>
      		<Routes />
      		<Footer/>
    	</div>
  	);
}

export default App;
