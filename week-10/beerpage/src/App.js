import React, { Component } from 'react';
import Header from './components/Header';
import BeerTile from './components/BeerTile';
import Paginator from './components/Paginator';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BeerTile />
        <Paginator />
      </div>
    );
  }
}

export default App;
