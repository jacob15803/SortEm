import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.md};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.primary} 0%, ${(props) => props.theme.colors.secondary} 100%);
  text-align: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.textPrimary};
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.spacing.sm};
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${(props) => props.theme.typography.fontWeight.extraBold};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: ${(props) => props.theme.spacing.md};
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.typography.fontSizes.small};
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(90deg, ${(props) => props.theme.colors.secondary}, ${(props) => props.theme.colors.primary});
  color: ${(props) => props.theme.colors.textSecondary};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: none;
  border-radius: 30px;
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.theme.colors.accent};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.textPrimary};
  }
`;


const WhyUseSortem = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
    // Navigate to the login page
  };
  return (
    <Section id="why-section">
      <Title>Why Use Sortem?</Title>
      <Description>
        Sortem helps you manage your emails effortlessly by summarizing them and categorizing
        under various tags. Stay organized, save time, and never miss an important message!
      </Description>
      <LoginButton onClick={handleLoginClick}>
        Try Sortem Now
      </LoginButton>
    </Section>
  );
};

export default WhyUseSortem;
