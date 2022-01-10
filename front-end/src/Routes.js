/*
Routes.js
Author: Derek Jeong
Description: Routes.js is a react hook component for routing page to page with link/url.
*/

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import WebDev from "./containers/WebDev";
import AppDev from "./containers/AppDev";
import Design from "./containers/Design";
import Forbidden from "./components/403";
import NotFound from "./components/404";
import AboutUs from "./containers/AboutUs";
import Careers from "./containers/Careers";
import Herald from "./containers/products/Herald";
import Blog from "./containers/Blog";

export default function Routes() {

        return (
                <Switch>
                        <Route exact path="/">
                                <Home />
                        </Route>
                        <Route exact path="/web-development">
                                <WebDev />
                        </Route>
                        <Route exact path="/app-development">
                                <AppDev />
                        </Route>
                        <Route exact path="/design">
                                <Design />
                        </Route>
                        <Route exact path="/about-us">
                                <AboutUs />
                        </Route>
                        <Route exact path="/careers">
                                <Careers />
                        </Route>
                        <Route exact path="/products/wizrds-herald">
                                <Herald />
                        </Route>
                        <Route exact path="/blog">
                                <Blog />
                        </Route>
                        <Route exact path="/products/yummmmm">
                                <Blog />
                        </Route>
                        <Route exact path="/403">
                                <Forbidden />
                        </Route>
                        <Route>
                                <NotFound />
                        </Route>
                </Switch>
        );
}