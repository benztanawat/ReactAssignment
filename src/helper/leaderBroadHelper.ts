
import LeaderBoardJSONData from "../assets/leaderboard.json";
import { LeaderDataType } from "../redux/actions/leaderListAction";
import { SearchingModeEnum } from "../redux/reducers/LeaderListReducer";

import { isEmpty } from "./string";

const LAST_INDEX = 9;
const FIRST_INDEX = 0;

export const trantfromLeaderBoardData = () => {
  let lastBananas: number | null = null;
  let realIndex = 1;

  const tranformDataSortByBananas = Object.values(LeaderBoardJSONData)
    .sort((a, b) => b.bananas - a.bananas)
    .map((item, index) => {
      if (item.bananas !== lastBananas) {
        realIndex = index + 1;
      }
      lastBananas = item.bananas;
      return { ...item, realIndex };
    });

  return tranformDataSortByBananas;
  return [];
};

type sortLeaderBoardByRank = {
  leaderList: LeaderDataType[];
  searchingMode: SearchingModeEnum;
  isSortRank: boolean;
  isSortName: boolean;
  data: LeaderDataType;
};

export const updateLeaderBoard = ({
  leaderList,
  searchingMode,
  isSortRank,
  isSortName,
  data,
}: sortLeaderBoardByRank) => {
  const cloneLeaderList = leaderList.map((leader) => {
     return { ...leader };
  });

  const cloneLeaderListForName = leaderList.map((leader) => {
    return { ...leader };
 });
  const isSortByASC = searchingMode === SearchingModeEnum.NAME ? isSortName : isSortRank;

  const sortedLeaderByRank = cloneLeaderList.sort((a, b) => {
    if (b.bananas !== a.bananas) {
      return isSortRank ? a.bananas - b.bananas :  b.bananas - a.bananas;
    }
    return a.name.localeCompare(b.name);
  });

  const sortedLeaderByName = cloneLeaderListForName.sort((a, b) => {
    return isSortName
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const cloneLeaderBoard =
    searchingMode === SearchingModeEnum.NAME ? sortedLeaderByName : sortedLeaderByRank;

  const top10LeaderBoard = cloneLeaderBoard.slice(0, 10);
  const isInTop10 = cloneLeaderBoard
    .slice(0, 10)
    .some((item) => item.uid === data.uid);
  const selectedUserRank = data?.realIndex ?? 0;

  const firstIndex = 0;
  const lastIndex = top10LeaderBoard.length - 1

  const getRank = (index: number) => top10LeaderBoard[index]?.realIndex ?? 0;

  const firstOrderRank = isSortByASC ? getRank(lastIndex) : getRank(firstIndex);
  const lastOrderRank = isSortByASC ? getRank(firstIndex) : getRank(lastIndex);

  if (!isInTop10 && lastOrderRank && firstOrderRank && !isEmpty(data)) {
    const isGreatherThan = selectedUserRank >= lastOrderRank;
    const sliceIndex = isGreatherThan ? LAST_INDEX : FIRST_INDEX;

    return [
        ...cloneLeaderBoard.slice(0, sliceIndex),
        data,
        ...cloneLeaderBoard.slice(sliceIndex),
      ];
  }

  return cloneLeaderBoard;
};
