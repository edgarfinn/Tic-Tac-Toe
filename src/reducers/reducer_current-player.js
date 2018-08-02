import { SWITCH_PLAYERS } from '../constants'

export default (state = 'crosses', action) => {
  switch (action.type) {
    case SWITCH_PLAYERS:
      if (state === 'crosses') {
        return 'noughts'
      } return 'crosses'
    default:
      return state
  }
}
