import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardsContainer.css';

function CardsContainer(props) {

  const {pests, onClick} = props;

  return (
    <div className='cards-container'>
      <Card pest={pests[0]} onClick={onClick}/>
      <Card pest={pests[1]} onClick={onClick}/>
      <Card pest={pests[2]} onClick={onClick}/>
      <Card pest={pests[3]} onClick={onClick}/>
      <Card pest={pests[4]} onClick={onClick}/>
      <Card pest={pests[5]} onClick={onClick}/>
      <Card pest={pests[6]} onClick={onClick}/>
      <Card pest={pests[7]} onClick={onClick}/>
      <Card pest={pests[8]} onClick={onClick}/>
      <Card pest={pests[9]} onClick={onClick}/>
    </div>
  )
}

export default CardsContainer;