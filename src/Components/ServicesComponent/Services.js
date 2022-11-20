import React from 'react';
import './Services.css';
import ServiceSlider from './Slider.js';

function Services() {
  return (
    <div className='servicemain'>
      <div className='servicetxt'>
        <h1>Our white-label digital marketing services &#38; solutions</h1>
        <p>
          Expanding your agency or introducing new marketing services that your
          clients request can be costly and time-consuming. Our white-label
          digital marketing services and solutions aim to improve your bottom
          line while driving trackable and profitable results for your clients.
          The strategy and fulfillment work you source to Data Driven Marketers
          will be completely white-labeled and retrofit to your brand.
        </p>
        <a href='' class='seemore'>
          See More
        </a>
      </div>

      <ServiceSlider />
    </div>
  );
}

export default Services;
