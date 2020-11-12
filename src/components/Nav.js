import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        Cezary Bek
      </Link>
      <ul>
        <li>
          <Link to="/">1. About Me</Link>
        </li>
        <li>
          <Link to="/work">2. My Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Me</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  background: #282828;
  color: white;
  padding: 1rem 10rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    list-style-type: none;
    display: flex;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.7rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;

export default Nav;
