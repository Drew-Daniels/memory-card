import React from 'react';
import githubIcon from './github-icon.png';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
        <a id='github-link-project' href='https://github.com/Drew-Daniels/memory-card'>
          <img src={githubIcon} alt='Github Icon' className='github-icon'></img>
        </a>
        <div className='github-profile-container'>
          <span>Created by</span>
          <a id='github-link-profile' href='https://github.com/Drew-Daniels'>Drew Daniels</a>
        </div>
    </footer>
  )
}

export default Footer;
