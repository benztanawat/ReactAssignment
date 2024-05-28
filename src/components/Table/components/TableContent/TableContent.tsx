import { useSelector } from "react-redux";
import { ReduxStateType } from "../../../../redux/store";
import { StyleSheet, Text, View } from "react-native";
import { LeaderDataType } from "../../../../redux/actions/leaderListAction";

const MAXIMUM_SHOW_AMOUNT = 10;

const TableContent: React.FC = () => {
  const leaders = useSelector(
    (state: ReduxStateType) => state.LeaderListReducer.leaderBoardShowedData
  );

  const top10LeaderBoard = leaders.slice(0, MAXIMUM_SHOW_AMOUNT);

  const uidOFSelectedUser = useSelector(
    (state: ReduxStateType) => state.UserReducer.uidOFSelectedUser
  );

  const renderTableCell = (content: string | number, style: object) => (
    <View style={styles.tableContentContainer}>
      <Text numberOfLines={2} ellipsizeMode="tail" style={style}>
        {content}
      </Text>
    </View>
  );

  const renderTableRow = (leader: LeaderDataType, index: number) => {
    const { name, bananas, uid } = leader;
    const isUserSelected = uidOFSelectedUser === uid;
    const isEvenIndex = index % 2 === 0;
    const backgroundColor = isUserSelected
      ? styles.backgroundMarkOrder
      : isEvenIndex
      ? styles.backgroundEvenOrder
      : styles.backgroundOddOrder;
    const labelStyle = isUserSelected
      ? styles.labelColorMarkOrder
      : styles.tableContentLabel;

    return (
      <View
        style={[styles.tableContent, backgroundColor]}
        key={`${uid}-${bananas}`}
      >
        {renderTableCell(name, labelStyle)}
        {renderTableCell(leader?.realIndex ?? 0 + 1, labelStyle)}
        {renderTableCell(bananas, labelStyle)}
      </View>
    );
  };

  return <>{top10LeaderBoard.map(renderTableRow)}</>;
};

const styles = StyleSheet.create({
  tableContentLabel: {
    color: "black",
  },
  tableContent: {
    flexDirection: "row",
    padding: 10,
    width: "100%",
    display: "flex",
  },
  backgroundEvenOrder: {
    backgroundColor: "white",
  },
  backgroundOddOrder: {
    backgroundColor: "#E1F1F7",
  },
  tableContentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  backgroundMarkOrder: {
    backgroundColor: "#6DD172",
  },
  labelColorMarkOrder: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TableContent;
