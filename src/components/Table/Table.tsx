import { StyleSheet, View } from "react-native";
import TableContent from "./components/TableContent";
import TableHeader from "./components/TableHeader";

const Table = () => {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <TableHeader />
        <TableContent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    zIndex: -1
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

export default Table;
