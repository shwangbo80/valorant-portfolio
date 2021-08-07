import React, { } from 'react';

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
        fetch('https://valorant-api.com/v1/maps')
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
                            <h2>{item.displayName} </h2>
                            <img src={item.splash} />
                            <img src={item.displayIcon} />
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default MapApi;