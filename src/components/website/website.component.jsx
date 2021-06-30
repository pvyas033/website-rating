import React from "react";

import "./website.styles.scss";

const Website = ({ name, url }) => {
  return (
    <div className="website">
      <div className="info">
        <h1 className="title">{name}</h1>
        <span className="desc">{url}</span>
      </div>
      <div>
        <button className="button">Like</button>
        <button className="button">Dislike</button>
      </div>
    </div>
  );
};

export default Website;
