import React from 'react';
import styled from 'styled-components';
import { StyledLayout } from '../styles';

const FaqSection = () => {
  return (
    <StyledFaqSection>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            praesentium nam delectus nemo. Sequi, explicabo.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            praesentium nam delectus nemo. Sequi, explicabo.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Different Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            praesentium nam delectus nemo. Sequi, explicabo.
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            praesentium nam delectus nemo. Sequi, explicabo.
          </p>
        </div>
      </div>
    </StyledFaqSection>
  );
};
const StyledFaqSection = styled(StyledLayout)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  span {
    display: block;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
