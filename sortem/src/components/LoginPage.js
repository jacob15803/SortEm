import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.fontSizes.h1};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 4px ${(props) => props.theme.colors.primary};
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


const ForgotPassword = styled.a`
  font-size: ${(props) => props.theme.typography.fontSizes.small};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-top: ${(props) => props.theme.spacing.sm};
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("Login functionality not implemented yet!");
    navigate('/dashboard');
  };

  return (
    <LoginContainer>
      <Title>Login to Sortem</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email Address" required />
        <Input type="password" placeholder="Password" required />
        <LoginButton type="submit">Login</LoginButton>
        <ForgotPassword href="#forgot-password">Forgot Password?</ForgotPassword>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
