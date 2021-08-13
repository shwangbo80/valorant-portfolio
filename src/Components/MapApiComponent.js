import React, { } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { MAPSDATA } from '../db/MapDb';
class MapApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(MAPSDATA)
            .then(res => res)
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
                <div>
                    <Container className="mapBg bgContainer">
                        <h1 className="bgHeader my-5 py-5 text-dark">MAPS</h1>
                    </Container>
                    <Container className="accordionContainer">
                        <Accordion eventKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[0].listViewIcon} className="listViewIcon" />
                                    <div className="headerText">
                                        {MAPSDATA[0].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[0].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[1].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[1].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[1].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[2].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[2].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[2].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[3].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[3].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[3].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[4].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[4].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[4].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[5].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[5].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[5].displayIcon} className="splashImg" />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6">
                                <Accordion.Header className="accordionHeaderContainer">
                                    <img src={MAPSDATA[6].listViewIcon} />
                                    <div className="headerText">
                                        {MAPSDATA[6].displayName}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <img src={MAPSDATA[6].displayIcon} />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>
            );
        }
    }
}

export default MapApi;