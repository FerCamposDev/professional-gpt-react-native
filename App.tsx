import React from "react";
import { NativeBaseProvider, Box, Text, extendTheme, ColorMode } from "native-base";
import type { StorageManager } from "native-base";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ThemeExample from "./src/Screens/ThemeExample";

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let mode = await AsyncStorage.getItem("@my-app-color-mode");
        return mode === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        if (value) {
          await AsyncStorage.setItem("@my-app-color-mode", value);
        }
      } catch (e) {
        console.log(e);
      }
    },
  };

  return (
    <NativeBaseProvider theme={theme}>
      <ThemeExample />
      {/* <Box flex={1} alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box> */}
    </NativeBaseProvider>
  );
}