// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #444;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarLink = styled(Link)`
  margin: 0 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/">Accueil</NavbarLink>
      <NavbarLink to="/newpage">Puissance 4</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
