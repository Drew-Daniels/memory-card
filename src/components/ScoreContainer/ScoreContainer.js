import './ScoreContainer.css';

function ScoreContainer(props) {
  const {score, record} = props;
  return (
    <div className='score-container'>
      <h1 className='record-header'>Record:
        <span className='score-value'>{record}</span>
      </h1>
      <h1 className='score-header'>Score:
        <span className='score-value'>{score}</span>
      </h1>
    </div>
  )
}

export default ScoreContainer;
