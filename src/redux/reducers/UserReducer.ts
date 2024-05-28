import {
  SET_SELECTED_USER,
  SET_USERNAME,
  SET_SEARCH_TAG,
} from "../actions/userAction";

type SetUsernameType = {
  type: typeof SET_USERNAME;
  payload: string;
};

type SetSelectedUserType = {
  type: typeof SET_SELECTED_USER;
  payload: string;
};

type SetSearchingTagType = {
  type: typeof SET_SEARCH_TAG;
  payload: string;
};

export type UserActionType = SetUsernameType | SetSelectedUserType | SetSearchingTagType;

export type UserStoreType = {
  username: string;
  uidOFSelectedUser: string;
  searchTag: string;
};

const initialState: UserStoreType = {
  username: "",
  uidOFSelectedUser: "",
  searchTag: "",
};

function UserReducer(state = initialState, action: UserActionType): UserStoreType {
    switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case SET_SEARCH_TAG:
      return { ...state, searchTag: action.payload };
    case SET_SELECTED_USER:
      return { ...state, uidOFSelectedUser: action.payload };
    default:
      return state;
  }
}

export default UserReducer;
