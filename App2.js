import React, { Component } from 'react';
import { Tabs } from './config/router';
import { StyleSheet, View } from 'react-native';
import LoginForm from './screens/LoginForm';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDTpyJ6MP5aag_or6O7Fbk7hPyQMKVJ_hU",
  authDomain: "skate-map-4d126.firebaseapp.com",
  databaseURL: "https://skate-map-4d126.firebaseio.com",
  storageBucket: "skate-map-4d126.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class App2 extends Component {
	constructor(props){
	  super(props);
	  this.database = firebase.database();
	  this.spotsRef = this.database.ref('/spots');
    this.state = {
      currentUser: null,
    };
	}

	componentDidMount() {
		console.log(this.state.currentUser);
	}

	componentDidUpdate() {
		console.log(this.state.currentUser);
	}

	// Handles login functionality
	handleLogin = (email, pass) => {
	    console.log(this.state);
	    const auth = firebase.auth();
	    const promise = auth.signInWithEmailAndPassword(email, pass);
	    promise.then((res) => {
	    	this.setState({currentUser: res.providerData[0].uid});
	    }).catch(e => console.log(e.message));
	};

	// Handles signup functionality
	handleSignup = (email, pass) => {
	    console.log(this.state);
	    const auth = firebase.auth();
	    const promise = auth.createUserWithEmailAndPassword(email, pass);
	    promise.then((res) => {
	    	this.setState({currentUser: res.providerData[0].uid});
	    }).catch(e => console.log(e.message));
	};

  render() {
  	if (!this.state.currentUser) {
	      return <LoginForm
	      					handleLogin={this.handleLogin}
	      					handleSignup={this.handleSignup}/>;
	    } else {
  	return <Tabs 
  						screenProps={{currentUser: this.state.currentUser}}/>
  	}
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 70,
		padding: 20
	}
});