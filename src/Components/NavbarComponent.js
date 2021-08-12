import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>

        <Link to="/">
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

            <Link to="/maps">
              <Navbar.Brand className="mx-3">
                Maps
              </Navbar.Brand>
            </Link>

          </Nav>
          <Nav>
            <Link to="/signup">

              <Button className="btn-lg btn-danger">
                SIGN IN
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
