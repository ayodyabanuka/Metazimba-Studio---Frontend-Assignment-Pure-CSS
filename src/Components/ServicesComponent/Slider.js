import React from 'react';

import './Slider.css';

function serviceslider() {
  return (
    <div className='sliderservices'>
      <div className='columnslider'>
        <div id='servicesheading'>
          <h1>Services</h1>
        </div>
        <div className='grid-container'>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/searchengineoptimization.png')}
                  alt='searchengineoptimization'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>Search Engine Optimization</b>
                </h4>
                <p>
                  At Data Driven Marketers, SEO is no joke. When you partner
                  with us, you get strategic, organized, and effective SEO
                  campaigns that start with well-researched and tailored
                  strategies.
                </p>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/serachenginemarketing.png')}
                  alt='serachenginemarketing'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>
                    Serach Engine <br /> Marketing
                  </b>
                </h4>
                <p>
                  To us, search engine marketing encompasses everything but SEO
                  and the web. We’ll ensure your client’s SEM strategies are on
                  point and follow their sales funnel, primary PPC goals, and
                  more. Our SEM strategy services include:
                </p>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/socialmedia.png')}
                  alt='socialmedia'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>Social Media</b>
                </h4>
                <p>
                  Help your clients grow their social presence and social
                  authority with our white label social media marketing
                  services:
                </p>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/localSeo.png')}
                  alt='localSeo'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>Local Seo</b>
                </h4>
                <p>
                  Local SEO services are different from our SEO services. We
                  offer the following local SEO services in addition to local
                  SEO outreach and business brand building:
                </p>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/emailmarketing.png')}
                  alt='emailmarketing'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>Email Marketing</b>
                </h4>
                <p>
                  The king of marketing communications—is included in our white
                  label marketing services for full-service clients. The
                  following services are included:
                </p>
              </div>
            </div>
          </div>
          <div className='grid-item'>
            <div class='card'>
              <div className='cardimage'>
                <img
                  src={require('../../Assets/webdevelopment.png')}
                  alt='webdevelopment'
                />
              </div>
              <div class='containerslider'>
                <h4>
                  <b>Web Development</b>
                </h4>
                <p>
                  If your agency isn’t already offering web development or web
                  maintenance services, we’ve got you covered. Our team of
                  developers are focused on quick and bugless development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default serviceslider;
