import React from 'react';
import BeerTile from './BeerTile';

const Tileset = (props) => (
  <div className="container">
    {
      props.list.map((element, i) => {
        return (
          <BeerTile
            key={i}
            name={element.name}
            imgUrl={element.image_url}
            description={element.description}
          />
        );
      })
    }
  </div>
)

export default Tileset;
