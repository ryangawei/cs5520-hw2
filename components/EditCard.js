import { View, Text, StyleSheet, Modal } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { colorPalettes } from "../colorPalettes";
import PressableButton from "./PressableButton";
import { checkItemInDB } from "../Firebase/firestoreHelper";
import ConfirmModal from "./ConfirmModal";

export default function EditCard({ item }) {
  const reviewed = item.reviewed ? item.reviewed : false;
  const navigation = useNavigation();
  const [reviewModalVisible, setReviewModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  function onReview() {
    checkItemInDB(item.id); navigation.goBack();
  }

  function onDelete() {
    // TODO: delete entry
    navigation.goBack()
  }


  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Text style={styles.text}>Calories: {item.calories}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>

      <View style={styles.buttonContainer}>
        <PressableButton style={[styles.button, styles.deleteButton]} onPress={() => { setDeleteModalVisible(true); }}>
          <Feather name="trash" size={24} color={colorPalettes.button} />
        </PressableButton>

        {!reviewed ? (
          <PressableButton style={[styles.button, styles.reviewButton]} onPress={() => { setReviewModalVisible(true); }}>
            <AntDesign name="check" size={24} color={colorPalettes.button} />
          </PressableButton>
        ) : (
          <></>
        )}
      </View>
      <ConfirmModal modalVisible={deleteModalVisible} setModalVisible={setDeleteModalVisible} msg="Delete the entry?" onConfirm={onDelete} />
      <ConfirmModal modalVisible={reviewModalVisible} setModalVisible={setReviewModalVisible} msg="Mark the entry as reviewed?" onConfirm={onReview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 40,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: colorPalettes.editCardBackground,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: colorPalettes.cancelButtonBackground,
  },
  reviewButton: {
    backgroundColor: colorPalettes.confirmButtonBackground,
  },
  text: {
    fontSize: 18,
    marginVertical: 2,
    color: colorPalettes.text,
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
