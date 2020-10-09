import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Science,
  Technology,
  Business,
  Health,
  Sports,
  General,
} from "../../components/screens";
import React from "react";
import { Icon } from "react-native-elements";
import SearchProvider from "../context/search";

const { Navigator, Screen } = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <SearchProvider>
      <Navigator
        initialRouteName="General"
        lazy={false}
        backBehavior="history"
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "#8E9093",
        }}
      >
        <Screen
          name="General"
          component={General}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="font-awesome"
                name="newspaper-o"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
        <Screen
          name="Science"
          component={Science}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="material-community"
                name="atom"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
        <Screen
          name="Technology"
          component={Technology}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="ant-design"
                name="tablet1"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
        <Screen
          name="Business"
          component={Business}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="entypo"
                name="line-graph"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
        <Screen
          name="Sports"
          component={Sports}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="material-community"
                name="baseball"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
        <Screen
          name="Health"
          component={Health}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                type="font-awesome-5"
                name="heartbeat"
                color={focused ? "black" : "#8E9093"}
                size={20}
              />
            ),
          }}
        />
      </Navigator>
    </SearchProvider>
  );
};

export default MyTabs;
