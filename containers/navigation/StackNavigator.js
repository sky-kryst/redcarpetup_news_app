import { createStackNavigator } from "@react-navigation/stack";
import General from "../../components/screens/general/General";
import Article from "../../components/screens/article/Article";
import BottomTabNavigator from "./BottomTabNavigator";
import React from "react";

const { Navigator, Screen } = createStackNavigator();

const MyStack = () => {
  return (
    <Navigator>
      {/* <Screen name="News" component={BottomTabNavigator} /> */}
      <Screen name="News" component={General} />
      <Screen name="Summary" component={Article} />
    </Navigator>
  );
};

export default MyStack;
