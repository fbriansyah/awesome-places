import React, { Component } from 'react'
import { View, ScrollView, Button, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { addPlace } from './../../store/actions'
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput';
import MainText from './../../components/UI/MainText/MainText';
import HeadingText from './../../components/UI/HeadingText/HeadingText';
import ImagePicker from './../../components/ImagePicker/ImagePicker';
import LocatePicker from './../../components/LocatePicker/LocatePicker';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      placeName: ""
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress"){
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  placeAddedHandler = () => {
    if(this.state.placeName.trim() !== ""){
      this.props.onAddPlace(this.state.placeName)
      this.setState({
        placeName: ''
      })
    }
  }

  textChangeHandler = placeName => {
    this.setState({
      placeName: placeName
    })
  }
  
  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText style={{color: "black"}}>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>
          <ImagePicker style={styles.placeHolder} />
          <LocatePicker style={styles.placeHolder} />
          <DefaultInput 
            placeholder="Place Name" 
            style={{width: "80%"}}
            value={this.state.placeName}
            onChangeText={this.textChangeHandler}
          />
          <Button title="Share The Place" onPress={this.placeAddedHandler} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeHolder: {
    width: "100%", 
    alignItems: "center"
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)