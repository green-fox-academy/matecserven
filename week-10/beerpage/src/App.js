import React, { Component } from 'react';
import Header from './components/Header';
import BeerTile from './components/BeerTile';
import Paginator from './components/Paginator';

class App extends Component {
  state = {
    name: undefined,
    description: undefined,
    imgUrl: undefined,
  }

  getBeers = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          name: data[0].name,
          description: data[0].description,
          imgUrl: data[0].image_url,
        });
        console.log(this.state);
      })
  }

  componentDidMount() {
    this.getBeers();
  }

  render() {
    return (
      <div>
        <Header />
        <BeerTile
          name={this.state.name}
          description={this.state.description}
          imgUrl={this.state.imgUrl}
        />
        <Paginator />
      </div>
    );
  }

}

export default App;
