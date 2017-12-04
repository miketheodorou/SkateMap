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

import CheckBox from 'react-native-modest-checkbox';

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
		const { 
		name, desc, key, user, coordinate,
		Handrails, Banks, Flatledges, Gap, Quarterpipe,
		Wallride, ManualPads, Spine, Halfpipe, Hips, PoleJam, 
		Stairset, FlatRail, Picnictable  } = this.props.navigation.state.params;

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
		if (Handrails) {
			handRails = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Handrails"
											checkBoxStyle={{display: 'none'}} />
									</View>

		}

		return(
			<View style={styles.mainContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.welcome}>{name}</Text>
				</View>
				<View style={styles.descContainer}>
					<Text style={styles.container}>{desc}</Text>
				</View>
				<View style={styles.featuresContainer}>
					<View style={styles.featuresContent}>
						{handRails}
					</View>
				</View>
				<View style={styles.buttonsContainer}>
					{editButton}
					{deleteButton}	
				</View>			
			</View>
		);
	}
}


const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center'
	},
	nameContainer: {
		width: '100%',
	},
	descContainer: {
		width: '100%',
	},
	featuresContainer: {
		width: '100%',
		alignItems: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	featuresContent: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center'
	},
	featureColumn: {
	},
	checkBoxContainer: {
		margin: 5,
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
	},
});