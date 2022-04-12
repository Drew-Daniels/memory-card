// framework
import React, { useState } from 'react';

// components
import Header from './components/Header/Header';
import ScoreContainer from './components/ScoreContainer/ScoreContainer';
import UI from './components/UI/UI';
import Footer from './components/Footer/Footer';

// styling
import './Reset.css'
import './App.css';

function App() {

  const [score, setScore] = useState(0);

  return (
    <div className='App content-container'>
      <div className='content'>
        <Header/>
        <ScoreContainer score={score} />
        <UI score={score} setScore={setScore} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
