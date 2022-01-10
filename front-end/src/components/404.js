/*
404.js
Author: Derek Jeong
Description: 404.js is a react hook component for rendering 404 error page.
*/

import React from "react";
import "./404.css";

export default function NotFound() {
        return (
                <div className="NotFound text-center">
                        <h3>Sorry, page not found!</h3>
                </div>
        );     
}