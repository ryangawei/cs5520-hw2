import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import EntryItem from './EntryItem';

export default function EntriesList({ entries, limit }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
      {entries.map((e) => {
        return (
          <EntryItem
            key={e.id}
            item={e}
            limit={limit}
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
