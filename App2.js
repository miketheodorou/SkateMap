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
      user: null,
    };
	}

	componentDidMount() {
		console.log(this.state.user);
	}

	componentDidUpdate() {
		console.log(this.state.user);
	}

	handleLogin = (email, pass) => {
	    console.log(this.state);
	    const auth = firebase.auth();
	    const promise = auth.signInWithEmailAndPassword(email, pass);
	    promise
	    .then((res) => {
	    	this.setState({user: res.providerData[0].uid});
	    })
	    .then()
	    .catch(e => console.log(e.message));
	};

  render() {
  	if (!this.state.user) {
	      return <LoginForm
	      					handleLogin={this.handleLogin}/>;
	    } else {
  	return <Tabs />
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