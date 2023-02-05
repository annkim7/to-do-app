export const GET_LOADING = "GET_LOADING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const DEL_SUCCESS = "DEL_SUCCESS";
export const EDIT_SUCCESS = "EDIT_SUCCESS";

const BASE_URL = "/";

export const getData = (url) => async (dispatch) => {
  dispatch({ type: GET_LOADING });
  try {
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      dispatch({ type: GET_SUCCESS, data });
    }, 1000);
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      error: error.message || "Unexpected Error!!!",
    });
  }
};

export const addData = (url, item) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    dispatch({ type: ADD_SUCCESS, data });
    setTimeout(() => {
      window.location.href = BASE_URL;
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export const editData = (url, item) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    dispatch({ type: EDIT_SUCCESS, data });
    setTimeout(() => {
      window.location.href = BASE_URL;
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export const delData = (url) => async (dispatch) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const id = await response.json();
    dispatch({ type: DEL_SUCCESS, id });
    setTimeout(() => {
      window.location.href = BASE_URL;
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};
