import React from 'react';
import BeerTile from './BeerTile';

const Tileset = (props) => (
  <div className="container">
    {
      props.list.map((element, i) => {
        return (
          <BeerTile
            key={i}
            id={i}
            name={element.name}
            imgUrl={element.image_url}
            description={element.description}
            onClick={props.onClick}
            selected={props.selected}
          />
        );
      })
    }
  </div>
)

export default Tileset;
