import React, { Component } from 'react';
import SearchBar from './SearchBar';
import logo from './logo.svg';
import Map from './Map';
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
        </div>
      </div>
    );
  }
}

export default App;
