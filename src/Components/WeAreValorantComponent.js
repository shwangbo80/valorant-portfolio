import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap"
import logo from '../Img/valorant_logo_long.png'

function WeAreValorant() {
    return (
        <Container fluid className="weAreValorantBg bgContainer">
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <Row>
                        <Col>
                            <h1 className="big_header my-5 py-5">WE ARE VALORANT</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <h1>DEFY THE LIMITS</h1>
                            <p>
                                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                            </p>
                            <h2>
                                <a className="mt-5" className="text-danger">
                                    Watch more gameplay videos here.
                                </a>
                            </h2>
                        </Col>
                        <Col md={7}>
                            <div className="videoContainer">
                                <iframe width="510px" height="300px" src="https://www.youtube.com/embed/zRxGS1RhWKk?playlist=zRxGS1RhWKk;controls=0&amp;start=48&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    );
}

export default WeAreValorant;
