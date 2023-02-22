import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import EntryItem from './EntryItem';

export default function EntriesList({ entries, limit, navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
      {entries.map((e) => {
        return (
          <EntryItem
            key={e.id}
            item={e}
            limit={limit}
            navigation={navigation}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    paddingTop: 20,
  },
});
