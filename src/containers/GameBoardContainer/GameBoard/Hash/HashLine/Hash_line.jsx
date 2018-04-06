import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const offsetVal = ({ position }) => {
  switch (position) {
    case 'left':
    case 'top': return 'calc(33.33% - 2px);';
    case 'right':
    case 'bottom': return 'calc(66.66% - 2px);';
    default:
      return 'auto;';
  }
};

const offsetParam = ({ position }) => {
  switch (position) {
    case 'top':
    case 'bottom': return 'top';
    case 'left':
    case 'right': return 'left';
    default:
      return 'auto;';
  }
};

const HashLine = ({ linePosition, transition }) => {
  const axis = (linePosition === 'top' || linePosition === 'bottom') ? 'X' : 'Y';
  const animationParam = axis === 'X' ? 'width' : 'height';

  const lengthen = keyframes`
    0% {
      ${animationParam}: 0;
    }
    100% {
      ${animationParam}: calc(100% - 20px);;
    }
  `;

  const animationDelay = () => `${Number(transition) * 0.6}s`;

  const initialHeight = axis === 'X' ? '4px' : '0';
  const initialWidth = axis === 'Y' ? '4px' : '0';

  const StyledLine = styled.div`
    position: absolute;
    box-sizing: border-box;
    height: ${initialHeight};
    width: ${initialWidth};
    background-color: black;
    border-radius: 3px;
    ${offsetParam}: ${offsetVal};
    animation: ${lengthen} 0.7s;
    animation-fill-mode: forwards;
    animation-delay: ${animationDelay};
    animation-timing-function: cubic-bezier(.91,-0.1,.35,1);
  `;

  return (
    <StyledLine position={linePosition} />
  );
};

HashLine.propTypes = {
  linePosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  transition: PropTypes.oneOf(['1', '2', '3', '4']).isRequired,
};

export default HashLine;
