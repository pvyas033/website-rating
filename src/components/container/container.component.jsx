import React, { Component } from "react";
import Footer from "../footer/footer.component";
import { SearchBar } from "../search/search.component";
import Sorting from "../sorting/sorting.component";
import Website from "../website/website.component";
import "./container.styles.scss";

class Container extends Component {
  constructor() {
    super();

    this.websites = [
      {
        id: 1,
        name: "Notebook Pages",
        url: "https://pvyas033.github.io/notebookpages.pvt/",
      },
      {
        id: 2,
        name: "Notebook Pages",
        url: "https://pvyas033.github.io/notebookpages.pvt/",
      },
      {
        id: 3,
        name: "Notebook Pages",
        url: "https://pvyas033.github.io/notebookpages.pvt/",
      },
      {
        id: 4,
        name: "Notebook Pages",
        url: "https://pvyas033.github.io/notebookpages.pvt/",
      },
    ];
  }

  handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <h1 className="websites-title">Websites</h1>
        <div className="container">
          <div className="filter">
            <SearchBar placeholder="search" handleChange={this.handleChange} />
            <Sorting />
          </div>
          <div className="websites">
            {this.websites.map(({ id, name, url }) => (
              <Website className="grid-item" key={id} name={name} url={url} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
