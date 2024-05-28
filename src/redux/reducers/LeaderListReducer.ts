import {
  LeaderDataType,
  INITIAL_LEADER_DATA,
  UPDATE_LEADER_BOARD,
  UPDATE_AND_SORT_LEADER_BOARD_BY_RANK,
  REMOVE_SELECTED_USER,
  UPDATE_AND_SORT_LEADER_BOARD_BY_NAME,
  RESET_FILTER,
  SET_TOGGLE_SEARCH_RESULT,
} from "../actions/leaderListAction";
import {
  updateLeaderBoard,
  trantfromLeaderBoardData,
} from "../../helper/leaderBroadHelper";

export enum SearchingModeEnum {
  RANK = "rank",
  NAME = "name",
  DEFAULT = "default",
}

type SetLeaderBoardActionType = {
  type: typeof INITIAL_LEADER_DATA;
  payload: LeaderDataType[];
};

type UpdateLeaderBoardActionType = {
  type: typeof UPDATE_LEADER_BOARD;
  payload: {
    data: LeaderDataType;
  };
};

type UpdateAndSortByRankType = {
  type: typeof UPDATE_AND_SORT_LEADER_BOARD_BY_RANK;
};

type UpdateAndSortByNameType = {
  type: typeof UPDATE_AND_SORT_LEADER_BOARD_BY_NAME;
};

type RemoveSelectedUserType = {
  type: typeof REMOVE_SELECTED_USER;
};

type ResetFilterType = {
  type: typeof RESET_FILTER;
};

type SetToggleSearchBox = {
  type: typeof SET_TOGGLE_SEARCH_RESULT;
  payload: boolean;
};

export type LeaderListReducerActionType =
  | SetLeaderBoardActionType
  | UpdateLeaderBoardActionType
  | UpdateAndSortByRankType
  | RemoveSelectedUserType
  | UpdateAndSortByNameType
  | ResetFilterType
  | SetToggleSearchBox;

export type InitialStateType = {
  leaderList: LeaderDataType[];
  isSortRankByASC: boolean;
  isSortNameByASC: boolean;
  searchingMode: SearchingModeEnum;
  leaderBoardShowedData: LeaderDataType[];
  selectedUser: LeaderDataType | null;
  isToggleSearchResult: boolean;
};

const initialState: InitialStateType = {
  leaderList: [],
  leaderBoardShowedData: [],
  isSortRankByASC: false,
  isSortNameByASC: false,
  selectedUser: null,
  isToggleSearchResult: false,
  searchingMode: SearchingModeEnum.DEFAULT,
};

function LeaderListReducer(
  state = initialState,
  action: LeaderListReducerActionType
): InitialStateType {
  switch (action.type) {
    case INITIAL_LEADER_DATA:
      const cloneLeaderList = action.payload.map((leader) => {
        return { ...leader };
      });

      return {
        ...state,
        isSortRankByASC: false,
        isSortNameByASC: false,
        searchingMode: SearchingModeEnum.DEFAULT,
        leaderList: action.payload,
        leaderBoardShowedData: cloneLeaderList,
      };
    case REMOVE_SELECTED_USER:
      return {
        ...state,
        selectedUser: null,
      };
    case RESET_FILTER:
      return {
        ...state,
        isSortRankByASC: false,
        isSortNameByASC: false,
        searchingMode: SearchingModeEnum.DEFAULT,
      };
    case UPDATE_LEADER_BOARD:
      const { data: selectedUserData } = action.payload;

      const { leaderList, isSortRankByASC, isSortNameByASC, searchingMode } =
        state;

      const leaderBoardData = updateLeaderBoard({
        isSortRank: isSortRankByASC,
        isSortName: isSortNameByASC,
        data: selectedUserData,
        leaderList,
        searchingMode,
      });

      return {
        ...state,
        selectedUser: selectedUserData,
        leaderBoardShowedData: leaderBoardData,
      };
    case UPDATE_AND_SORT_LEADER_BOARD_BY_RANK:
      const leaderData = trantfromLeaderBoardData();
      const cloneLeaderList_ = leaderData.map((leader) => ({ ...leader }));
      const selectedUser = state.selectedUser;
      const updatedIsSortRankByASC = !state.isSortRankByASC;

      const updateLeaderBoardDataฺByRank = updateLeaderBoard({
        leaderList: cloneLeaderList_,
        searchingMode: SearchingModeEnum.RANK,
        isSortRank: updatedIsSortRankByASC,
        isSortName: state.isSortNameByASC,
        data: selectedUser || ({} as LeaderDataType),
      });

      return {
        ...state,
        leaderBoardShowedData: updateLeaderBoardDataฺByRank,
        isSortRankByASC: updatedIsSortRankByASC,
        searchingMode: SearchingModeEnum.RANK,
      };
    case UPDATE_AND_SORT_LEADER_BOARD_BY_NAME:
      const updatedIsSortNameByASC = !state.isSortNameByASC;
      const cloneleaderData = trantfromLeaderBoardData();
      const cloneLeaderListForRank = cloneleaderData.map((leader) => ({
        ...leader,
      }));

      const updateLeaderBoardDataฺByName = updateLeaderBoard({
        leaderList: cloneLeaderListForRank,
        searchingMode: SearchingModeEnum.NAME,
        isSortRank: state.isSortRankByASC,
        isSortName: updatedIsSortNameByASC,
        data: state.selectedUser || ({} as LeaderDataType),
      });

      return {
        ...state,
        leaderBoardShowedData: updateLeaderBoardDataฺByName,
        isSortNameByASC: updatedIsSortNameByASC,
        searchingMode: SearchingModeEnum.NAME,
      };
    case SET_TOGGLE_SEARCH_RESULT:
      return {
        ...state,
        isToggleSearchResult: action.payload,
      };
    default:
      return state;
  }
}

export default LeaderListReducer;
