import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Route } from "./routes.types";
import Config from "../Screens/Config";
import Home from "../Screens/Home";
import Init from "../Screens/Init";
import Messenger from "../Screens/Messenger";

const Stack = createNativeStackNavigator();

export function RootStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Route.Init}
        component={Init}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Route.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Route.Messenger}
        component={Messenger}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Route.Config}
        component={Config}
        options={{
          title: "Configuracion",
        }}
      />
    </Stack.Navigator>
  );
}
