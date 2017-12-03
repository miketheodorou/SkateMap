import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
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

	render() {
		// Imports parameters from spot list
		const { name, desc, key, user } = this.props.navigation.state.params;
		const { currentUser } = this.props.screenProps;

		let deleteButton;

		if (currentUser == user) {
			deleteButton = <Button title="Delete" onPress={() => this.deleteSpot(key)} />
		}


		return(
			<View style={styles.container}>
				<Text style={styles.welcome}>{name}</Text>
				<Text style={styles.container}>{desc}</Text>
				<Text style={styles.container}>{key}</Text>
				<Text style={styles.container}>{user}</Text>
				<Text style={styles.container}>{currentUser}</Text>
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
});