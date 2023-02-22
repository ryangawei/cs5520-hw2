import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, Snapshot } from "firebase/firestore";
import { dummyData } from '../dummyData';
import { colorPalettes } from '../colorPalettes';
import EntryItem from './EntryItem';
import { db } from "../Firebase/firebase-setup";

export default function AllEntries({route, navigation}) {
  const [entries, setEntries] = useState(dummyData.data);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "calorie_tracker"), (querySnapshot) => {
      let entries = [];
      if (querySnapshot.empty) {
        // no data
      } else {
        // console.log(querySnapshot)
        querySnapshot.docs.forEach((doc) => {
          entries.push({...doc.data(), id: doc.id });
        });
      }

      console.log(entries);
      setEntries(entries);
    });

    return () => {unsubscribe()};
  }, []);
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        { 
          entries.map((e) => { 
          return (
            <EntryItem key={e.id} item={e} />
          )
        }) 
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalettes.screenBackground,
  },
  scrollViewContentContainer: {
    paddingTop: 20,
  }
});