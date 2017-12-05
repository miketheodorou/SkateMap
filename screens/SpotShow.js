import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight,
	TextInput,
	ScrollView
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
		Wallride, ManualPads, Spine, Halfpipe, Kicker, PoleJam, 
		Stairset, FlatRail, PicnicTable  } = this.props.navigation.state.params;

		const { currentUser } = this.props.screenProps;

		let deleteButton;
		let editButton;

		let handRails;
		let banks;
		let flatLedges;
		let gap;
		let quarterPipe;
		let wallRide;
		let manualPads;
		let spine;
		let halfPipe;
		let kicker;
		let poleJam;
		let stairSet;
		let flatRail;
		let picnicTable;



		// Render button conditionals
		if (currentUser == user) {
			deleteButton = <View style={styles.actionButtons}>
											<TouchableHighlight
												style={styles.editButton}
												onPress={() => this.deleteSpot(key)}>
												<Text style={styles.buttonText}>Delete</Text>
											</TouchableHighlight>
										</View>

			editButton = <View style={styles.actionButtons}>
											<TouchableHighlight
												style={styles.deleteButton}
												onPress={() => this.editSpot(spot)}>
												<Text style={styles.buttonText}>Edit</Text>
											</TouchableHighlight>
										</View>
		}

		// Render spot features conditionals
		if (Handrails == true) {
			handRails = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Handrails"
											uncheckedImage={require('../images/handrail.png')}
											checkedImage={require('../images/handrail.png')} />
									</View>
		}

		if (Banks == true) {
			banks = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Banks"
											uncheckedImage={require('../images/bank2.png')}
											checkedImage={require('../images/bank2.png')} />
									</View>
		}

		if (Flatledges == true) {
			flatLedges = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Flatledges"
											uncheckedImage={require('../images/ledge.png')}
											checkedImage={require('../images/ledge.png')} />
									</View>
		}

		if (Gap == true) {
			gap = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Gap"
											uncheckedImage={require('../images/gap.png')}
											checkedImage={require('../images/gap.png')} />
									</View>
		}

		if (Quarterpipe == true) {
			quarterPipe = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Quarterpipe"
											uncheckedImage={require('../images/quarterpipe.png')}
											checkedImage={require('../images/quarterpipe.png')} />
									</View>
		}

		if (Wallride == true) {
			wallRide = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Wallride"
											uncheckedImage={require('../images/wall.png')}
											checkedImage={require('../images/wall.png')} />
									</View>
		}

		if (ManualPads == true) {
			manualPads = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="ManualPads"
											uncheckedImage={require('../images/manny2.png')}
											checkedImage={require('../images/manny2.png')} />
									</View>
		}

		if (Spine == true) {
			spine = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Spine"
											uncheckedImage={require('../images/spine2.png')}
											checkedImage={require('../images/spine2.png')} />
									</View>
		}

		if (Halfpipe == true) {
			halfPipe = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Halfpipe"
											uncheckedImage={require('../images/half-pipe.png')}
											checkedImage={require('../images/half-pipe.png')} />
									</View>
		}

		if (Kicker == true) {
			kicker = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Kicker"
											uncheckedImage={require('../images/kicker.png')}
											checkedImage={require('../images/kicker.png')} />
									</View>
		}

		if (PoleJam == true) {
			poleJam = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="PoleJam"
											uncheckedImage={require('../images/polejam.png')}
											checkedImage={require('../images/polejam.png')} />
									</View>
		}

		if (Stairset == true) {
			stairSet = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="Stairset"
											uncheckedImage={require('../images/stairset.png')}
											checkedImage={require('../images/stairset.png')} />
									</View>
		}

		if (FlatRail == true) {
			flatRail = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="FlatRail"
											uncheckedImage={require('../images/flatrail.png')}
											checkedImage={require('../images/flatrail.png')} />
									</View>
		}

		if (PicnicTable == true) {
			picnicTable = <View style={styles.checkBoxContainer}>
										<CheckBox 
											label="PicnicTable"
											uncheckedImage={require('../images/picnic.png')}
											checkedImage={require('../images/picnic.png')} />
									</View>
		}

		return(
			<ScrollView>
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
							{banks}
							{flatLedges}
							{gap}
							{quarterPipe}
							{wallRide}
							{manualPads}
							{spine}
							{halfPipe}
							{kicker}
							{poleJam}
							{stairSet}
							{flatRail}
							{picnicTable}
						</View>
					</View>
					<View style={styles.buttonsContainer}>
						{editButton}
						{deleteButton}	
					</View>			
				</View>
			</ScrollView>
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
		padding: 15,
	},
	featuresContainer: {
		width: '100%',
		alignItems: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
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
	deleteButton: {
		padding: 7,
		borderRadius: 5,
		backgroundColor: "#7FDBFF",
	},
	editButton: {
		padding: 7,
		borderRadius: 5,
		backgroundColor: 'red',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 20,
		textAlign: 'center',
	},
	actionButtons: {
		margin: 5,
		borderRadius: 5,
	}
});