import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI(props) {
  const {score, setScore} = props;
  return (
    <div className='ui'>
      <CardsContainer score={score} setScore={setScore} />
    </div>
  )
}

export default UI;