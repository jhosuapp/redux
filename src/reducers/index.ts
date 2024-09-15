import {combineReducers} from "redux";
import { counterReducer } from './counter.reducer'

export const reducers = combineReducers({
  counter: counterReducer,
});
