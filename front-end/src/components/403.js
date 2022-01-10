/*
403.js
Author: Derek Jeong
Description: 403.js is a react hook component for rendering 403 error page.
*/

import React from "react";
import "./404.css";

export default function Forbidden() {
        return (
                <div className="NotFound text-center">
                        <h3>Sorry, Access to this resource on the server is denied!</h3>
                </div>
        );     
}