import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { StatusBar } from "react-native";

import { RootStackNavigator } from "./src/navigation/rootNavigator";
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Box safeAreaTop flex={1}>
          <StatusBar />
          <QueryClientProvider client={queryClient}>
            <RootStackNavigator />
          </QueryClientProvider>
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
