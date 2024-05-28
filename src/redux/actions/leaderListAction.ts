export const INITIAL_LEADER_DATA = "INITIAL_LEADER_DATA";
export const UPDATE_LEADER_BOARD = "UPDATE_LEADER_BOARD";
export const REMOVE_SELECTED_USER = "REMOVE_SELECTED_USER";
export const RESET_FILTER = "RESET_FILTER";
export const UPDATE_AND_SORT_LEADER_BOARD_BY_NAME =
  "UPDATE_AND_SORT_LEADER_BOARD_BY_NAME";
export const UPDATE_AND_SORT_LEADER_BOARD_BY_RANK =
  "UPDATE_AND_SORT_LEADER_BOARD_BY_RANK";
export const SET_TOGGLE_SEARCH_RESULT = "SET_TOGGLE_SEARCH_RESULT";
import type { Dispatch } from "redux";

export type LeaderDataType = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  realIndex?: number;
  similarity?: number;
};

export type LeaderBoardDataType = {
  [key: string]: LeaderDataType;
};

export const initailLeaderDataAction =
  (leaderData: LeaderDataType[]) => (dispatch: Dispatch) => {
    dispatch({
      type: INITIAL_LEADER_DATA,
      payload: leaderData,
    });
  };

export const updateLeaderBoardAction =
  (selectedUserData: LeaderDataType) => (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_LEADER_BOARD,
      payload: {
        data: selectedUserData,
      },
    });
  };

export const updateAndSortLeaderBoardByRankAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_AND_SORT_LEADER_BOARD_BY_RANK,
  });
};

export const updateAndSortLeaderBoardByNameAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: UPDATE_AND_SORT_LEADER_BOARD_BY_NAME,
  });
};

export const resetSelectedUserAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_SELECTED_USER,
  });
};

export const resetFilterAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: RESET_FILTER,
  });
};

export const setToggleSearchResultAction =
  (isToggle: boolean) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_TOGGLE_SEARCH_RESULT,
      payload: isToggle,
    });
};
  