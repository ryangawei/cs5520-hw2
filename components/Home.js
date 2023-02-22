import { View, Text } from 'react-native'
import React from 'react'
import EntriesList from './EntriesList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'AllEntries';

  switch (routeName) {
    case 'AllEntries':
      return 'All Entries';
    case 'OverLimitEntries':
      return 'Over-limit Entries';
  }
}

export function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'AllEntries') {
            iconName = focused
              ? 'coffee'
              : 'coffee-outline';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          } else if (route.name === 'OverLimitEntries') {
            iconName = focused ? 'exclamationcircle' : 'exclamationcircleo';
            return <AntDesign name={iconName} size={size} color={color} />
          }
        },
        headerShown: false
      })}
      >
      <Tab.Screen name="AllEntries" options={{title: "All Entries"}} component={EntriesList} />
      <Tab.Screen name="OverLimitEntries" options={{title: "Over-limit Entries"}} initialParams={{ overLimitOnly: true }} component={EntriesList} />
    </Tab.Navigator>
  )
}