import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

//COMPONENTS
import Header from './components/header_footer/Header.js'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import Highlights from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header_footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px"}}>
        <Element name="header">
          <Header />
        </Element>

        <Element name="event_start">
          <Featured />
        </Element>

        <Element name="venue_nfo">
          <VenueNfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>
        
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
