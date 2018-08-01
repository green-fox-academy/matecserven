import React, { Component } from 'react';

class BeerTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="card">
        <div className="content" onClick={this.handleClick}>
          {this.state.isToggleOn ?
            <p>{this.props.description}</p>
            : <img src={this.props.imgUrl} alt={this.props.name} />}
        </div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default BeerTile;
