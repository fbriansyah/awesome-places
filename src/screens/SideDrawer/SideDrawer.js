import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import HeadingText from './../../components/UI/HeadingText/HeadingText';
import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.user}>
            <Icon 
              name={Platform.OS === 'android' ? "md-contact":"ios-contact"} 
              size={35} />
            <HeadingText style={styles.itemText}>John Doe</HeadingText>
          </View>
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <Icon 
                name={Platform.OS === 'android' ? "md-log-out":"ios-log-out"} 
                size={30} 
                color="red" />
              <Text style={styles.itemText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    paddingTop: 15,
    paddingLeft: 5
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  itemText: {
    marginLeft: 5
  }
})

export default SideDrawer