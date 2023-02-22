import { useState } from "react";
import { HomeScreen, getHeaderTitle } from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colorPalettes } from "./colorPalettes";
import PressableButton from './components/PressableButton';
import { AntDesign } from '@expo/vector-icons';
import EditEntryScreen from "./components/EditEntryScreen";

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
          component={HomeScreen}
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
        />
        <Stack.Screen
          name="EditEntry"
          component={EditEntryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
