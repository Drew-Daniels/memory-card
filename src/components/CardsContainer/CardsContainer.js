import uniqid from 'uniqid';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './CardsContainer.css';

// images
import AntImage from '../../images/pictures/ant.png';
import BatImage from '../../images/pictures/bat.png';
import BedBugImage from '../../images/pictures/bed-bug.png'
import CaterpillarImage from '../../images/pictures/caterpillar.png'
import CockroachImage from '../../images/pictures/cockroach.png'
import FlyImage from '../../images/pictures/fly.png'
import MosquitoImage from '../../images/pictures/mosquito.png'
import RatImage from '../../images/pictures/rat.png'
import SpiderImage from '../../images/pictures/spider.png'
import WaspImage from '../../images/pictures/wasp.png'

function CardsContainer(props) {

  const {score, setScore} = props;

  const Pest = (img, title, isHit=false) => ({
    img,
    title,
    isHit: isHit,
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

  const [pests, setPests] = useState(pestsArr);

  function restoreDefaultPests() {
    const newPests = pests.map((pest) => {
      const newPest = {...pest, isHit: false}
      return newPest;
    })
    setPests(newPests);
  };
    /**
   * Creates a shallow copy of an array and shuffles in place
   * @param {array} arr 
   * @returns Copied and shuffled array with nested contents intact
   */
    function shuffle(origArr) {
      const newArr = [...origArr];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    };

  function clickHandler(e) {
    const pestID = e.target.id;
    const pest = pests.find(pest => pest.id === pestID);
    if (pest.isHit) {
      restoreDefaultPests();
      if (score % 10 === 0) {
        setScore(score + 1);
      } else {
        setScore(0);
      }
    } else {
      setPests(prevPests => {
        const newPests = [...prevPests];
        const i = newPests.findIndex(pest => pest.id === pestID);
        newPests.splice(i, 1, Pest(pest.img, pest.title, true));
        return newPests;
      })
      setScore(score + 1);
    }
    setPests(prevPests => {
      return shuffle(prevPests);
    })
  }


  useEffect(() => {
    const recordEl = document.getElementById('record-value');
    const record = parseInt(recordEl.innerHTML);
    if (score > record) {
      recordEl.innerHTML = score;
    }
  })

  return (
    <div className='cards-container'>
      <Card pest={pests[0]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[1]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[2]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[3]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[4]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[5]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[6]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[7]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[8]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
      <Card pest={pests[9]} setPests={setPests} score={score} setScore={setScore} clickHandler={clickHandler} />
    </div>
  )
}

export default CardsContainer;