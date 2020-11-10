import React from 'react';
//This if I want to import an image from another folder
import home1 from '../img/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          {/* I'm adding this HIDE div because I want to reveal the text */}
          <StyledHide>
            <h1>I work to develop</h1>
          </StyledHide>
          <StyledHide>
            <h1>
              your <span>needs</span>
            </h1>
          </StyledHide>
          <StyledHide>
            <h1>come true.</h1>
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
    </StyledAbout>
  );
};

//Styled Components
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    /* This trick allows me to zoom in into the image without distort it with the width of 100% */
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
