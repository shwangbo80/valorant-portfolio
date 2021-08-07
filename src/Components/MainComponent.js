import React from 'react';
import MainNavbar from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
import HomePage from "./HomeComponent";
import AboutPage from "./AboutComponent";
import AgentsPage from "./AgentsComponent";
import MapsPage from "./MapsComponent";
import WeaponsPage from "./WeaponsComponent";
import SignupPage from "./SignupComponent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function MainComponent() {
    return (
        <Router>
            <MainNavbar />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route path="/agents">
                    <AgentsPage />
                </Route>
                <Route path="/maps">
                    <MapsPage />
                </Route>
                <Route path="/weapons">
                    <WeaponsPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
            <FooterComponent />
        </Router >
    );
}

export default MainComponent;