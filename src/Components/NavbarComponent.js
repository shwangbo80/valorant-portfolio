import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>

        <Link to="/home">
          <Navbar.Brand>
            <img
              alt="valorant logo"
              src="./valorant_logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-4">

            <Link to="/about">
              <Navbar.Brand className="mx-3">
                About
              </Navbar.Brand>
            </Link>

            <Link to="/agents">
              <Navbar.Brand className="mx-3">
                Agents
              </Navbar.Brand>
            </Link>

            <Link to="/Maps">
              <Navbar.Brand className="mx-3">
                Maps
              </Navbar.Brand>
            </Link>

            <Link to="/weapons">
              <Navbar.Brand className="mx-3">
                Weapons
              </Navbar.Brand>
            </Link>

          </Nav>
          <Nav>
            <Link to="/signup">

              <Button className="btn btn-dark">
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
