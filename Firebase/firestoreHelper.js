import { doc, collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from "./firebase-setup";

export async function addItemToDB(doc) {
  try {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "calorie_tracker"), doc);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function checkItemInDB(id) {
  try {
    const docRef = doc(db, 'calorie_tracker', id);
    await updateDoc(docRef, {
      reviewed: true
    });
    console.log("Set entry as reviewed with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteItemFromDB(id) {
  try {
    await deleteDoc(doc(db, "calorie_tracker", id));
    console.log("Document deleted with ID: ", id);
  } catch (err) {
    console.log(err);
  }
}
