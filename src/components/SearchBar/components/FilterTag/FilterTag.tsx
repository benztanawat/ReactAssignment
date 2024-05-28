import { Icon } from "@ui-kitten/components";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { useGetFilterTagLabel } from "./useGetFilterTagLabel";
import { useResetFilter } from "./useResetFilter";
import { SearchingModeEnum } from "../../../../redux/reducers/LeaderListReducer";

const FilterTag = () => {
  const { searchingLabel, searchingMode } = useGetFilterTagLabel();

  const { resetFilter } = useResetFilter();

  if(searchingMode === SearchingModeEnum.DEFAULT){
    return <></>
  }

  return (
    <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <View style={styles.filterTagContainer}>
        <Icon name="bar-chart-outline" style={styles.icon} />
        <Text style={styles.filterLabel}>Filter</Text>
      </View>

      <View style={styles.filterTagContainer}>
        <View>
          <Text style={styles.filterLabel}>{searchingLabel}</Text>
        </View>
        <TouchableOpacity onPress={resetFilter}>
          <Icon style={styles.icon} name={"close-circle-outline"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterLabel: {
    fontWeight: "bold",
  },
  filterTagContainer: {
    padding: 8,
    backgroundColor: "#DFE7E5",
    alignSelf: "flex-start",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default FilterTag;
