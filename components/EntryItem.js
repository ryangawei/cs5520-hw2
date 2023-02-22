import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { colorPalettes } from '../colorPalettes';
import { Entypo } from '@expo/vector-icons';
import PressableButton from './PressableButton';


export default function EntryItem({ item, limit, navigation }) {
  return (
    <PressableButton style={styles.itemContainer} onPress={() => {navigation.push("EditEntry")}}>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.caloryContainer}>
        <View style={styles.warningIcon}>
          { item.calories > limit? <Entypo name="warning" size={24} color="yellow"/> : <></> }
        </View>
        <View style={styles.calory}>
          <Text>{item.calories}</Text>
        </View>
      </View>
    </PressableButton>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    backgroundColor: colorPalettes.itemBackground,
    paddingVertical: 10,
    paddingHorizontal:10,
    marginHorizontal: 30,
    marginVertical: 7,
  },
  description: {
    color: colorPalettes.text,
    fontSize: 20
  },
  warningIcon: {
    paddingHorizontal: 5
  },
  caloryContainer: {
    flexDirection: "row",
  },
  calory: {
    backgroundColor: colorPalettes.caloryBackground,
    borderRadius: 5,
    fontSize: 20,
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 5,
  }
});