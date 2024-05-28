import { StyleSheet, View } from "react-native";
import InputUsername from "./components/InputUsername";
import SubmitButton from "./components/SubmitButton";
import SearchTag from "./components/SearchTag";
import FilterTag from "./components/FilterTag";

const SearchBar = () => {
  return (
    <View>
      <View style={style.InputUserNameContainer}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <InputUsername />
        </View>

        <View style={style.SubmitButtonContainer}>
          <SubmitButton />
        </View>
      </View>

      <View style={style.zIndexBackWard}>
        <SearchTag />
      </View>

      <View style={style.zIndexBackWard}>
        <FilterTag />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  InputUserNameContainer: {
    display: "flex",
    flexDirection: "row",
  },
  SubmitButtonContainer: {
    flex: 1,
    height: '95%'
  },
  zIndexBackWard: {
    zIndex: -1
  }
});

export default SearchBar;
