import { useDispatch } from "react-redux";
import LeaderBoardData from "../assets/leaderboard.json";
import { trantfromLeaderBoardData } from "../helper/leaderBroadHelper";
import { initailLeaderDataAction } from "../redux/actions/leaderListAction";

export const useInitialLeaderBoard = () => {
  const leaderData = trantfromLeaderBoardData();
  const dispatch = useDispatch();
  return () => {
    dispatch(initailLeaderDataAction(leaderData));
  };
};
