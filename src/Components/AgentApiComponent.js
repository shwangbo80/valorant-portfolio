import React from "react";
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import BreachComponent from "./agents/BreachComponent";
import RazeComponent from "./agents/RazeComponent"
import KayoComponent from "./agents/KayoComponent";
import SkyeComponent from "./agents/SkyeComponent";
import CypherComponent from "./agents/CypherComponent";
import SovaComponent from "./agents/SovaComponent";
import KilljoyComponent from "./agents/KilljoyComponent";
import ViperComponent from "./agents/ViperComponent";
import PhoenixComponent from "./agents/PhoenixComponent";
import AstraComponent from "./agents/AstraComponent";
import BrimstoneComponent from "./agents/BrimstoneComponent";
import YoruComponent from "./agents/YoruComponent";
import SageComponent from "./agents/SageComponent";
import ReynaComponent from "./agents/ReynaCompoent";
import OmenComponent from "./agents/OmenComponent";
import JettComponent from "./agents/JettComponent";

import { AGENTSDATA } from "../db/AgentsDb";




class AgentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Loading: false,
            items: [],
            agentId: 0,
            agentsData: AGENTSDATA,
        };
    }

    componentDidMount() {
        fetch(AGENTSDATA)
            .then(res => res)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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
                <Router>
                    <div>
                        <Container className="agentBg bgContainer">
                            <h1 className="bgHeader my-5 py-5 text-dark">AGENTS</h1>
                        </Container>
                        <Container className="agentSelectContainer">
                            <Row>
                                {this.state.agentsData.map(item => (
                                    <Col xs={2} key={item.uuid} className="singleAgentContainer">
                                        <Link to={`${item.uuid}`} >
                                            <img src={item.displayIcon} className="displayIconImg py-3" />
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>

                        <Switch>
                            <Route path={"/5f8d3a7f-467b-97f3-062c-13acf203c006"}>
                                <BreachComponent />
                            </Route>
                            <Route path={"/f94c3b30-42be-e959-889c-5aa313dba261"}>
                                <RazeComponent />
                            </Route>
                            <Route exact path="/601dbbe7-43ce-be57-2a40-4abd24953621">
                                <KayoComponent />
                            </Route>
                            <Route exact path="/6f2a04ca-43e0-be17-7f36-b3908627744d">
                                <SkyeComponent />
                            </Route>
                            <Route exact path="/117ed9e3-49f3-6512-3ccf-0cada7e3823b">
                                <CypherComponent />
                            </Route>
                            <Route exact path="/320b2a48-4d9b-a075-30f1-1f93a9b638fa">
                                <SovaComponent />
                            </Route>
                            <Route exact path="/1e58de9c-4950-5125-93e9-a0aee9f98746">
                                <KilljoyComponent />
                            </Route>
                            <Route exact path="/707eab51-4836-f488-046a-cda6bf494859">
                                <ViperComponent />
                            </Route>
                            <Route exact path="/eb93336a-449b-9c1b-0a54-a891f7921d69">
                                <PhoenixComponent />
                            </Route>
                            <Route exact path="/41fb69c1-4189-7b37-f117-bcaf1e96f1bf">
                                <AstraComponent />
                            </Route>
                            <Route exact path="/9f0d8ba9-4140-b941-57d3-a7ad57c6b417">
                                <BrimstoneComponent />
                            </Route>
                            <Route exact path="/7f94d92c-4234-0a36-9646-3a87eb8b5c89">
                                <YoruComponent />
                            </Route>
                            <Route exact path="/569fdd95-4d10-43ab-ca70-79becc718b46">
                                <SageComponent />
                            </Route>
                            <Route exact path="/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc">
                                <ReynaComponent />
                            </Route>
                            <Route exact path="/8e253930-4c05-31dd-1b6c-968525494517">
                                <OmenComponent />
                            </Route>
                            <Route exact path="/add6443a-41bd-e414-f6ad-e58d267f4e95">
                                <JettComponent />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            )
        }
    }
}

export default AgentComponent;


