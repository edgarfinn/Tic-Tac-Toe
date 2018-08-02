import { all, put, takeEvery, select } from 'redux-saga/effects'
import { UPDATE_OCCUPATIONS, NEW_MOVE } from '../constants'
import { getOccupations, getCurrentPlayer } from '../selectors/gamestate'

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
  const occupations = yield select(getOccupations)
  const currentPlayer = yield select(getCurrentPlayer)
  const { payload: newOccupations } = yield put(updateOccupations(occupations, currentPlayer, cell))

  // const victoryState = yield assessVictory(newOccupations)

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
