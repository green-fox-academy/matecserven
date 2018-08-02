import React, { Component } from 'react';
import Header from './components/Header';
import Tileset from './components/Tileset';
import { Pagination } from 'antd';

class App extends Component {
  state = {
    beerlist: [],
    current: 1,
    beerSelected: undefined
  }

  getBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers?page=${this.state.current}&per_page=8`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Wrong API');
        }
      })
      .then(data => {
        console.log(data);
        this.setState({
          beerlist: data,
        });
        console.log(this.state.beerlist);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.getBeers();
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
      beerSelected: undefined
    }, this.getBeers);
  }

  handleClick = (e) => {
    const selected = e.currentTarget.id;
    this.setState({
      beerSelected: selected
    });
    console.log(e.currentTarget.state);
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Tileset list={this.state.beerlist} onClick={this.handleClick} selected={this.state.beerSelected}/>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </div>
    );
  }
}

export default App;
