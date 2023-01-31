import { TEST } from "../actions/index";

const initialState = {
  test: "test",
};

const dailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return "check";
    default:
      return state;
  }
};

export default dailyReducer;
