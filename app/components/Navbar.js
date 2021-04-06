import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  grid-area: 2 / 1 / span 7 / span 1;
  border: 5px solid black;
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  font-size: 20px;
  &.${activeClassName} {
    color: #cebcb6;
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
