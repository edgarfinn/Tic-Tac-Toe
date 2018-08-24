import { combineReducers } from 'redux'
import currentPlayerReducer from './reducer_current-player'
import boardOccupationsreducer from './reducer_board-occupations'
import winningPlayer from './reducer_winning-player'
import winningCells from './reducer_winning-cells'

const rootReducer = combineReducers({
  currentPlayer: currentPlayerReducer,
  boardOccupations: boardOccupationsreducer,
  winningPlayer: winningPlayer,
  winningCells: winningCells,
})

export default rootReducer
