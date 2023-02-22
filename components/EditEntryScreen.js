import { View, Text, StyleSheet } from 'react-native'
import { colorPalettes } from '../colorPalettes';
import React from 'react'

export default function EditEntryScreen({ route, navigation }) {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <Text>{item.id}</Text>
      <Text>{item.calories}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalettes.screenBackground,
  },
});