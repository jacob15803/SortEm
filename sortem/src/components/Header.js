import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.backgroundPrimary}, ${(props) => props.theme.colors.backgroundSecondary});
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease;
  backdrop-filter: blur(5px); /* Optional: adds a blur effect to the background */
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  padding: 0.5rem 1rem;
  
  border-radius: 4px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const HeaderTitle = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSizes.h1};
  font-weight: ${(props) => props.theme.typography.fontWeight.extraBold};
  color: ${(props) => props.theme.colors.textPrimary};
  letter-spacing: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;


const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <HeaderContainer>
      <h1>Sortem</h1>
      <NavLinks>
        <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
        <NavLink onClick={() => scrollToSection("why-section")}>Why Sortem</NavLink>
        <NavLink onClick={handleLoginClick}>Login</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
