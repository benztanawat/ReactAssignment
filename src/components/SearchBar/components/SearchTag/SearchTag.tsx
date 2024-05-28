import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "@ui-kitten/components";
import { useSearchTag } from "./useSearchTag";

const SearchTag = () => {
  const { searchTag, resetSearchValue } = useSearchTag();

  if (searchTag === "") {
    return <></>
  }

  return (
    <View style={styles.searchTagContainer}>
      <Text numberOfLines={1} style={styles.searchTagLabel}>{searchTag}</Text>
      <TouchableOpacity onPress={resetSearchValue}>
        <Icon style={styles.icon} name={"close-circle-outline"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTagLabel: {
    fontWeight: "bold",
  },
  searchTagContainer: {
    backgroundColor: "#A9E4B5",
    width: "auto",
    padding: 10,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
    marginTop: 10,
    zIndex: -1
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default SearchTag;
