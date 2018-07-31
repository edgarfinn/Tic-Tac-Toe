import { NEW_MOVE } from '../actions'

export default (state = 'crosses', action) => {
  switch (action.type) {
    case NEW_MOVE:
      if (state === 'crosses') {
        return 'noughts'
      } return 'crosses'
    default:
      return state
  }
}
