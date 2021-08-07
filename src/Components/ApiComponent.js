import React from 'react';

class AgentApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
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
        } else if (!isLoaded) {
            return <div className="lds-hourglass"></div>;
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div key={item.uuid}>
                            <img src={item.bustPortrait} />
                            <img src={item.displayIcon} />
                            <h2>{item.displayName}</h2>
                            <p>{item.description}</p>
                            <p>{item.abilities.map((ability =>
                                <div>
                                    <h2>{ability.displayName}</h2>
                                    <div>{ability.description}</div>
                                    <img className="pngImg" style={{ width: "50px" }} src={ability.displayIcon} />
                                </div>
                            ))}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default AgentApi;