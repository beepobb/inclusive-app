import React, { useState } from 'react';
import './directory.css';

const Directory = ({ dir, style }) => {
  const [colour, setColour] = useState('red');

  const handleClick = () => {
    setColour(colour === 'red' ? 'blue' : 'red');
  };

  return (
    <div 
      className='navbar' 
      style={{ ...style, backgroundColor: colour }}
      onClick={handleClick}
    >
      {dir.name}pp poopoo
    </div>
  );
}

export default Directory;
