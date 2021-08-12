import React from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';

class RazeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Loading: false,
            items: [],
            agentId: 1
        };
    }

    componentDidMount() {
        fetch('https://valorant-api.com/v1/agents')

            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }

        else if (!isLoaded) {
            return <div className="lds-hourglass"></div>;
        }

        else {
            return (
                <Container fluid className="agentContainer">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img src={items[this.state.agentId].fullPortrait} className="fullPortraitImg" />
                            </Col>
                            <Col md={6} className="agentInfo">
                                <h2 className="agentTitle">{items[this.state.agentId].displayName}</h2>
                                <p className="agentDescription">{items[this.state.agentId].description}</p>
                                <h2 className="agentHeader">{items[this.state.agentId].role.displayName}</h2>
                                <p className="agentDescription">{items[this.state.agentId].role.description}</p>
                                <h2 className="agentHeader">ABILITIES</h2>

                                <Tabs defaultActiveKey="ability-1" className="mb-3">
                                    <Tab eventKey="ability-1" title={items[this.state.agentId].abilities[0].displayName}>
                                        <div className="abilityContainer">
                                            <div className="abilityIconContainer">
                                                <img className="abilityIcon" src={items[this.state.agentId].abilities[0].displayIcon} />
                                            </div>
                                            <div>{items[this.state.agentId].abilities[0].description}</div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="ability-2" title={items[this.state.agentId].abilities[1].displayName}>
                                        <div className="abilityContainer">
                                            <div className="abilityIconContainer">
                                                <img className="abilityIcon" c src={items[this.state.agentId].abilities[1].displayIcon} />
                                            </div>
                                            <div>{items[this.state.agentId].abilities[1].description}</div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="ability-3" title={items[this.state.agentId].abilities[2].displayName}>
                                        <div className="abilityContainer">
                                            <div className="abilityIconContainer">
                                                <img className="abilityIcon" src={items[this.state.agentId].abilities[2].displayIcon} />
                                            </div>
                                            <div>{items[this.state.agentId].abilities[2].description}</div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="ability-4" title={items[this.state.agentId].abilities[3].displayName}>
                                        <div className="abilityContainer">
                                            <div className="abilityIconContainer">
                                                <img className="abilityIcon" src={items[this.state.agentId].abilities[3].displayIcon} />
                                            </div>
                                            <div>{items[this.state.agentId].abilities[3].description}</div>
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
}

export default RazeComponent;