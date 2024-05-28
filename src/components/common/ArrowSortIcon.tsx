import { Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export const ArrowSortIcon = ({
  isASC,
}: {
  isASC: boolean;
}): React.ReactElement => (
  <Icon
    style={styles.icon}
    fill='#FFF'
    name={isASC ? "arrow-circle-up-outline" : "arrow-circle-down-outline"}
  />
);


const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});