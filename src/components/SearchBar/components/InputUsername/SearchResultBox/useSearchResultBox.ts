import { useDispatch, useSelector } from "react-redux";
import { useSearchUser } from "../../SubmitButton/hooks/useSearchUser";
import { LeaderDataType, setToggleSearchResultAction } from "../../../../../redux/actions/leaderListAction";
import { useEffect, useState } from "react";
import { ReduxStateType } from "../../../../../redux/store";
import { isEmpty } from "../../../../../helper/string";
import { searchUser } from "../../../../../helper/searchUser";
import { sleep } from "../../../../../helper/timing";

export const useSearchResultBox = () => {
   const dispatch = useDispatch();
   const searchUserFunc = useSearchUser();
   const [listSimilarity, setListSimilarity] = useState<LeaderDataType[]>([]);
   const [isLoadingUserResult, setIsLoadingUserResult] = useState(false);
   const isTogleSearchBox = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isToggleSearchResult
  );

  const handlePress = (selectedUser: string) => {
    searchUserFunc(selectedUser);
    setListSimilarity([]);
    setIsLoadingUserResult(false)
    dispatch(setToggleSearchResultAction(true));
  };

  const username = useSelector(
    (state: ReduxStateType) => state.UserReducer.username
  );

  useEffect(() => {
    async function setUpsimarity() {
      if (!isEmpty(username)) {
        setIsLoadingUserResult(true)
        dispatch(setToggleSearchResultAction(false));
        await sleep(1500).catch((error) => console.log(error));
        const similarityUser = searchUser(username);
        setListSimilarity(similarityUser);
        setIsLoadingUserResult(false)
      }
    }
    setUpsimarity();
  }, [username]);


  return {
    listSimilarity,
    isLoadingUserResult,
    isTogleSearchBox,
    username,
    handlePress,
  }
}