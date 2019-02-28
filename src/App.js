import React, { Component } from 'react';
import './resources/styles.css';

//COMPONENTS
import Header from './components/header_footer/Header.js'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import Highlights from './components/highlights'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px"}}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlights />
      </div>
    );
  }
}

export default App;
