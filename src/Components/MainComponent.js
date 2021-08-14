import React from 'react';
import MainNavbar from "./NavbarComponent";
import HomePage from "./HomeComponent";
import AboutPage from "./AboutComponent";
import AgentsPage from "./AgentsComponent";
import MapsPage from "./MapsComponent";
import SignupPage from "./SignupComponent";
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

function MainComponent() {
    return (
        <Router>
            <ScrollToTop />
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
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
            <Footer />
        </Router >
    );
}

export default MainComponent;