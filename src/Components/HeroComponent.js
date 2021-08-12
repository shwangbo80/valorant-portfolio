import React from "react";
import { Button, Container, Row, Image } from "react-bootstrap"
import logo from '../Img/valorant_logo_long.png'

function Hero() {
  return (
    <Container fluid className="heroImage bgContainer">
      <Row>
        <div className="d-flex align-items-center justify-content-center">
          <Container className="text-center">
            <h1 className="text-light hero-text">A 5v5 character-based tactical shooter</h1>
            <Image src={logo} className="pngImg valorant_logo" fluid />
            <Button size="lg" style={{ fontSize: 20 }}>PLAY FREE</Button>
          </Container>
        </div>
      </Row>
    </Container>
  );
}

export default Hero;
