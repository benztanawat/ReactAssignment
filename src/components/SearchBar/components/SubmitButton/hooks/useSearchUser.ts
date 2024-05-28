import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../../../../redux/store";
import { Alert } from "react-native";
import { updateLeaderBoardAction, setToggleSearchResultAction } from "../../../../../redux/actions/leaderListAction";
import { setSearchTagAction, setUidSelectedUserAction } from "../../../../../redux/actions/userAction";
import { isEmpty } from "../../../../../helper/string";

export function useSearchUser() {
  const username = useSelector(
    (state: ReduxStateType) => state.UserReducer.username
  );
  const leaders = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.leaderList
  );
  const dispatch = useDispatch();
  
  return (usernameFromSeaching?: string) => {
    const usernameSearchResult = isEmpty(usernameFromSeaching) ? username : usernameFromSeaching ?? '';
    const leaderIndex = leaders.findIndex(
        (leader) => leader.name.toLowerCase() === usernameSearchResult.toLowerCase()
    );

    dispatch(setToggleSearchResultAction(true))

    if (leaderIndex === -1) {
        Alert.alert(
            "This user name does not exist! Please specify an existing user name!"
        );
        return;
    }

    dispatch(setSearchTagAction(leaders[leaderIndex].name))
    dispatch(setUidSelectedUserAction(leaders[leaderIndex].uid));
    dispatch(updateLeaderBoardAction(leaders[leaderIndex]));
  };
}
