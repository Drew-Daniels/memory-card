import './Card.css';

function Card(props) {
  const {pest, clickHandler} = props;
  const {img, title, id} = pest;
  return (
    <div id={id} className='card' onClick={clickHandler}>
      <div className='card-image-container'>
        <img src={img} alt={title + ' icon'} className='card-image'></img>
      </div>
      <div className='card-title-container'>
        <h2 className='card-title'>{title}</h2>
      </div>
    </div>
  )
}

export default Card;
