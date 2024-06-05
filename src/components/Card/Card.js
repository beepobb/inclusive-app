import React, { useState } from "react";
import "./Card.css"; // Import Flip Animation CSS
import "./CardFade.css"; // Import Fade Animation CSS

const Card = ({ title, content, options, animationType }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const cardClass = animationType === "fade" ? "card fade" : "card flip";

  return (
    <div className={`${cardClass} ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      {animationType === "fade" ? (
        <>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{content}</p>
          </div>
          <div className="card-options">
            {options.map((option, index) => (
              <button key={index} onClick={option.onClick}>
                {option.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{content}</p>
          </div>
          <div className="card-back">
            {options.map((option, index) => (
              <button key={index} onClick={option.onClick}>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
