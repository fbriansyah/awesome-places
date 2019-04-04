import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { deletePlace } from './../../store/actions'

class PlaceDetailScreen extends Component {

  placeDeleteHandler = () => {
    this.props.onPlaceDelete(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }

  render() {
    return (  
      <View style={styles.container}>
        <View>
          <Image source={this.props.selectedPlace.image} style={styles.placeImage} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={this.placeDeleteHandler}>
            <Icon 
              size={30} 
              name={Platform.OS === 'android' ? "md-trash":"ios-trash"} 
              color="red" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    margin: 10,
    justifyContent: "center",
    flex: 1
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  placeImage: {
    height: 200,
    width: "100%"
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center"
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onPlaceDelete: key => {
      dispatch(deletePlace(key))
    }
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen)