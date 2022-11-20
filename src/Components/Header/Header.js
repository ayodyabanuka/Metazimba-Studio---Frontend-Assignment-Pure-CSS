import React from 'react';
import './Header.css';
function Header() {
  return (
    <div className='headertext'>
      <div class='row'>
        <div class='column'>
          <h1>
            Your No.1 <br /> partner in <br /> marketing.
          </h1>
        </div>
        <div class='column'>
          <div className='logoturning'>
            <div className='square'>
              <img src={require('../../Assets/logoicon.png')} alt='logo icon' />
            </div>
          </div>
        </div>
      </div>
      <div class='scroll-downs'>
        <div class='mousey'>
          <div class='scroller'></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
