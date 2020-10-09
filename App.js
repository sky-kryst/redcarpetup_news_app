import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./App.style";
import { NavigationContainer } from "@react-navigation/native";
import feedStore from "./hooks-store/feed-store";
import StackNavigator from "./containers/navigation/StackNavigator";

feedStore();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
