import { SWITCH_PLAYERS } from '../constants/actionTypes.js'
import { NOUGHTS, CROSSES } from '../constants/players.js'

export default (state = CROSSES, action) => {
  switch (action.type) {
    case SWITCH_PLAYERS:
      if (state === CROSSES) {
        return NOUGHTS
      } return CROSSES
    default:
      return state
  }
}
