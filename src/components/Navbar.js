// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaGamepad, FaInfoCircle } from 'react-icons/fa';

const NavbarContainer = styled.div`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #ddd;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavTitle>Mon Portfolio</NavTitle>
      <NavLinks>
        <NavLink to="/">
          <Icon><FaHome /></Icon>
          Accueil
        </NavLink>
        <NavLink to="/newpage">
          <Icon><FaGamepad /></Icon>
          Puissance 4
        </NavLink>
        <NavLink to="/about">
          <Icon><FaInfoCircle /></Icon>
          À propos
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
