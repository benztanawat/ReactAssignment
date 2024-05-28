import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../redux/store";
import { updateLeaderBoardAction } from "../redux/actions/leaderListAction";

export const useUpdateLeaderBoard = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.selectedUser
  );

  return () => {
    if (selectedUser) {
      dispatch(updateLeaderBoardAction(selectedUser));
    }
  };
};
