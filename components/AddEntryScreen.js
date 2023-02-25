import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { colorPalettes } from '../colorPalettes';
import PressableButton from './PressableButton';
import { addItemToDB } from '../Firebase/firestoreHelper';


export default function AddEntryScreen() {
  const [calorie, setCalorie] = useState(0);
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  function onSubmit() {
    // console.log(calorie);
    // console.log(description);
    if (calorie == 0 || description.length == 0) {
      showInvalidAlert();
      return;
    }
    const reviewed = calorie <= 500? true : false;
    addItemToDB({calories: calorie, description: description, reviewed: reviewed});
    navigation.goBack();
  }

  function showInvalidAlert() {
    Alert.alert('Invalid data', 'Your inputs cannot be empty', [
      {
        text: 'OK',
        onPress: () => {console.log('Cancel Pressed')},
      },
    ])
  }

  function onReset() {
    setCalorie(0);
    setDescription("");
  }

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, styles.topContainer]}>
        <Text style={styles.text}>Calories</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => { setCalorie(Number(text)); }}
        value={calorie}
        keyboardType="numeric"
      />
      </View >
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Description</Text>
        <TextInput
        multiline
        style={[styles.textInput, styles.descInput]}
        onChangeText={(text) => { setDescription(text); }}
        value={description}
      />
      </View>
      <View style={styles.buttonContainer}>
        <PressableButton style={[styles.button, styles.resetButton]} onPress={() => { onReset(); }}>
          <Text style={styles.buttonText}>Reset</Text>
        </PressableButton>
        <PressableButton style={[styles.button, styles.submitButton]} onPress={() => { onSubmit(); }}>
          <Text style={styles.buttonText}>Submit</Text>
        </PressableButton>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalettes.screenBackground,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 40,
  },
  topContainer: {
    marginTop: 70,
  },
  text: {
    flex: 2,
    fontSize: 18,
    marginRight: 5,
    marginVertical: 2,
    color: colorPalettes.text,
  },
  textInput: {
    flex: 4,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  descInput: {
    height: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: colorPalettes.buttonText
  },
  resetButton: {
    backgroundColor: colorPalettes.cancelButtonBackground,
  },
  submitButton: {
    backgroundColor: colorPalettes.confirmButtonBackground,
  },
});
