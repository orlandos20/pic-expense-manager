import React from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";
import {
  navigationRef,
  isReadyRef,
  toggleDrawer
} from "./src/Views/navigations/RootNavigation";

import { useColorScheme } from "react-native-appearance";

import DrawerStackScreens from "./src/Views/navigations/DrawerStackScreens";

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(59, 171, 213)",
    background: "rgb(34, 34, 34)",
    card: "rgb(34, 34, 34)",
    text: "rgb(255, 255, 255)",
    border: "rgb(34, 34, 34)",
    notification: "rgb(34, 34, 34)",
    header: "rgb(34, 34, 34)"
  }
};

const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DarkTheme.colors,
    background: "rgb(242, 242, 242)",
    border: "rgb(216, 216, 216)",
    card: "rgb(255, 255, 255)",
    notification: "rgb(255, 59, 48)",
    primary: "rgb(0, 122, 255)",
    text: "rgb(28, 28, 30)"
  }
};

export default function App() {
  const scheme = useColorScheme();

  console.log("scheme --> ", scheme);

  console.log("DarkTheme  --> ", DarkTheme);
  console.log("DefaultTheme  --> ", DefaultTheme);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={MyDarkTheme}
    >
      <DrawerStackScreens toggleDrawer={toggleDrawer} />

      {/* <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Another test after moving the app file</Text>
        <Text>Another test after movsing the app file</Text> */}
    </NavigationContainer>
  );
}
