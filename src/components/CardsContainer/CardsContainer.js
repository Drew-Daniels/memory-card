import Card from '../Card/Card';
import './CardsContainer.css';

function CardsContainer(props) {
  const {pests, clickHandler, ctHits} = props;

  return (
    <div className='cards-container'>
      <Card pest={pests[0]} clickHandler={clickHandler} ctHits={ctHits}/>
      <Card pest={pests[1]} clickHandler={clickHandler}/>
      <Card pest={pests[2]} clickHandler={clickHandler}/>
      <Card pest={pests[3]} clickHandler={clickHandler}/>
      <Card pest={pests[4]} clickHandler={clickHandler}/>
      <Card pest={pests[5]} clickHandler={clickHandler}/>
      <Card pest={pests[6]} clickHandler={clickHandler}/>
      <Card pest={pests[7]} clickHandler={clickHandler}/>
      <Card pest={pests[8]} clickHandler={clickHandler}/>
      <Card pest={pests[9]} clickHandler={clickHandler}/>
    </div>
  )
}

export default CardsContainer;