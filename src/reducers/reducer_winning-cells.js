import { SET_WINNING_CELLS } from '../constants/actionTypes.js'

export default (state = null, action) => {
  switch (action.type) {
    case SET_WINNING_CELLS:
      return action.payload
    default:
      return state
  }
}
