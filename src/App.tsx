/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import { useInitialLeaderBoard } from "./hooks/useInitialLeaderBoard";

function App(): React.JSX.Element {  
  const inIt = useInitialLeaderBoard()

  inIt();
  
  return (
    <Provider store={Store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={styles.container}>
          <View style={styles.appContainer}>
            <SearchBar />
            <Table />
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  appContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    display: "flex",
    flex: 1,
  },
});

export default App;
