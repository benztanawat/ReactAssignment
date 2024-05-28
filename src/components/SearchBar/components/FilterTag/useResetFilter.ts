import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { useInitialLeaderBoard } from "../../../../hooks/useInitialLeaderBoard";
import {
  resetFilterAction,
  updateLeaderBoardAction,
} from "../../../../redux/actions/leaderListAction";

export const useResetFilter = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.selectedUser
  );

  const inIt = useInitialLeaderBoard();

  const resetFilter = () => {
    dispatch(resetFilterAction());
    if (selectedUser) {
      dispatch(updateLeaderBoardAction(selectedUser));
    } else {
      inIt();
    }
  };

  return {
    selectedUser,
    resetFilter,
  };
};
