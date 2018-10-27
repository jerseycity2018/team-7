import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NavBarNPM from 'reactjs-navigation'
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
import Leaderboard from './leaderboard';
import Profile from './Profile';
import CreateDots from './CreateDots';
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
    const mapComp = (
      <div>

      </div>
    );
    const options = [
      '/',
      'leaderboard',
      'profile'
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code> Good Deeds</code>
          </p>
        </header>
        { /*<FilterBar/>*/}
        <Router>
          <div className="contents" >
            <NavBarNPM
              pages={options}
            >
            </NavBarNPM>
            <Route exact path='/' render={props =>
              <div>
                <SearchMap searchTerm={this.address} onSearch={this.onSearch} handleCenter={this.handleCenter}/>
                <Map center={this.state.center}/>
                <CreateDots/>
                <SocialMedia/>
              </div>
            }/>
            <Route path='/leaderboard' component={Leaderboard}/>
            <Route path='/profile' component={Profile}/>
          </div>
        </Router>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#999999",
            padding: "2rem"
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem"
            }}
            >
            Add any footer markup here
        </StickyFooter>
      </div>
    );
  }
}

export default App;
