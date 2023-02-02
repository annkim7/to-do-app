import { ITEM_SUCCESS, ITEM_LOADING, ITEM_ERROR } from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case ITEM_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case ITEM_ERROR: {
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
