import { combineReducers } from "redux";
import dailyReducer from "./dailyReducer";

const rootReducer = combineReducers({
  dailyReducer,
});

export default rootReducer;
