import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

class SideDrawer extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text>Side Drawer</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    paddingTop: 10
  }
})

export default SideDrawer