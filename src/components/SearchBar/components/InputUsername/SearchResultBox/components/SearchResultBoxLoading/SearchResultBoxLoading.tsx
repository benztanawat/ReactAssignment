import { StyleSheet, View } from "react-native";
import Skeleton from "../../../../../../Skeleton";

const DEFAULT_SIZE = 40;

const SkeletonRow = () => (
  <View style={styles.skeletonRow}>
    <Skeleton width={DEFAULT_SIZE} height={DEFAULT_SIZE} variant="circle" />
    <Skeleton width={120} />
  </View>
);

const SearchResultBoxLoading = () => {
  return (
    <View style={styles.searchResultBoxLoadingContainer}>
      {[...Array(4)].map((_, i) => (
        <SkeletonRow key={i} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  searchResultBoxLoadingContainer: {
    display: "flex",
    rowGap: 10,
    paddingHorizontal: 5,
  },
  skeletonRow: {
    height: 40,
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});

export default SearchResultBoxLoading;
