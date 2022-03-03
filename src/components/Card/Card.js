import './Card.css';

function Card(props) {
  const {pest, onClick} = props;
  const {img, title} = pest;
  return (
    <div className='card' onClick={onClick}>
      <img src={img} alt='pest' className='card-image'></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Card;
