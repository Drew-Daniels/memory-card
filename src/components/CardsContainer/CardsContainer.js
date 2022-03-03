import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardsContainer.css';

function CardsContainer(props) {

  // const [{
  //   c1Image,
  //   c1Title,
  //   c2Image,
  //   c2Title,
  //   c3
  // }, setState] = useState({

  // })

  return (
    <div className='cards-container'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default CardsContainer;