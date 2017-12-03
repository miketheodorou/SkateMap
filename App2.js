import React, { Component } from 'react';
import { Tabs } from './config/router';
import { Login } from './screens/Login';

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
	}
  render() {
    return(
    	<Login />
    	// <Tabs />
    );
  }
}