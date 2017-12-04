import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class SpotShow extends Component {

	deleteSpot = (key) => {
		fetch('https://skate-map-4d126.firebaseio.com/spots/' +  key + '.json', {
		  method: 'DELETE',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  }
		});
		this.props.navigation.navigate('Spots');
	}

	editSpot = (spot) => {
    this.props.navigation.navigate('EditSpot', {...spot});
  }

	render() {
		// Imports parameters from spot list
		const spot = this.props.navigation.state.params;
		const { name, desc, key, user, coordinate } = this.props.navigation.state.params;
		const { currentUser } = this.props.screenProps;

		let deleteButton;
		let editButton;

		// Render button conditionals
		if (currentUser == user) {
			deleteButton = <TouchableHighlight
											style={styles.button}
											onPress={() => this.deleteSpot(key)}>
											<Text style={styles.buttonText}>Delete</Text>
										</TouchableHighlight>

			editButton = <TouchableHighlight
											style={styles.button}
											onPress={() => this.editSpot(spot)}>
											<Text style={styles.buttonText}>Edit</Text>
										</TouchableHighlight>
		}

		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>{name}</Text>
				<Text style={styles.container}>{desc}</Text>
				<Text style={styles.container}>{key}</Text>
				<Text style={styles.container}>{user}</Text>
				<Text style={styles.container}>{currentUser}</Text>
				{editButton}
				{deleteButton}				
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: 35,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	welcome: {
	  fontSize: 20,
	  textAlign: 'center',
	  margin: 10,
	},
	button: {
		marginTop: 30,
		marginLeft: 70,
		marginRight: 70,
		padding: 20,
		backgroundColor: "red",
		borderRadius: 10,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 30,
		textAlign: 'center',
	}
});