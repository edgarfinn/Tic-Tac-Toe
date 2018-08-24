import { SET_WINNING_PLAYER } from '../constants/actionTypes.js'

export default (state = null, action) => {
  switch (action.type) {
    case SET_WINNING_PLAYER:
      return action.payload
    default:
      return state
  }
}
