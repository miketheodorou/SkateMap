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
	ScrollView,
	Linking
} from 'react-native';

import CheckBox from 'react-native-modest-checkbox';
import MapView from 'react-native-maps';


export default class SpotShow extends Component {

	state = {
		initialPoisiton: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0.0122,
			longitudeDelta: 0.0101,
		},
		marker: {
			coordinate: {
				latitude: 0,
				longitude: 0
			}
		}
	}

	redirectToMap = () => {
    Linking.canOpenURL(`http://maps.apple.com/?daddr=${this.props.navigation.state.params.coordinate.latitude},${this.props.navigation.state.params.coordinate.longitude}`).then(supported => {
        if (supported) {
            Linking.openURL(`http://maps.apple.com/?daddr=${this.props.navigation.state.params.coordinate.latitude},${this.props.navigation.state.params.coordinate.longitude}`);
        } else {
            console.log('Don\'t know how to go');
        }
    }).catch(err => console.error('An error occurred', err));
}

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
		
		let lat = this.props.navigation.state.params.coordinate.latitude;
		let long = this.props.navigation.state.params.coordinate.longitude;

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
					<View style={styles.mapContainer}>
						<MapView
							style={styles.map}
							initialRegion={{
								latitude: this.props.navigation.state.params.coordinate.latitude,
								longitude: this.props.navigation.state.params.coordinate.longitude,
								latitudeDelta: 0.0122,
								longitudeDelta: 0.0101,
							}}>
								<MapView.Marker coordinate={this.props.navigation.state.params.coordinate}/>
						</MapView>
					</View>
					<View style={styles.buttonsContainer}>
						<View style={styles.actionButtons}>
							<TouchableHighlight
								style={styles.directionsButton}
								onPress={() => this.redirectToMap(this.state.marker.coordinate)}>
								<Text style={styles.buttonText}>Directions</Text>
							</TouchableHighlight>
						</View>
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
	},
	mapContainer: {
		height: 200,
		width: '100%',
	},
	map: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
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
		justifyContent: 'flex-end',
		padding: 10,
	},
	featuresContent: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		// alignItems: 'center',
		justifyContent: 'center'
	},
	featureColumn: {
	},
	checkBoxContainer: {
		margin: 5,
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
	directionsButton: {
		padding: 7,
		borderRadius: 5,
		backgroundColor: '#40e080',
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