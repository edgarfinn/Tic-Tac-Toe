import { combineReducers } from 'redux'
import CurrentPlayerReducer from './reducer_current-player'
import BoardOccupationsreducer from './reducer_board-occupations'

const rootReducer = combineReducers({
  currentPlayer: CurrentPlayerReducer,
  boardOccupations: BoardOccupationsreducer
})

export default rootReducer
