import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const locatePicker = props => (
  <View {...props}>
    <View style={styles.placeHolder}>
      <Text>Map</Text>
    </View>
    <View style={styles.button}>
      <Button title="Locate Me" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  placeHolder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
})

export default locatePicker