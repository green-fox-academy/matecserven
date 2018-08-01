import React from 'react';

const BeerTile = (props) => (
  <div className="card">
    <div className="content">
      <img src={props.imgUrl} alt="put beer here" />}
      <p>{props.description}</p>
    </div>
    <p>{props.name}</p>
  </div>
)

export default BeerTile;
