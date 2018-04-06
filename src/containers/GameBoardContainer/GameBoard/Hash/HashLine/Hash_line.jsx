import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const lineHeight = ({ position }) => {
  const height = (position === 'left' || position === 'right') ? 'calc(100% - 20px);' : '0;';
  return height;
};

export const lineWidth = ({ position }) => {
  const width = (position === 'top' || position === 'bottom') ? 'calc(100% - 20px);' : '0;';
  return width;
};

export const leftOffest = ({ position }) => {
  switch (position) {
    case 'left': return 'calc(33.33% - 2px);';
    case 'right': return 'calc(66.66% - 2px);';
    default:
      return 'auto;';
  }
};

export const topOffest = ({ position }) => {
  switch (position) {
    case 'top': return 'calc(33.33% - 2px);';
    case 'bottom': return 'calc(66.66% - 2px);';
    default:
      return 'auto;';
  }
};

const HashLine = ({ linePosition }) => {
  const StyledLine = styled.div`
    position: absolute;
    box-sizing: border-box;
    height: ${lineHeight};
    width: ${lineWidth};
    border: 2px solid black;
    border-radius: 3px;
    left: ${leftOffest};
    top: ${topOffest};
  `;

  return (
    <StyledLine position={linePosition} />
  );
};

HashLine.propTypes = {
  linePosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
};

export default HashLine;
