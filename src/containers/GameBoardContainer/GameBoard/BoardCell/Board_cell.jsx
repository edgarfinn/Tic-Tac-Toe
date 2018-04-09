import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoardCell = ({ cell }) => {
  const Cell = styled.div`
    height: 33.33%;
    width: 33.33%;
    box-sizing: border-box;
    padding: 10px;
  `;
  return (
    <Cell>{cell}</Cell>
  );
};

BoardCell.propTypes = {
  cell: PropTypes.oneOf(['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']).isRequired,
};

export default BoardCell;
