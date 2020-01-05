import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '50vh', width: '100%',marginTop: "50px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyD6yVvsq9zMn7irJtLJ86mWtSAvg20Jc_0'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Club"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;