import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import PressableButton from './PressableButton';
import { colorPalettes } from '../colorPalettes';

export default function ConfirmModal({ modalVisible, setModalVisible, msg, onConfirm }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{msg}</Text>
            <View style={styles.buttonContainer}>
              <PressableButton  
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </PressableButton>
              <PressableButton  
                style={[styles.button, styles.buttonConfirm]}
                onPress={() => {onConfirm(); setModalVisible(!modalVisible)}}>
                <Text style={styles.textStyle}>Confirm</Text>
              </PressableButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    backgroundColor: colorPalettes.editButtonBackground,
    borderRadius: 5,
  },
  buttonConfirm: {
    backgroundColor: colorPalettes.confirmButtonBackground,
  },
  buttonCancel: {
    backgroundColor: colorPalettes.cancelButtonBackground,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
});