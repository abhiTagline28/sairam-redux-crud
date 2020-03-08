import { combineReducers } from "redux";
import  itemReducer  from '../itemsReducers';

export default combineReducers({
  item: itemReducer
});
