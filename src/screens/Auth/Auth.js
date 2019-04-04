import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput';
import HeadingText from './../../components/UI/HeadingText/HeadingText';
import MainText from './../../components/UI/MainText/MainText';

import backgroundImage from '../../assets/adventure-alps-background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {

  state = {
    viewPort: Dimensions.get('window').height > 500 ? "portrait": "landscape"
  }

  constructor(props) {
    super(props)

    Dimensions.addEventListener('change', this.updateViewport)
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateViewport)
  }

  loginHandler = () => {
    startMainTabs()
  }

  updateViewport = dims => {
    this.setState({
      viewPort: dims.window.height > 500 ? "portrait": "landscape"
    })
  }

  render () {
    let mainText = null
    if(this.state.height > 500){
      mainText = (
        <MainText>
          <HeadingText>Please Log in</HeadingText>
        </MainText>
      )
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.container}>
          {mainText}
          <ButtonWithBackground color="#29aaf4" onPress={ () => alert("Login") }>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
            <View style={this.state.viewPort === 'portrait' ? styles.portraitPasswordContainer: styles.landscapePasswordContainer}>
              <View style={this.state.viewPort === 'portrait' ? styles.portraitPasswordWrapper: styles.landscapePasswordWrapper}>
                <DefaultInput 
                  placeholder="Password" 
                  style={ styles.input } />
              </View>
              <View style={this.state.viewPort === 'portrait' ? styles.portraitPasswordWrapper: styles.landscapePasswordWrapper}>
              <DefaultInput 
                placeholder="Confirm Password" 
                style={ styles.input } />
              </View>
            </View>
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color="#55c57a">Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee", 
    borderColor: "#bbb"
  },
  ImageBackground: {
    flex: 1
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
})

export default AuthScreen