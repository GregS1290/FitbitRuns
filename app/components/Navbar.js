import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 2 / 1 / span 7 / span 1;
  border: 2px solid black;
  border-radius: 5px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #70798c;

  &:hover {
    color: #1c1f33;
    transition: color 250ms linear 250ms;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/Profile'>Profile</StyledLink>
      <StyledLink to='/Charities'>Charities</StyledLink>
      <StyledLink to='/Goals'>Goals</StyledLink>
      <StyledLink to='/Contact'>Contact</StyledLink>
      <StyledLink to='/Logout'>Log Out</StyledLink>
    </Nav>
  );
};

export default Navbar;
