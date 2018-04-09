import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameBoard from './GameBoard/Game_board';

const GameBoardContainer = (props) => {
  const { currentPlayer } = props;
  const cells = [
    'A1', 'A2', 'A3',
    'B1', 'B2', 'B3',
    'C1', 'C2', 'C3',
  ];

  return (
    <GameBoard currentPlayer={currentPlayer} cells={cells} />
  );
};

GameBoardContainer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    currentPlayer: state.currentPlayer,
  }
);

export default connect(mapStateToProps)(GameBoardContainer);
