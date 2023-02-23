import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colorPalettes } from '../colorPalettes';
import PressableButton from './PressableButton';

export default function EditCard({ item }) {
  const reviewed = item.reviewed? item.reviewed : false;

  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={styles.text}>Calories: {item.calories}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      
      <View style={styles.buttonContainer}>
        <PressableButton style={styles.button}>
          <Feather name="trash" size={24} color={colorPalettes.button} />
        </PressableButton>

        <PressableButton style={styles.button}>
        <AntDesign name="check" size={24} color={colorPalettes.button} />
        </PressableButton>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 40,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: colorPalettes.editCardBackground,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    backgroundColor: colorPalettes.editButtonBackground,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    marginVertical: 2,
    color: colorPalettes.text
  },
  shadowProp:
    Platform.OS === "ios"
      ? {
          shadowColor: colorPalettes.shadowColor,
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }
      : {
          shadowColor: colorPalettes.shadowColor,
          elevation: 5,
        },
});