import { useState } from "react";
import { Home, getHeaderTitle } from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colorPalettes } from "./colorPalettes";
import PressableButton from './components/PressableButton';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colorPalettes.headerBackground },
          headerTintColor: colorPalettes.headerText,
          headerTitleStyle: { fontSize: 20 },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => {
              return (
                <PressableButton
                  onPress={() => {
                    // console.log("Press top-right plus");
                  }}
                >
                  <AntDesign name="plus" size={24} color="white" />
                </PressableButton>
              );
            },
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
