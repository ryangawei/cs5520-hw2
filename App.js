import { useState } from "react";
import { HomeScreen, getHeaderTitle } from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colorPalettes } from "./colorPalettes";
import PressableButton from './components/PressableButton';
import { AntDesign } from '@expo/vector-icons';
import EditEntryScreen from "./components/EditEntryScreen";
import AddEntryScreen from "./components/AddEntryScreen";

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
          options={({ navigation, route }) => ({
            headerTitle: getHeaderTitle(route),
            headerRight: () => {
              return (
                <PressableButton
                  onPress={() => {
                    navigation.navigate("AddEntry");
                  }}
                >
                  <AntDesign name="plus" size={24} color={colorPalettes.button} />
                </PressableButton>
              );
            },
          })}
        />
        <Stack.Screen
          name="EditEntry"
          options={{headerTitle: "Edit Entry"}}
          component={EditEntryScreen}
        />
        <Stack.Screen
          name="AddEntry"
          options={{headerTitle: "Add An Entry"}}
          component={AddEntryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
