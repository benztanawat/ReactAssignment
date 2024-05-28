import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { setUernameAction } from "../../../../redux/actions/userAction";
import { setToggleSearchResultAction } from "../../../../redux/actions/leaderListAction";

export const useInputUsername = () => {
  const dispatch = useDispatch();
  const username = useSelector(
    (state: ReduxStateType) => state.UserReducer.username
  );

  const isTogleSearchBox = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isToggleSearchResult
  );

  const handleInputChange = (value: string) => {
    if (!isTogleSearchBox) {
      dispatch(setToggleSearchResultAction(false));
    }
    dispatch(setUernameAction(value));
  };

  return {
    handleInputChange,
    username,
  };
};
