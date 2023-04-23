import React from "react";
import { NativeBaseProvider, Box, extendTheme, useColorMode } from "native-base";

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
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <NativeBaseProvider theme={theme}>
      <Box safeAreaTop flex={1} bg={colorMode == 'dark' ? 'black' : 'white'}>
        <StatusBar
          barStyle={colorMode == 'dark' ? 'light-content' : 'dark-content'}
          translucent={false}
        />
        {/* <RootStack /> */}
        <Config />
      </Box>
    </NativeBaseProvider>
  );
}