import { combineReducers } from "redux";
import dailyReducer from "./dailyReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  dailyReducer,
  itemReducer,
});

export default rootReducer;
