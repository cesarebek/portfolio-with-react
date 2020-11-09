import React from 'react';
//This if I want to import an image from another folder
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          //I'm adding this HIDE div because I want to reveal the text
          <div className="hide">
            <h1>I work to develop</h1>
          </div>
          <div className="hide">
            <h1>
              your <span>needs</span>
            </h1>
          </div>
          <div className="hide">
            <h1>come true.</h1>
          </div>
        </div>
        <p>
          Contact me for any front and back end project, I'll be glad to develop
          all your needs for your business.
        </p>
        <button>Contact Me</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with camera" />
      </div>
    </div>
  );
};

export default AboutSection;
