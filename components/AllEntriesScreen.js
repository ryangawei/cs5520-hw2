import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { dummyData } from '../dummyData';
import { colorPalettes } from '../colorPalettes';
import { db } from "../Firebase/firebase-setup";
import EntriesList from './EntriesList';

export default function AllEntriesScreen({route, navigation}) {
  const [entries, setEntries] = useState(dummyData.data);
  const [limit, setLimit] = useState(500);
  const overLimitOnly = route.params && Object.hasOwn(route.params, 'overLimitOnly')? route.params.overLimitOnly : false;

  useEffect(() => {
    const q = overLimitOnly? query(collection(db, "calorie_tracker"), where("calories", ">", limit)) : collection(db, "calorie_tracker");

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let entries = [];
      if (querySnapshot.empty) {
        // no data
      } else {
        // console.log(querySnapshot)
        querySnapshot.docs.forEach((doc) => {
          entries.push({...doc.data(), id: doc.id });
        });
      }

      // console.log(entries);
      setEntries(entries);
    });

    return () => {unsubscribe()};
  }, []);
  
  return (
    <View style={styles.container}>
      <EntriesList entries={entries} limit={limit} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalettes.screenBackground,
  },
});