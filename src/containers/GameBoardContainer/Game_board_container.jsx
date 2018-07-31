import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { newMove } from '../../actions';
import GameBoard from '../../components/App/GameBoard/Game_board';

class GameBoardContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(cell) {
    const { occupations, newMove, currentPlayer } = this.props;
    newMove(occupations, currentPlayer, cell);
  }

  render() {
    console.log('occupations:', this.props.occupations);
    const { currentPlayer } = this.props;
    const cells = [
      'A1', 'A2', 'A3',
      'B1', 'B2', 'B3',
      'C1', 'C2', 'C3',
    ];

    return (
      <GameBoard currentPlayer={currentPlayer} cells={cells} handleClick={this.handleClick} />
    );
  }
}

GameBoardContainer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};

const mapStateToProps = state => (
  {
    currentPlayer: state.currentPlayer,
    occupations: state.boardOccupations,
  }
);

const mapDispatchToProps = dispatch => (bindActionCreators({ newMove }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardContainer);
