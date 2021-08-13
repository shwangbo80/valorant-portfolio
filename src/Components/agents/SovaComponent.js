import React from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { AGENTSDATA } from "../../db/AgentsDb";

class SovaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agentId: 5
        };
    }

    render() {
        return (
            <Container fluid className="agentContainer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={AGENTSDATA[this.state.agentId].fullPortrait} className="fullPortraitImg" />
                        </Col>
                        <Col md={6} className="agentInfo">
                            <h2 className="agentTitle">{AGENTSDATA[this.state.agentId].displayName}</h2>
                            <p className="agentDescription">{AGENTSDATA[this.state.agentId].description}</p>
                            <h2 className="agentHeader">{AGENTSDATA[this.state.agentId].role.displayName}</h2>
                            <p className="agentDescription">{AGENTSDATA[this.state.agentId].role.description}</p>
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
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}


export default SovaComponent;