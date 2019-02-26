import React, { Component } from 'react';
import './resources/styles.css';

//COMPONENTS
import Header from './components/header_footer/Header.js'
import Featured from './components/featured'


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px"}}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
