import {
  SET_SEARCH_TAG,
  SET_SELECTED_USER,
  SET_USERNAME,
  setSearchTagAction,
} from "../actions/userAction";
import UserReducer, { UserActionType, UserStoreType } from "./UserReducer";

describe("UserReducer", () => {
  const initialState: UserStoreType = {
    username: "",
    uidOFSelectedUser: "",
    searchTag: "",
  };

  it("should handle SET_USERNAME", () => {
    const setUsernameAction: UserActionType = {
      type: SET_USERNAME,
      payload: "test",
    };

    const expectedState: UserStoreType = {
      ...initialState,
      username: "test",
    };

    expect(UserReducer(initialState, setUsernameAction)).toEqual(expectedState);
  });

  it("should handle SET_SEARCH_TAG", () => {
    const setSearchTagAction: UserActionType = {
      type: SET_SEARCH_TAG,
      payload: "test",
    };

    const expectedState: UserStoreType = {
      ...initialState,
      searchTag: "test",
    };

    expect(UserReducer(initialState, setSearchTagAction)).toEqual(
      expectedState
    );
  });

  it("should handle SET_SELECTED_USER", () => {
    const SetSelectedUser: UserActionType = {
      type: SET_SELECTED_USER,
      payload: "test",
    };

    const expectedState: UserStoreType = {
      ...initialState,
      uidOFSelectedUser: "test",
    };

    expect(UserReducer(initialState, SetSelectedUser)).toEqual(
      expectedState
    );
  });
});
