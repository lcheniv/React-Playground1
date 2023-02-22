import React from 'react';
import './AirPodsMax.css';

// import airpodsMax from './airpods-max.jpg';
// import airpodsMaxSlider1 from './airpods-max-slider-1.jpg';
// import airpodsMaxSlider2 from './airpods-max-slider-2.jpg';
// import airpodsMaxSlider3 from './airpods-max-slider-3.jpg';
import placeholderImg from './placeholder.png';


function AirPodsMax() {
  return (
    <div className="airpods-max">
      <div className="airpods-max-header">
        <h1>AirPods Max</h1>
        <p>Introducing the ultimate listening experience</p>
        <button>Buy</button>
      </div>
      <div className="airpods-max-content">
        <div className="airpods-max-image">
          <img src={placeholderImg} alt="AirPods Max" />
        </div>
        <div className="airpods-max-features">
          <h2>Overview</h2>
          <p>AirPods Max reimagine over-ear headphones. An Apple-designed dynamic driver provides immersive high-fidelity audio. Every detail, from canopy to cushions, has been designed for an exceptional fit. Industry-leading Active Noise Cancellation blocks outside noise, while Transparency mode lets it in. And spatial audio with dynamic head tracking provides theater-like sound that surrounds you.</p>
          <button>Learn more</button>
        </div>
      </div>
      <div className="airpods-max-slider">
        <div className="airpods-max-slider-image">
          <img src={placeholderImg} alt="AirPods Max Slider 1" />
        </div>
        <div className="airpods-max-slider-image">
          <img src={placeholderImg} alt="AirPods Max Slider 2" />
        </div>
        <div className="airpods-max-slider-image">
          <img src={placeholderImg} alt="AirPods Max Slider 3" />
        </div>
      </div>
    </div>
  );
}

export default AirPodsMax;
