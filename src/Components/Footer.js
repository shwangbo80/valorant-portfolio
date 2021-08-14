import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"
import riotLogo from "../Img/riot_logo_white.png"
import ratingImg from "../Img/rating.png"

function Footer() {
    return (
        <Container fluid className="footerContainer">
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <Container>
                        <Row>
                            <Col className="my-3">
                                <a href="https://playvalorant.com/en-us/" className="downloadLink"><h4 className="text-white mb-4">DOWNLOAD GAME CLIENT</h4></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Image src={riotLogo}></Image>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <div>© 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="my-3">
                                <Image src={ratingImg}></Image>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    );
}

export default Footer;
