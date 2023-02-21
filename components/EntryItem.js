import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colorSchema } from '../colorSchema';

export default function EntryItem({ item }) {
  return (
    <View key={item.id} style={styles.itemContainer}>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.calory}>
        <Text>{item.calories}</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: colorSchema.itemBackground,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal:10,
    marginHorizontal: 30,
    marginVertical: 10,
  },
  description: {
    color: colorSchema.text,
    fontSize: 20
  },
  calory: {
    backgroundColor: colorSchema.caloryBackground,
    borderRadius: 5,
    fontSize: 20,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
  }
});