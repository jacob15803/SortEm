import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideGradient = keyframes`
  from { top: -100%; }
  to { top: 100%; }
`;

const textAppear = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const RecapCard = styled.article`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  overflow: hidden;

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1.5rem 0;
    color: ${(props) => props.theme.colors.accentPrimary};
    position: relative;
    padding-bottom: 0.75rem;
    opacity: 0;
    animation: ${textAppear} 0.8s ease-out 0.3s forwards;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 2px;
      background: ${(props) => props.theme.colors.accentSecondary};
      transform: scaleX(0);
      transform-origin: left;
      animation: ${textAppear} 0.6s ease-out 0.6s forwards;
    }
  }

  p {
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textSecondary};
    margin: 0;
    position: relative;
    overflow: hidden;
    white-space: pre-wrap;

    &::after {
      content: '';
      position: absolute;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.05) 15%,
        transparent 85%
      );
      animation: ${slideGradient} 1.8s ease-out 0.4s forwards;
    }

    span.word {
      opacity: 0;
      animation: ${textAppear} 0.4s ease-out forwards;
      display: inline-block;
    }

    span.space {
      display: inline-block;
      width: 0.25em;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background-color: ${(props) => props.theme.colors.accentPrimary};
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    &:hover {
      background-color: ${(props) => props.theme.colors.accentSecondary};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.accentTertiary};
      cursor: not-allowed;
      transform: none;
    }
  }
`;

// Improved text splitting that preserves spaces
const splitTextIntoSpans = (text) => {
  const wordsAndSpaces = text.split(/(\s+)/);
  
  return wordsAndSpaces.map((segment, index) => {
    if (segment.match(/\s+/)) {
      // Render spaces as separate spans
      return <span key={`space-${index}`} className="space"> </span>;
    }
    return (
      <span
        key={`word-${index}`}
        className="word"
        style={{ animationDelay: `${0.8 + index * 0.05}s` }}
      >
        {segment}
      </span>
    );
  });
};

const DailyRecapCard = ({ recap }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
  
    const handleTTS = () => {
      const utterance = new SpeechSynthesisUtterance(recap);
      utterance.lang = 'en-US';
      
      setIsSpeaking(true);
  
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      speechSynthesis.speak(utterance);
    };
  
    return (
      <RecapCard>
        <h3>Daily Recap</h3>
        <p>{splitTextIntoSpans(recap)}</p>
        <button onClick={handleTTS} disabled={isSpeaking}>
          {isSpeaking ? 'Speaking...' : 'Read Aloud'}
        </button>
      </RecapCard>
    );
  };
  
  export default DailyRecapCard;
