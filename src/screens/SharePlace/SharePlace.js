import React, { Component } from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'
import { addPlace } from './../../store/actions'

import InputPlaces from './../../components/InputPlace/InputPlace';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props)
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

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName)
  }
  
  render () {
    return (
      <View>
        <InputPlaces onPress={this.placeAddedHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen)