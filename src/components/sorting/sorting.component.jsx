import React, { Component } from "react";
import './sorting.styles.scss';

class Sorting extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sorting">
        <button className="button">Asc</button>
        <button className="button">Des</button>
      </div>
    );
  }
}

export default Sorting;
