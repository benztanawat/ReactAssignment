import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { setSearchTagAction, setUidSelectedUserAction } from "../../../../redux/actions/userAction";
import { LeaderDataType, resetSelectedUserAction, updateLeaderBoardAction } from "../../../../redux/actions/leaderListAction";

export const useSearchTag = () => {
  const searchTag = useSelector(
    (state: ReduxStateType) => state.UserReducer.searchTag
  );

  const dispatch = useDispatch();

  const resetSearchValue = () => {
    dispatch(setSearchTagAction(""));
    dispatch(setUidSelectedUserAction(""));
    dispatch(resetSelectedUserAction());
    dispatch(updateLeaderBoardAction(({} as LeaderDataType)));
  };

  return {
    resetSearchValue,
    searchTag,
  }
};
