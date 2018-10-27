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
import './App.css';
import SearchMap from './SearchMap';
import Leaderboard from './Leaderboard';
import './Leaderboard.css';
import Profile from './Profile';
import CreateDots from './CreateDots';
import Loader from 'react-loader-spinner';
import Location from './Location';
import {geolocated} from 'react-geolocated';
import { white } from 'material-ui/styles/colors';
// import FilterBar from './FilterBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      center: [59.93, 30.33],
      address: "",
      users: [],
      points: []
    }

    this.geolocRef = React.createRef();
  }

  componentDidMount() {
    setInterval(() => {
      fetch("http://localhost:3000/points/readall", {
            method: 'GET',
        })
        .then(res => res.json())
        .then((data => {
            this.setState({ points: data, isLoaded: true })
            console.log(this.state.points)
        }))

      fetch("http://localhost:3000/user/readall", {
            method: 'GET',
        })
        .then(res => res.json())
        .then((data => {
            const sortedData = data.sort((a,b) => b.upVotes - a.upVotes);
            this.setState({ users: sortedData })
            console.log(this.state.users)
        }))
    }, 1500)
  }

  onSearch = searchTerm => {
    this.setState({ address: searchTerm });
    console.log(this.state.address);
  }

  handleCenter = center => {
    this.setState({ center: center });
    document.getElementById("longi").value = center[1];
    document.getElementById("lati").value = center[0];
    console.log(center);
  }

  render() {
    const options = [
      '/',
      'leaderboard',
      'profile'
    ]
    return (
      <div className="App">
        <header className="">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code id="title"> Good Deeds</code>
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
              { this.state.isLoaded ? 
                <Map center={this.state.center} data={this.state.points}/>
                 : 
                <Loader 
                type="Puff"
                color="#00BFFF"
                height="100"	
                width="100"
             /> }
                <CreateDots/>
                <SocialMedia/>
              </div>
            }/>
            <Route exact path='/leaderboard' render={props =>
              <Leaderboard people={this.state.users}/>
            }/>
            <Route path='/profile' component={Profile}/>
          </div>
        </Router>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "#555555",
            padding: "2rem"
          }}
          stickyStyles={{
            backgroundColor: "rgba(255,255,255,.8)",
            padding: "2rem"
            }}
            >
              Made with 💖 by Team 7
        </StickyFooter>
      </div>
    );
  }
}

export default App;
