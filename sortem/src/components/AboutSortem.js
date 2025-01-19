import React from "react";
import styled from "styled-components";
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.lg};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.backgroundPrimary}, ${(props) => props.theme.colors.backgroundSecondary});
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: ${(props) => props.theme.spacing.md};
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: ${(props) => props.theme.spacing.lg};

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${(props) => props.theme.typography.fontWeight.extraBold};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  color: ${(props) => props.theme.colors.textPrimary};
  line-height: 1.8;
  margin-bottom: ${(props) => props.theme.spacing.md};
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.typography.fontSizes.small};
  }
`;

const Strong = styled.strong`
  display: block;
  font-size: calc(${(props) => props.theme.typography.fontSizes.h3} + 1.5rem);
  margin-top: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Change to column to stack items vertically */
  text-align: center;

  img {
    max-width: 80%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 768px) {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;



const Stron = styled.strong`
  display: block;
  font-size: ${(props) => props.theme.typography.fontSizes.h3}+1.75rem;
  margin-top: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
`;

const Caption = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.h3}+1.75rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-top: ${(props) => props.theme.spacing.sm};
  
  text-align: center;
  `;
const AboutSortem = () => {
  return (
    <Section id="about">
      <TextContainer>
        <Title>Introducing Sortem</Title>
        <Description>
          
          At Sortem, we believe in simplifying email management. Our goal is to
          make your digital life easier by summarizing and organizing your emails
          into categories that matter. Save time, stay focused, and let Sortem handle
          the clutter for you.
          <Stron>Sortem: Your emails, sorted and simplified.</Stron>
        </Description>
      </TextContainer>
      <ImageContainer>
        <img src="/img/svg/developer.svg" alt="Mission illustration" />
        <Caption> Take A Sip While We Make Your Life Easier</Caption>
      </ImageContainer>
    </Section>
  );
};

export default AboutSortem;
