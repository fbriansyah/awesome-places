import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from './../../components/UI/DefaultInput/DefaultInput';
import HeadingText from './../../components/UI/HeadingText/HeadingText';
import MainText from './../../components/UI/MainText/MainText';

import backgroundImage from '../../assets/adventure-alps-background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';

class AuthScreen extends Component {

  loginHandler = () => {
    startMainTabs()
  }

  render () {
    return (
      <ImageBackground source={backgroundImage} style={styles.ImageBackground}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log in</HeadingText>
          </MainText>
          <ButtonWithBackground color="#29aaf4" onPress={ () => alert("Login") }>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-Mail Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
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
  }
})

export default AuthScreen