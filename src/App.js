// framework
import React, { useState, useEffect } from 'react';

// components
import Header from './components/Header/Header';
import ScoreContainer from './components/ScoreContainer/ScoreContainer';
import UI from './components/UI/UI';
import Footer from './components/Footer/Footer';

// images
import AntImage from './images/pictures/ant.png';
import BatImage from './images/pictures/bat.png';
import BedBugImage from './images/pictures/bed-bug.png'
import CaterpillarImage from './images/pictures/caterpillar.png'
import CockroachImage from './images/pictures/cockroach.png'
import FlyImage from './images/pictures/fly.png'
import MosquitoImage from './images/pictures/mosquito.png'
import RatImage from './images/pictures/rat.png'
import SpiderImage from './images/pictures/spider.png'
import WaspImage from './images/pictures/wasp.png'

// styling
import './Reset.css'
import './App.css';

function App() {
  const Pest = (img, title) => ({
    img,
    title,
    hit: false,
  });

  const [pests, setPests] = useState([
    Pest(AntImage, 'Ant'),
    Pest(BatImage, 'Bat'),
    Pest(BedBugImage, 'Bed Bug'),
    Pest(CaterpillarImage, 'Caterpillar'),
    Pest(CockroachImage, 'Cockroach'),
    Pest(FlyImage, 'Fly'),
    Pest(MosquitoImage, 'Mosquito'),
    Pest(RatImage, 'Rat'),
    Pest(SpiderImage, 'Spider'),
    Pest(WaspImage, 'Wasp'),
  ]);

  useEffect(() => {

  })

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return [...arr];
  };

  const onClick = () => {
    setPests(shuffle(pests));
    console.log(pests);
  }
  return (
    <div className='App content-container'>
      <div className='content'>
        <Header/>
        <ScoreContainer />
        <UI pests={pests} shuffle={onClick}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
