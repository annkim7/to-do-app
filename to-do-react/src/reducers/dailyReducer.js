import { GET_LOADING, GET_SUCCESS, GET_ERROR } from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export default function dailyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
