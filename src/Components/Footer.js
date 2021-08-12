import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap"
import riotLogo from "../Img/riot_logo_white.png"
import ratingImg from "../Img/rating.png"

function Footer() {
    return (
        <Container fluid className="footerContainer">
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    <Row>
                        <Col className="my-3">
                            <a className="downloadLink">DOWNLOAD GAME CLIENT</a>
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
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    );
}

export default Footer;
