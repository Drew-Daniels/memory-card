// framework
import React, { useState } from 'react';
import uniqid from 'uniqid';

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
    isHit: false,
    id: uniqid(),
  });

  const pestsArr = [
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
  ];

  const [pests, setPests] = useState(getDeepCopy(pestsArr));
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };
  
  const resetScore = () => {
    setScore(0);
  }

  const restoreDefaultPests = () => {
    setPests(getDeepCopy(pestsArr));
  };

  function getDeepCopy(arr) {
    const copy = JSON.parse(JSON.stringify(arr));
    return copy;
  };
  /**
   * Creates a shallow copy of an array and shuffles in place
   * @param {array} arr 
   * @returns Copied and shuffled array with nested contents intact
   */
  const shuffle = (origArr) => {
    const newArr = [...origArr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const ctHits = (arr) => {
    let hits = 0;
    for (let i=0; i < arr.length; i++) {
      if (arr[i].isHit) {hits++};
    };
    return hits;
  };

  const getIndexFromID = (id, arr) => {
    return arr.findIndex(arrItem => arrItem.id === id);
  }

  const getItemFromID = (id, arr) => {
    const i = getIndexFromID(id, arr)
    return arr[i];
  }
  const hit = (pest) => {
    pest.isHit = true;
  };

  const onClick = (event) => {
    const pestID = event.target.id;
    const pest = getItemFromID(pestID, pests);
    if (!pest.isHit) {
      hit(pest);
      incrementScore();
      if ((score % 10) === 0) {
        restoreDefaultPests();
      }
    } else {
      restoreDefaultPests();
      resetScore();
    }
    setPests(shuffle(pests));
    if (score > record) {setRecord(score)};
    //shake
    const icon = document.querySelector('.header-icon');
    const headerText = document.querySelector('.header-text');
    setTimeout(() => {
      icon.classList.add('shake');
      headerText.classList.add('shake');
      setTimeout(() => {
        icon.classList.remove('shake');
        headerText.classList.remove('shake');
      }, 300)
    }, 100)
  };

  return (
    <div className='App content-container'>
      <div className='content'>
        <Header/>
        <ScoreContainer score={score} record={record}/>
        <UI pests={pests} clickHandler={onClick} ctHits={ctHits}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
