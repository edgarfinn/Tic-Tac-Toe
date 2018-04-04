import { combineReducers } from 'redux';
import CurrentPlayerReducer from './reducer_current-player';

const rootReducer = combineReducers({
  currentPlayer: CurrentPlayerReducer,
});

export default rootReducer;
