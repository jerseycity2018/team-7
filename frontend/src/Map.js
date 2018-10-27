import React, { Component } from 'react';
import config from './config';
import GoogleMapReact from 'google-map-react';
import Dot from './Dot';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
static defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.mapsApiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Dot
            lat={59.955413}
            lng={30.337844}
            text={'Miguel Acero'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;