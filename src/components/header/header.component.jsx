import React from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1>Rating</h1>
      </div>
      <div className="options">
        <h2 className="option">Add</h2>
        <h2 className="option">Sign In</h2>
      </div>
    </div>
  );
};

export default Header;
