import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GameBoard = ({ currentPlayer }) => {
  const Board = styled.div`
    width: 100px;
    height: 100px;
    background-color: yellow;
  `;
  return (
    <Board>
      {currentPlayer}
    </Board>
  );
};

GameBoard.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};

export default GameBoard;
