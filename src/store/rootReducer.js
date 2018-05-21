import { combineReducers } from 'redux';
import game from '../game/reducer';

const rootReducer = combineReducers({
  game: game,
});

export default rootReducer;