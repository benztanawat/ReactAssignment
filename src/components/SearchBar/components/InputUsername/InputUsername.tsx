import React from "react";
import { StyleSheet } from "react-native";
import { Icon, IconElement, Input } from "@ui-kitten/components";

import SearchResultBox from "./SearchResultBox";
import { useInputUsername } from "./useInputUsername";

export const IconSimpleUsageShowcase = (): IconElement => (
  <Icon style={styles.icon} fill="#8F9BB3" name="search" />
);

const InputUsername = (): React.ReactElement => {
  const { username, handleInputChange } = useInputUsername();
  return (
    <>
      <Input
        value={username}
        accessoryLeft={IconSimpleUsageShowcase}
        placeholder="Username..."
        onChangeText={(v) => handleInputChange(v)}
      />

      <SearchResultBox />
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
  smallIcon: {
    height: 20,
    width: 20,
  },
});

export default InputUsername;
