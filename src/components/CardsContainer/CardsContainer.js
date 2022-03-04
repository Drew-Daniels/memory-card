import Card from '../Card/Card';
import './CardsContainer.css';

function CardsContainer(props) {
  const {pests, shuffle} = props;

  return (
    <div className='cards-container'>
      <Card pest={pests[0]} shuffle={shuffle}/>
      <Card pest={pests[1]} shuffle={shuffle}/>
      <Card pest={pests[2]} shuffle={shuffle}/>
      <Card pest={pests[3]} shuffle={shuffle}/>
      <Card pest={pests[4]} shuffle={shuffle}/>
      <Card pest={pests[5]} shuffle={shuffle}/>
      <Card pest={pests[6]} shuffle={shuffle}/>
      <Card pest={pests[7]} shuffle={shuffle}/>
      <Card pest={pests[8]} shuffle={shuffle}/>
      <Card pest={pests[9]} shuffle={shuffle}/>
    </div>
  )
}

export default CardsContainer;