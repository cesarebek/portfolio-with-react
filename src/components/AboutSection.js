import React from 'react';
//This if I want to import an image from another folder
import home1 from '../img/home1.png';
import styled from 'styled-components';
import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          {/* I'm adding this HIDE div because I want to reveal the text */}
          <StyledHide>
            <h2>I work to develop</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>needs</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>come true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact me for any front and back end project, I'll be glad to develop
          all your needs for your business.
        </p>
        <button>Contact Me</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledLayout>
  );
};

//Styled Components

export default AboutSection;
