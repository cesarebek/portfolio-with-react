import React from 'react';
//import home2
import home2 from '../img/home2.png';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
//import Styles
import styled from 'styled-components';
import { StyledLayout, StyledDescription, StyledImage } from '../styles';

const ServicesSection = () => {
  return (
    <StyledServicesLayout>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
      <StyledServicesDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </StyledCards>
      </StyledServicesDescription>
    </StyledServicesLayout>
  );
};

const StyledServicesLayout = styled(StyledLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledServicesDescription = styled(StyledDescription)`
  padding-right: 0rem;
  padding-left: 5rem;
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ServicesSection;
