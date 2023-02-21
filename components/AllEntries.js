import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'
import { dummyData } from '../dummyData';
import { colorSchema } from '../colorSchema';
import EntryItem from './EntryItem';

export default function AllEntries({route, navigation}) {
  const [entries, setEntries] = useState(dummyData.data);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        { 
          entries.map((e) => { 
          return (
            <EntryItem item={e} />
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
    backgroundColor: colorSchema.screenBackground,
  },
  scrollViewContentContainer: {
  }
});