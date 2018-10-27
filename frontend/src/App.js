import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';
import SearchBar from './SearchBar';
import logo from './logo.svg';
import NavBar from './NavBar'
import Map from './Map';
import SocialMedia from './SocialMedia'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    }
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <div className="contents">
          <SearchBar/>
          <Map/>
          <SocialMedia/>
        </div>
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
