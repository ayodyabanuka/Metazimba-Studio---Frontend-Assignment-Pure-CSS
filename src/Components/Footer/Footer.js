import React from 'react';
import './Footer.css';
function Footer() {
  return (
    <div className='footermain'>
      <div class='footer'>
        <div class='inner-footer'>
          <div class='footer-items'>
            <h1>Metazimba Studio</h1>
            <p>
              MetaVerse company what engaged in data-driven marketing, news
              media and gaming in the metaverse.
            </p>
          </div>

          <div class='footer-items'>
            <h3>Quick Links</h3>
            <div class='border1'></div>
            <ul id='footerul'>
              <a href='#'>
                <li di='footerli'>Home</li>
              </a>
              <a href='#'>
                <li id='footerli'>Games</li>
              </a>
              <a href='#'>
                <li id='footerli'>News Media</li>
              </a>
              <a href='#'>
                <li id='footerli'>About Us</li>
              </a>
              <a href='#'>
                <li id='footerli'>Contact Us</li>
              </a>
            </ul>
          </div>

          <div class='footer-items'>
            <h3>Contact us</h3>
            <div class='border1'></div>
            <ul id='footerul'>
              <li id='footerli'>
                <i class='fa fa-map-marker' aria-hidden='true'></i>XYZ, abc
              </li>
              <li id='footerli'>
                <i class='fa fa-phone' aria-hidden='true'></i>123456789
              </li>
              <li id='footerli'>
                <i class='fa fa-envelope' aria-hidden='true'></i>xyz@gmail.com
              </li>
            </ul>

            <div class='social-media'>
              <a href='#'>
                <i class='fab fa-instagram'></i>
              </a>
              <a href='#'>
                <i class='fab fa-facebook'></i>
              </a>
              <a href='#'>
                <i class='fab fa-google-plus-square'></i>
              </a>
            </div>
          </div>
        </div>

        <div class='footer-bottom'>Copyright &copy; Metazimba Studio</div>
      </div>
    </div>
  );
}

export default Footer;
