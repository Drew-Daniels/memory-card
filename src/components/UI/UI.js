import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI(props) {
  return (
    <div className='ui'>
      <CardsContainer pests={props.pests} onClick={props.onClick}/>
    </div>
  )
}

export default UI;