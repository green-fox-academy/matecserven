import React, { Component } from 'react';
import Header from './components/Header';
import Tileset from './components/Tileset';
import Paginator from './components/Paginator';

class App extends Component {
  state = {
    beerlist: []
  }

  getBeers = () => {
    fetch('https://api.punkapi.com/v2/beers?per_page=8')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          beerlist: data,
        });
        console.log(this.state.beerlist);
      })
  }

  componentDidMount() {
    this.getBeers();
  }

  render() {
    return (
      <div>
        <Header />
        <Tileset list={this.state.beerlist} />
        <Paginator />
      </div>
    );
  }

}

export default App;
