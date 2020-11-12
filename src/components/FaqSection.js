import React from 'react';
import styled from 'styled-components';
import { StyledLayout } from '../styles';
//import Toggle
import Toggle from './Toggle';
//Import frame motion feature
import { AnimateSharedLayout } from 'framer-motion';
//import animation
import { scrollReveal } from '../animation';
//import scroll effect
import { useScroll } from './useScroll';

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFaqSection
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={'How Do I Start'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              praesentium nam delectus nemo. Sequi, explicabo.
            </p>
          </div>
        </Toggle>

        <Toggle title={'Daily Schedule'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              praesentium nam delectus nemo. Sequi, explicabo.
            </p>
          </div>
        </Toggle>

        <Toggle title={'Different Payment Method'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              praesentium nam delectus nemo. Sequi, explicabo.
            </p>
          </div>
        </Toggle>

        <Toggle title={'What products do you offer?'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              praesentium nam delectus nemo. Sequi, explicabo.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
    margin: 0.3rem;
    padding: 0.5rem;
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
