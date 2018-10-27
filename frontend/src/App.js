import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './NavBar'
import Map from './Map';
import SocialMedia from './SocialMedia'
import Geocode from "react-geocode";
import './App.css';
import SearchMap from './SearchMap';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
// import FilterBar from './FilterBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [59.93, 30.33],
      address: ""
    }
  }

  onSearch = searchTerm => {
    this.setState({ address: searchTerm });
    console.log(this.state.address);
  }

  handleCenter = center => {
    this.setState({ center: center });
    console.log(center);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code> Good Deeds</code>
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
        { /*<FilterBar/>*/}
        <div className="contents">
          <SearchMap searchTerm={this.address} onSearch={this.onSearch} handleCenter={this.handleCenter}/>
          <Map center={this.state.center}/>
          <SocialMedia/>
        </div>
      </div>
    );
  }
}

export default App;
