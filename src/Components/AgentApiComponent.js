import React from "react";

class ApiComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            Loading: false,
            items: [],
            agentId: 0
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
                <div>
                    <div>
                        <img src={items[this.state.agentId].fullPortrait} />
                        <img src={items[this.state.agentId].displayIcon} />
                        <h2>{items[this.state.agentId].displayName}</h2>
                        <p>{items[this.state.agentId].description}</p>
                        <img src={items[this.state.agentId].role.displayIcon} />
                        <h2>{items[this.state.agentId].role.displayName}</h2>
                        <p>{items[this.state.agentId].role.description}</p>
                        <div>
                            <h2>{items[this.state.agentId].abilities[0].displayName}</h2>
                            <div>{items[this.state.agentId].abilities[0].description}</div>
                            <img className="pngImg" style={{ width: "50px" }} src={items[this.state.agentId].abilities[0].displayIcon} />
                        </div>
                        <div>
                            <h2>{items[this.state.agentId].abilities[1].displayName}</h2>
                            <div>{items[this.state.agentId].abilities[1].description}</div>
                            <img className="pngImg" style={{ width: "50px" }} src={items[this.state.agentId].abilities[1].displayIcon} />
                        </div>
                        <div>
                            <h2>{items[this.state.agentId].abilities[2].displayName}</h2>
                            <div>{items[this.state.agentId].abilities[2].description}</div>
                            <img className="pngImg" style={{ width: "50px" }} src={items[this.state.agentId].abilities[2].displayIcon} />
                        </div>
                        <div>
                            <h2>{items[this.state.agentId].abilities[3].displayName}</h2>
                            <div>{items[this.state.agentId].abilities[3].description}</div>
                            <img className="pngImg" style={{ width: "50px" }} src={items[this.state.agentId].abilities[3].displayIcon} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ApiComponent;