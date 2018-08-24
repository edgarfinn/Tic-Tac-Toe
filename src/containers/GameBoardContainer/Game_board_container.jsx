import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { startNewMove } from '../../sagas/sagas'
import GameBoard from '../../components/App/GameBoard/Game_board'

class GameBoardContainer extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (cell) {
    this.props.startNewMove(cell)
  }

  render () {
    const { currentPlayer, occupations, winningCells } = this.props

    return (
      <GameBoard
        currentPlayer={currentPlayer}
        handleClick={this.handleClick}
        occupations={occupations}
        winningCells={winningCells}
      />
    )
  }
}

GameBoardContainer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  occupations: PropTypes.object.isRequired,
  startNewMove: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  {
    currentPlayer: state.currentPlayer,
    occupations: state.boardOccupations,
    winningCells: state.winningCells
  }
)

const mapDispatchToProps = dispatch => (bindActionCreators({ startNewMove }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardContainer)
