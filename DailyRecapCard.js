import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const RecapCard = styled.article`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.6s ease-out;

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1.5rem 0;
    color: ${(props) => props.theme.colors.accentPrimary};
    position: relative;
    padding-bottom: 0.75rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: ${(props) => props.theme.colors.accentSecondary};
    }
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 0;
  }
`;

const DailyRecapCard = ({ recap }) => (
  <RecapCard>
    <h3>Daily Recap</h3>
    <p>{recap}</p>
  </RecapCard>
);

export default DailyRecapCard;