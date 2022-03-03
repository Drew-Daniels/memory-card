import './Card.css';
import AntImage from '../../images/pictures/ant.png';

function Card(props) {
  // const [cardImage, cardTitle] = props;

  return (
    <div className='card'>
      <img src={AntImage} alt='pest' className='card-image'></img>
      <h2>PestName</h2>
    </div>
  )
}

export default Card;
