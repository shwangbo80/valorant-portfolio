import React from "react";
import { Container, Row, Image } from "react-bootstrap"
import logo from '../Img/valorant_logo_long.png'

function Hero() {
  return (
    <Container fluid className="heroImage">
      <Row className="heroContainer">
        <div className="d-flex align-items-center justify-content-center">
          <Container className="text-center">
            <h1 className="text-light hero-text">A 5v5 character-based tactical shooter</h1>
            <Image src={logo} className="pngImg valorant_logo" fluid />
            <button className="playFreeBtn" size="lg">PLAY FREE</button>
          </Container>
        </div>
      </Row>
    </Container>
  );
}

export default Hero;
