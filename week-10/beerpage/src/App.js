import React, { Component } from 'react';
import Header from './components/Header';
import Tileset from './components/Tileset';
import Paginator from './components/Paginator';

class App extends Component {
  state = {
    beerlist: [],
    page: 1
  }

  getBeers = (e) => {
    if (e) {
      e.preventDefault();
      const page = e.target.elements.dataset.id;
      this.setState({
        state: page
      });
    }
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=8`)
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
      <div className="main">
        <Header />
        <Tileset list={this.state.beerlist} />
        <Paginator getBeers={this.getBeers}/>
      </div>
    );
  }

}

export default App;
