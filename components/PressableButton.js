import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colorPalettes } from '../colorPalettes';

export default function PressableButton({ style, onPress, children }) {
  // TODO: add visual feedback
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.buttonStyle,
          style,
          pressed ? styles.pressedStyle : null,
        ];
      }}
      onPress={onPress}
      android_ripple={
        {
          color: colorPalettes.buttonPressed,
          // radius: 20
        }
      }
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: { justifyContent: "center"},
  pressedStyle: { backgroundColor: colorPalettes.buttonPressed }
})