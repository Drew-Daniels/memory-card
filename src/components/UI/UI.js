import CardsContainer from '../CardsContainer/CardsContainer';
import './UI.css';

function UI(props) {
  const {score, setScore, record, setRecord} = props;
  return (
    <div className='ui'>
      <CardsContainer score={score} setScore={setScore} record={record} setRecord={setRecord} />
    </div>
  )
}

export default UI;