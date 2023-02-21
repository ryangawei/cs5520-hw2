import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { dummyData } from '../dummyData';
import { colorPalettes } from '../colorPalettes';
import EntryItem from './EntryItem';

export default function AllEntries({route, navigation}) {
  const [entries, setEntries] = useState(dummyData.data);
  
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