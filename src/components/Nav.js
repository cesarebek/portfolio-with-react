import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Cezary Bek
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About Me</a>
        </li>
        <li>
          <a href="#">2. My Work</a>
        </li>
        <li>
          <a href="#">3. Contact Me</a>
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
