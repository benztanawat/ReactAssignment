import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowSortIcon } from "../../../common/ArrowSortIcon";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { updateAndSortLeaderBoardByNameAction, updateAndSortLeaderBoardByRankAction } from "../../../../redux/actions/leaderListAction";

const TableHeader = () => {
  const dispatch = useDispatch();
  const isSortRankByASC = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isSortRankByASC
  );
  const isSortNameByASC = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.isSortNameByASC
  );
  const reSortLeaderBoard = () => {
    dispatch(updateAndSortLeaderBoardByRankAction());
  };

  const sortLeaderBoardByName = () => {
    dispatch(updateAndSortLeaderBoardByNameAction());
  }

  return (
    <>
      <View style={styles.tableHeader}>
        <TouchableOpacity
          onPress={sortLeaderBoardByName}
          style={styles.tableContentContainer}
        >
          <View style={styles.textWithIconContainer}>
            <Text style={styles.tableHeaderLabel}>Name</Text>
            <ArrowSortIcon isASC={isSortNameByASC} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reSortLeaderBoard}
          style={styles.tableContentContainer}
        >
          <View style={styles.textWithIconContainer}>
            <Text style={styles.tableHeaderLabel}>Rank</Text>
            <ArrowSortIcon isASC={isSortRankByASC} />
          </View>
        </TouchableOpacity>
        <View style={styles.tableContentContainer}>
          <Text style={styles.tableHeaderLabel}>Number of bananas</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  table: {
    marginVertical: 15,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#3bcd6b",
    padding: 10,
    width: "100%",
    display: "flex",
  },
  tableHeaderLabel: {
    fontWeight: "bold",
    color: "#fff",
  },
  tableContentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  textWithIconContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});

export default TableHeader;