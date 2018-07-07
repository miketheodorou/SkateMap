import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import * as firebase from 'firebase';

const { width, height } = Dimensions.get("window");

const background = require("../images/skate-bg4.jpeg");
const lockIcon = require("../images/login1_lock.png");
const personIcon = require("../images/login1_person.png");
const mark = require("../images/skate-cover.png");

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    error: '',
}

onEmailChange(event) {
    this.setState({
        email: event
    });
    console.log(this.state);
}

onPasswordChange(event) {
    this.setState({
        password: event
    });
    console.log(this.state);
}

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
          <View style={styles.markWrap}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={personIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholder="Email" 
                placeholderTextColor="#FFF"
                style={styles.input}
                onChangeText={event => this.onEmailChange(event)} 
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                <Image source={lockIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <TextInput 
                placeholderTextColor="#FFF"
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry
                onChangeText={event => this.onPasswordChange(event)}
              />
            </View>
            <View style={styles.alertWrap}>
                <Text style={styles.alert}>{this.props.alert}</Text>
            </View>
            <TouchableOpacity 
            activeOpacity={.5}
            onPress={() => this.props.handleLogin(this.state.email, this.state.password)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={.5}
            onPress={() => this.props.handleSignup(this.state.email, this.state.password)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: null,
    height: null,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  button: {
    backgroundColor: "#7FDBFF",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: '600',
  },
  accountText: {
    color: "#D8D8D8"
  },
  alertWrap: {
    flex: 1,
  },
  alert: {
    backgroundColor: 'transparent',
    color: 'white'
  }
});