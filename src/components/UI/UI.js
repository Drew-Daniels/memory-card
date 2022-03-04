import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI(props) {
  const {pests, shuffle} = props;
  return (
    <div className='ui'>
      <CardsContainer pests={pests} shuffle={shuffle}/>
    </div>
  )
}

export default UI;