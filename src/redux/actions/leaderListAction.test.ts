import * as actions from "./leaderListAction"; // replace with the actual path

describe("leaderListAction", () => {
  it("should create an action to initialize leader data", () => {
    const leaderData: actions.LeaderDataType[] = [
      {
        name: "test",
        bananas: 5,
        lastDayPlayed: "",
        longestStreak: 0,
        stars: 0,
        subscribed: false,
        uid: "",
      },
    ];
    const expectedAction = {
      type: actions.INITIAL_LEADER_DATA,
      payload: leaderData,
    };
    const dispatch = jest.fn();
    actions.initailLeaderDataAction(leaderData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to update leader board", () => {
    const selectedUserData: actions.LeaderDataType = {
      name: "test",
      bananas: 5,
      lastDayPlayed: "",
      longestStreak: 0,
      stars: 0,
      subscribed: false,
      uid: "",
    };
    const expectedAction = {
      type: actions.UPDATE_LEADER_BOARD,
      payload: {
        data: selectedUserData,
      },
    };

    const dispatch = jest.fn();
    actions.updateLeaderBoardAction(selectedUserData)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to update and sort leader board by rank", () => {
    const expectedAction = {
      type: actions.UPDATE_AND_SORT_LEADER_BOARD_BY_RANK,
    };

    const dispatch = jest.fn();
    actions.updateAndSortLeaderBoardByRankAction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to update and sort leader board by name", () => {
    const expectedAction = {
      type: actions.UPDATE_AND_SORT_LEADER_BOARD_BY_NAME,
    };

    const dispatch = jest.fn();
    actions.updateAndSortLeaderBoardByNameAction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to reset selected user", () => {
    const expectedAction = {
      type: actions.REMOVE_SELECTED_USER,
    };

    const dispatch = jest.fn();
    actions.resetSelectedUserAction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to reset filter", () => {
    const expectedAction = {
      type: actions.RESET_FILTER,
    };

    const dispatch = jest.fn();
    actions.resetFilterAction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });

  it("should create an action to set toggle search result", () => {
    const isToggle = true;
    const expectedAction = {
      type: actions.SET_TOGGLE_SEARCH_RESULT,
      payload: isToggle,
    };

    const dispatch = jest.fn();
    actions.setToggleSearchResultAction(isToggle)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
