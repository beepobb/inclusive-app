import React from "react";
import "./Spotlight.css";

const Spotlight = ({ title, content, onClick }) => {
  return (
    <div className="spotlight-container">
      <div className="spotlight" onClick={onClick}>
        <div className="spotlight-content">
          <h2 className="spotlight-title">{title}</h2>
          <p className="spotlight-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
