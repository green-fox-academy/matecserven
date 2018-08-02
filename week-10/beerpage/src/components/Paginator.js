import React from 'react';

const Paginator = (props) => (
  <footer>
    <form onSubmit={props.getBeers}>
      <button className="prev">Prev</button>
      <button data-id="1">1</button>
      <button data-id="2">2</button>
      <button data-id="3">3</button>
      <button data-id="4">4</button>
      <button data-id="5">5</button>
      <button data-id="6">6</button>
      <button data-id="7">7</button>
      <button data-id="8">8</button>
      <button className="next">Next</button>
    </form>
  </footer>
);

export default Paginator;