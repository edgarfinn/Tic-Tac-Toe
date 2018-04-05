import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GameBoard from './GameBoard/Game_board';

const GameBoardContainer = (props) => {
  const { currentPlayer } = props;

  return (
    <GameBoard currentPlayer={currentPlayer} />
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
