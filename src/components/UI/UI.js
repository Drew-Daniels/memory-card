import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI(props) {
  const {pests, clickHandler, ctHits} = props;
  return (
    <div className='ui'>
      <CardsContainer pests={pests} clickHandler={clickHandler} ctHits={ctHits}/>
    </div>
  )
}

export default UI;