import React from "react";
import { Button, Container } from "react-bootstrap"

function Hero() {
  return (
    <Container fluid>
      <div className="heroImage d-flex align-items-center justify-content-center">
        <Container className="text-center">
          <h4 className="text-light hero-text">A 5v5 character-based tactical shooter</h4>
          <h1 className="text-light display-1 hero-text">Valorant</h1>
          <Button size="lg">PLAY FREE</Button>
        </Container>
      </div>
    </Container>
  );
}

export default Hero;
