import './Card.css';

function Card(props) {
  const {pest, shuffle} = props;
  const {img, title} = pest;

  return (
    <div className='card' onClick={shuffle}>
      <img src={img} alt={title + ' icon'} className='card-image'></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Card;
