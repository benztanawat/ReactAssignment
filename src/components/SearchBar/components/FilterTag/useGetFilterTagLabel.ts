import { useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { SearchingModeEnum } from "../../../../redux/reducers/LeaderListReducer";

const MAXTOMINLABEL = "max-min";
const MINTOMAXLABEL = "min-max";

export const useGetFilterTagLabel = () => {
  let searchingLabel = "";
  const searchingMode = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.searchingMode
  );

  const isSortByName = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isSortNameByASC
  );
  const isSortByRank = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isSortRankByASC
  );


  const sortValue = searchingMode === SearchingModeEnum.NAME ? isSortByName : isSortByRank;

  if (searchingMode === SearchingModeEnum.RANK) {
    searchingLabel = `Sort by ${searchingMode} ${
      sortValue ?  MAXTOMINLABEL : MINTOMAXLABEL
    }`;
  } else {
    searchingLabel = `Sort by ${searchingMode} ${
      sortValue ?  MINTOMAXLABEL : MAXTOMINLABEL
    }`;
  }

  return {
    searchingMode,
    searchingLabel,
  };
};
