import React from 'react'
import { View, Image, Button, StyleSheet } from 'react-native'

import imagePlaceholder from './../../assets/beautiful-bg.jpg'

const imagePicker = props => (
  <View {...props}>
    <View style={styles.placeHolder}>
      <Image source={imagePlaceholder} style={styles.previewImage} />
    </View>
    <View style={styles.button}>
      <Button title="Pick Image" />
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
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})

export default imagePicker