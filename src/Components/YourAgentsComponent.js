import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap"
import agents from '../Img/agents_1.png'

function YourAgents() {
    return (
        <Container fluid className="yourAgentsBg bgContainer">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Row className="agent_header">
                        <Col md={6} className="doubleAgentsContainer" >
                            <Image src={agents} fluid className="doubleAgentsImage" />
                        </Col>
                        <Col md={6} className="align-middle">
                            <h1 className="big_header my-5 py-5 text-white">YOUR AGENTS</h1>
                            <h1 className="text-white">CREATIVITY IS YOUR GREATEST WEAPON.</h1>
                            <p className="text-white">
                                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                            </p>
                            <Button href="/agents" className="btn-danger btn-lg">VIEW ALL AGENTS</Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default YourAgents;
