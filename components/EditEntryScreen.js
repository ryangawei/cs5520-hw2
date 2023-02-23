import { View, Text, StyleSheet } from 'react-native'
import { colorPalettes } from '../colorPalettes';
import React from 'react'
import EditCard from './EditCard';

export default function EditEntryScreen({ route, navigation }) {
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <EditCard item={item} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalettes.screenBackground,
  },
});