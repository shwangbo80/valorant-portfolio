import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap"
import agents from '../Img/agents_1.png'

function YourMaps() {
    return (
        <Container fluid className="yourMapsBg bgContainer">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Row>
                        <Col>
                            <h1 className="big_header my-5 py-5 text-white">YOUR MAPS</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} >
                            <div className="videoContainer">
                                <iframe width="510px" height="300px" src="https://www.youtube.com/embed/EB4vFzY3MWc?playlist=zRxGS1RhWKk;controls=0&amp;start=48&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h1 className="text-white">FIGHT AROUND THE WORLD</h1>
                            <p className="text-white">
                                Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                            </p>
                            <Button href="/maps" className="btn-danger btn-lg">VIEW ALL MAPS</Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default YourMaps;
