import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hash from './Hash/Hash';
import CellsList from './CellsList/Cells_list';

const GameBoard = ({ currentPlayer, cells }) => {
  const Board = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    margin: 2rem auto;
    background: #ffff88;
    background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 );
    box-shadow: 1px 3px 5px rgba(0,0,0,0.12), 1px 3px 5px rgba(0,0,0,0.24);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <Board>
      <Hash />
      <CellsList cells={cells} />
    </Board>
  );
};

GameBoard.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GameBoard;
