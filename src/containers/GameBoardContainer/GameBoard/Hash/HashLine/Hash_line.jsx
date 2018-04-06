import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const leftOffest = ({ position }) => {
  switch (position) {
    case 'left': return 'calc(33.33% - 2px)';
    case 'right': return 'calc(66.66% - 2px)';
    default:
      return 'auto;';
  }
};

const topOffest = ({ position }) => {
  switch (position) {
    case 'top': return 'calc(33.33% - 2px);';
    case 'bottom': return 'calc(66.66% - 2px);';
    default:
      return 'auto;';
  }
};

const HashLine = ({ linePosition }) => {
  const animationParam = (linePosition === 'top' || linePosition === 'bottom') ? 'width' : 'height';

  const expand = keyframes`
    0% {
      ${animationParam}: 4px;
    }
    100% {
      ${animationParam}: calc(100% - 20px);;
    }
  `;

  const StyledLine = styled.div`
    position: absolute;
    box-sizing: border-box;
    height: 4px;
    background-color: black;
    width: 4px;
    border-radius: 3px;
    left: ${leftOffest};
    top: ${topOffest};
    animation: ${expand} 0.7s;
    animation-fill-mode: forwards;
  `;

  return (
    <StyledLine position={linePosition} />
  );
};

HashLine.propTypes = {
  linePosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  // delay: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
};

export default HashLine;
