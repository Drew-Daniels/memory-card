import Header from './components/Header/Header';
import UI from './components/UI/UI';
import Footer from './components/Footer/Footer';

import './Reset.css'
import './App.css';

function App() {
  return (
    <div className='App content-container'>
      <div className='content'>
        <Header/>
        <UI />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
