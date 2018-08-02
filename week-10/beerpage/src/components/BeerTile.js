import React from 'react';

const BeerTile = (props) => (
  <div className="card" id={props.id} onClick={props.onClick}>
    <div className="content">
      {props.selected == props.id ?
        <p>{props.description}</p>
        : <img src={props.imgUrl} alt={props.name} />}
    </div>
    <p>{props.name}</p>
  </div>
)

export default BeerTile;
