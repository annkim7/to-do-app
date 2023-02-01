export const GET_LOADING = "GET_LOADING";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

// export const loadUsers = (url) => (dispatch) => {
//   dispatch({ type: LOAD_USERS_LOADING });
//   fetch(url)
//     .then((response) => response.json())
//     .then(
//       (data) => dispatch({ type: LOAD_USERS_SUCCESS, data }),
//       (error) =>
//         dispatch({
//           type: LOAD_USERS_ERROR,
//           error: error.message || "Unexpected Error!!!",
//         })
//     );
// };

export const getData = (url) => async (dispatch) => {
  dispatch({ type: GET_LOADING });
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: GET_SUCCESS, data });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      error: error.message || "Unexpected Error!!!",
    });
  }
};
