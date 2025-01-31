import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SummaryCard = styled.article`
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay * 0.1}s;
  cursor: pointer;
  border-left: 4px solid ${(props) => props.theme.colors.accentPrimary};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(2) {
    border-left-color: ${(props) => props.theme.colors.accentSecondary};
  }

  &:nth-child(3) {
    border-left-color: ${(props) => props.theme.colors.accentTertiary};
  }
`;

const Sender = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const Subject = styled.h5`
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Summary = styled.p`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Label = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  background: ${(props) => props.color};
  color: ${(props) => props.theme.colors.textInverted};
`;

const EmailSummaryCard = ({ email, delay }) => {
  return (
    <SummaryCard delay={delay}>
      <Sender>
        <h4>{email.sender}</h4>
        <Label color={email.labelColor}>{email.label}</Label>
      </Sender>
      <Subject>{email.subject}</Subject>
      <Summary>{email.summary}</Summary>
    </SummaryCard>
  );
};

export default EmailSummaryCard;