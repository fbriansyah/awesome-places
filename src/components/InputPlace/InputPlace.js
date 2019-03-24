import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

export default class InputPlaces extends Component {

  state = { 
    text: ""
  }

  pressed = () => {
    this.props.onPress(this.state.text)
    this.setState({
      text: ""
    })
  }

  onInputChange = text => {
    this.setState({text})
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput  
          placeholder="Input Text"
          style={styles.inputText} 
          value={this.state.text}
          onChangeText={this.onInputChange}
        />
        <Button onPress={this.pressed} title="Add" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputText: {
    height: 40, 
    borderColor:"#999", 
    borderWidth:1 , 
    borderRadius: 10,
    width: "80%"
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10
  }
});