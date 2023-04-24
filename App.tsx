import React from "react";
import { NativeBaseProvider, Box, extendTheme } from "native-base";

import Config from "./src/Screens/Config";
import { StatusBar } from "react-native";

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box safeAreaTop flex={1}>
        <StatusBar />
        {/* <RootStack /> */}
        <Config />
      </Box>
    </NativeBaseProvider>
  );
}