import { useState } from "react";
import { Home, getHeaderTitle } from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colorSchema } from "./colorSchema";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colorSchema.headerBackground },
          headerTintColor: colorSchema.headerText,
          headerTitleStyle: { fontSize: 20 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
