import React from 'react';
//Import components
import Wave from './Wave';
//This if I want to import an image from another folder
import home1 from '../img/home1.png';
import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from '../styles';
//Framer Motion
//If I want to style something, I've to add inside the tag motion.tag, example: <motion.h2></motion.h2>
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div>
          {/* I'm adding this HIDE div because I want to reveal the text */}
          <StyledHide>
            <motion.h2 variants={titleAnim}>I work to develop</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>needs</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>
          Contact me for any front and back end project, I'll be glad to develop
          all your needs for your business.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img src={home1} alt="guy with camera" variants={photoAnim} />
      </StyledImage>
      <Wave />
    </StyledLayout>
  );
};

//Styled Components

export default AboutSection;
