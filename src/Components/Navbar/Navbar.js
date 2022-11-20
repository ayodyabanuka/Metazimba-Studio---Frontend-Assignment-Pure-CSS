import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <a href='News'>Contact Us</a>
        </li>
        <li>
          <a href='News'>About Us</a>
        </li>
        <li>
          <a href='News'>News Media</a>
        </li>
        <li>
          <a href='Games'>Games</a>
        </li>
        <li>
          <a className='active' href='Home'>
            Home
          </a>
        </li>
        <li style={{ float: 'left' }}>
          <img
            className='Logostyle'
            src={require('../../Assets/logow.png')}
            alt=''
            srcset=''
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
