import {
  GET_LOADING,
  GET_SUCCESS,
  GET_ERROR,
  ADD_SUCCESS,
  DEL_SUCCESS,
  EDIT_SUCCESS,
} from "../actions";

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
    case ADD_SUCCESS: {
      return {
        ...state,
        data: [...state.data, action.data],
      };
    }
    case EDIT_SUCCESS: {
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === action.data.id) {
            return action.data;
          } else {
            return el;
          }
        }),
      };
    }
    case DEL_SUCCESS: {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.id),
      };
    }
    default: {
      return state;
    }
  }
}
