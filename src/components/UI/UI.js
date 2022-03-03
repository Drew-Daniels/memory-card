import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI() {
  return (
    <div className='ui'>
      {/* Current Score, Best Score here */}
      <CardsContainer />
    </div>
  )
}

export default UI;