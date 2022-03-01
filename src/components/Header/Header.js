import React from 'react';
import memoryCardIcon from '../../images/icons/memory-card-icon.svg';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <img src={memoryCardIcon} alt='Bug Icon' className='header-icon'></img>
      <h1 className='header-text'>Memory Card</h1>
    </header>
  )
}

export default Header;
