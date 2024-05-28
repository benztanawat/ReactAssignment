import { Divider, Icon } from "@ui-kitten/components";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { isEmpty } from "../../../../../helper/string";
import SearchResultBoxLoading from "./components/SearchResultBoxLoading";
import React from "react";
import { useSearchResultBox } from "./useSearchResultBox";

const SearchResultBox = () => {
  const {
    username,
    listSimilarity,
    isTogleSearchBox,
    isLoadingUserResult,
    handlePress,
  } = useSearchResultBox();

  if (isEmpty(username) || listSimilarity?.length === 0 || isTogleSearchBox) {
    return <></>;
  }

  return (
    <View style={styles.searchResultBoxContainer}>
      {isLoadingUserResult && <SearchResultBoxLoading />}
      <ScrollView style={styles.scrollViewContainer}>
        {listSimilarity?.map(({ name, uid, realIndex, similarity }) => (
          <React.Fragment key={`${uid}-${name}`}>
            <TouchableOpacity
              style={styles.searchResultRowContainer}
              onPress={() => handlePress(name)}
            >
              <Icon name="person-outline" style={styles.smallIcon} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.searchResultLabel}
              >
                {`(${realIndex})`} {name}
              </Text>
            </TouchableOpacity>
            <Divider />
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
   flex: 1,
  },
  searchResultBoxContainer: {
    backgroundColor: "white",
    width: "100%",
    maxHeight: 200,
    position: "absolute",
    top: 53,
    zIndex: 999,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  searchResultRowContainer: {
    padding: 15,
    flexDirection: "row",
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  searchResultLabel: {
    fontWeight: "bold",
    width: 120,
  },
  smallIcon: {
    height: 20,
    width: 20,
  },
});

export default SearchResultBox;
