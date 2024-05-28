export const SET_USERNAME = "SET_USERNAME";
export const SET_SELECTED_USER = "SET_SELECTED_USER";
export const SET_SEARCH_TAG = "SET_SEARCH_TAG";
import type { Dispatch } from "redux";

export const setUernameAction = (username: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_USERNAME,
    payload: username,
  });
};

export const setSearchTagAction =
  (username: string) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SEARCH_TAG,
      payload: username,
    });
  };

export const setUidSelectedUserAction =
  (uid: string) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SELECTED_USER,
      payload: uid,
    });
  };
