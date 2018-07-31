import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { newMove } from '../../actions'
import GameBoard from '../../components/App/GameBoard/Game_board'

class GameBoardContainer extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (cell) {
    const { occupations, newMove, currentPlayer } = this.props
    newMove(occupations, currentPlayer, cell)
  }

  render () {
    const { currentPlayer, occupations } = this.props

    return (
      <GameBoard
        currentPlayer={currentPlayer}
        handleClick={this.handleClick}
        occupations={occupations}
      />
    )
  }
}

GameBoardContainer.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  occupations: PropTypes.object.isRequired,
  newMove: PropTypes.func.isRequired
}

const mapStateToProps = state => (
  {
    currentPlayer: state.currentPlayer,
    occupations: state.boardOccupations
  }
)

const mapDispatchToProps = dispatch => (bindActionCreators({ newMove }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardContainer)
