import { View, Text } from 'react-native'
import React from 'react'
import AllEntries from './AllEntries';
import OverLimitEntries from './OverLimitEntries';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

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
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen name="AllEntries" component={AllEntries} />
      <Tab.Screen name="OverLimitEntries" component={OverLimitEntries} />
    </Tab.Navigator>
  )
}