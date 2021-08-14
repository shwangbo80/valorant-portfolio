import React from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FadeTransform, Fade } from 'react-animation-components';

import { AGENTSDATA } from "../../db/AgentsDb";

class BrimstoneComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agentId: 10
        };
    }

    render() {
        return (
            <Container fluid className="agentContainer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <FadeTransform in transformProps={{ exitTransform: 'translateX(-50%)' }}>
                                <Fade in>
                                    <img src={AGENTSDATA[this.state.agentId].fullPortrait} className="fullPortraitImg" />
                                </Fade>
                            </FadeTransform>

                        </Col>

                        <Col md={6} className="agentInfo">

                            <div className="videoContainer">
                                <iframe width="510px" height="300px" src="https://www.youtube.com/embed/eU1l7eBy2_Y?playlist=eU1l7eBy2_Y;controls=0&amp;start=48&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                            </div>

                            <FadeTransform in transformProps={{ exitTransform: 'translateX(50%)' }}>
                                <Fade in>
                                    <h2 className="agentTitle">{AGENTSDATA[this.state.agentId].displayName}</h2>
                                    <p className="agentDescription">{AGENTSDATA[this.state.agentId].description}</p>
                                    <h2 className="agentHeader">role: {AGENTSDATA[this.state.agentId].role.displayName}</h2>
                                    <p className="agentDescription">{AGENTSDATA[this.state.agentId].role.description}</p>
                                </Fade>
                            </FadeTransform>

                            <FadeTransform in transformProps={{ exitTransform: 'translateY(50%)' }}>
                                <Fade in>
                                    <h2 className="agentHeader">ABILITIES</h2>
                                    <Tabs defaultActiveKey="ability-1" className="mb-3">
                                        <Tab eventKey="ability-1" title={AGENTSDATA[this.state.agentId].abilities[0].displayName}>
                                            <div className="abilityContainer">
                                                <div>{AGENTSDATA[this.state.agentId].abilities[0].description}</div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ability-2" title={AGENTSDATA[this.state.agentId].abilities[1].displayName}>
                                            <div className="abilityContainer">
                                                <div>{AGENTSDATA[this.state.agentId].abilities[1].description}</div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ability-3" title={AGENTSDATA[this.state.agentId].abilities[2].displayName}>
                                            <div className="abilityContainer">
                                                <div>{AGENTSDATA[this.state.agentId].abilities[2].description}</div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="ability-4" title={AGENTSDATA[this.state.agentId].abilities[3].displayName}>
                                            <div className="abilityContainer">
                                                <div>{AGENTSDATA[this.state.agentId].abilities[3].description}</div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </Fade>
                            </FadeTransform>
                        </Col>

                    </Row>
                </Container>
            </Container>
        );
    }
}


export default BrimstoneComponent;