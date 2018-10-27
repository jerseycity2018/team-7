import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from './config.json';
import data from './data';
import axios from 'axios';
import Dot from './Dot';
 
class Map extends Component {
    static defaultProps = {
        center: [59.93, 30.33],
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            address: "",
        }
    }

  render() {
    return (
      // Important! Always set the container height explicitly
<<<<<<< HEAD
      <div style={{ height: '100vh', width: '100%' }}>
        

=======
      <center>
      <div style={{height: '50vh', width: '95%' }}>
>>>>>>> dbc7872b485ccdf9d13f702cf3b0e7ab11e142ed
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.maps }}
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
      </center>
    );
  }
}
 
export default Map;