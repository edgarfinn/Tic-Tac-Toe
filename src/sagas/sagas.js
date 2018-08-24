import { all, put, takeEvery, select } from 'redux-saga/effects'
import { getOccupations, getCurrentPlayer } from '../selectors/gamestate.js'
import isWinner from '../helpers/isWinner/index.js'
import {
  UPDATE_OCCUPATIONS,
  NEW_MOVE,
  SWITCH_PLAYERS,
  SET_WINNING_PLAYER,
  SET_WINNING_CELLS
} from '../constants/actionTypes.js'

const updateOccupations = (occupations, currentPlayer, cell) => (
  {
    type: UPDATE_OCCUPATIONS,
    payload: { ...occupations, [cell]: currentPlayer }
  }
)

export function * helloSaga () {
  console.log('Hello saga')
}

export const startNewMove = (cell) => {
  return {type: NEW_MOVE, cell}
}

export function * newMove ({cell}) {
  // UPDATE OCCUPATIONS
  const prevOccupations = yield select(getOccupations)
  const currentPlayer = yield select(getCurrentPlayer)
  const { payload: newOccupations } = yield put(updateOccupations(prevOccupations, currentPlayer, cell))

  if(isWinner(newOccupations, currentPlayer) !== false) {
    const winningCells = isWinner(newOccupations, currentPlayer)
    yield put({type: SET_WINNING_PLAYER, payload: currentPlayer})
    yield put({type: SET_WINNING_CELLS, payload: winningCells})
  }
  yield put({type: SWITCH_PLAYERS})



  // ASSESS VICTORY
  //   if(victory) {
  //     - UPDATE-VOCTORY
  //     - UPDATE WINNING CELLS
  // }
  // SWITCH PLAYERS
}

function * watchNewMove () {
  yield takeEvery(NEW_MOVE, newMove)
}

export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchNewMove()
  ])
}
