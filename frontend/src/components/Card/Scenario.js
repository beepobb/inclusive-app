import React from 'react';
import './Scenario.css'; // Import the CSS file
import { Button } from '@mui/material';

const Scenario = ({image, title, content, options}) => {
  return (
    <div className="image-container">
      <img src={image} alt="Example" className="image" />
      <div className="overlay"/>
      <div className="title-overlay">
        <span className="scenario-title">{title}</span>
        <span className="scenario-body">{content}</span>
      </div>
      <div className="option-overlay">
        {options.map((option, index) => (
            <Button 
                variant="contained" 
                key={index} 
                style={{ 
                    backgroundColor: 'white', 
                    color: 'black',
                    fontWeight:600,
                    borderRadius:30,
                    width: 500,
                    height: 50,
                    marginLeft: 10,
                    marginRight: 10,
                     }}>
                {option}
            </Button>
        ))}
      </div>
    </div>
  );
};

export default Scenario;
