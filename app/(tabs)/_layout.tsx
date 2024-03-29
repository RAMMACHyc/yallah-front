import { Redirect, Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ViewStyle } from "react-native";
import color from "../../styles/color";
import { useAppSelector } from "@/store";

const tabBarStyle: ViewStyle = {
  borderRadius: 20,
  height: 80,
  position: "absolute",
  bottom: 20,
  left: 20,
  right: 20,
};
export default function TabsLayout() {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  if (!user) {
    return <Redirect href="/login" /> ;
  }
  return (
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                color={focused ? color.red : "gray"}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            title: "settings",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "map" : "map-outline"}
                color={focused ? color.red : "gray"}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="location"
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            title: "location",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "location" : "location-outline"}
                color={focused ? color.red : "gray"}
                size={26}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarStyle: tabBarStyle,
            tabBarShowLabel: false,
            title: "profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? color.red : "gray"}
                size={26}
              />
            ),
          }}
        />
      </Tabs>
  );
}
