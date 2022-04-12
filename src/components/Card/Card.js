import './Card.css';

function Card(props) {

  const {pest, clickHandler} = props;
  const {img, title, id} = pest;

  return (
    <div id={id} className='card' onClick={clickHandler}>
      <div className='card-image-container'>
        <img src={img} alt={title + ' icon'} className='card-image'></img>
      </div>
    </div>
  )
}

export default Card;
