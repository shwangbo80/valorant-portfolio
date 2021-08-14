import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap"

function EsportsComponent() {
    return (
        <Container fluid className="esportsBg bgContainer">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="big_header my-5 py-5 text-white">VALORANT ESPORTS LEAGUE</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <h1 className="text-white">CLAIM YOUR VICTORY</h1>
                                <p className="text-white">
                                    Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
                                </p>
                                <Button href="/maps" className="btn-danger btn-lg">MORE INFO</Button>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default EsportsComponent;
