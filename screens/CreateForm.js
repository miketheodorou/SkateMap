import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import CheckBox from 'react-native-modest-checkbox';

export default class CreateForm extends Component {

	state = {
		coordinate: this.props.navigation.state.params,
		name: '',
		desc: '',
		user: this.props.screenProps.currentUser,
		Handrails: false,
		Banks: false,
		Flatledges: false,
		Gap: false,
		Quarterpipe: false,
		Wallride: false,
		ManualPads: false,
		Spine: false,
		Halfpipe: false,
		Kicker: false,
		PoleJam: false,
		Stairset: false,
		FlatRail: false,
		PicnicTable: false,
	}

	onNameChange(event) {
		this.setState({
			name: event
		});
		console.log(this.state);
	}

	onDescChange(event) {
		this.setState({
			desc: event
		});
	}
 
	
	handleCheck(checked) {
		console.log(checked);
		console.log(checked.label);
		console.log(checked.checked);
		let feature = checked.label;
		let val = checked.checked;
		this.setState({
			[feature]: val
		});
	}

	renderCheckBoxes() {
    let features = this.state.features;
		const featureNames = [];
		
    for(let property in features) {
      featureNames.push(property)
		}
		
    return featureNames.map((featureName) => {
      return (
        <View key={featureName} style={styles.checkBoxContainer}>
          <CheckBox 
            label={featureName}
            onChange={(checked) => this.handleCheck(checked)} 
          />
      </View>
      )
    })
  }

	handleSave = () => {
		console.log(this.state);
		  fetch('https://skate-map-4d126.firebaseio.com/spots.json', {
		    method: 'POST',
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json',
		    },
		    body: JSON.stringify(this.state)
		  });
		  this.props.navigation.navigate('CreateMap');

	}

	render() {
		// Imports coordinates for pin from CreateMap page
		// console.log(this.state.coordinate);
		const { latitude, longitude } = this.props.navigation.state.params;
		// console.log(this.props.screenProps.currentUser);
		const { currentUser } = this.props.screenProps;


		return(
			<View style={styles.manincontainer}>
				<View style={styles.formContainer}>
					<FormLabel>Name</FormLabel>
					<FormInput 
						onChangeText={event => this.onNameChange(event)}/>
					<FormLabel>Description</FormLabel>
					<FormInput 
						onChangeText={event => this.onDescChange(event)} />
				</View>
				<View style={styles.featuresContainer}>
					<View style={styles.featuresContent}>
					{this.renderCheckBoxes()}
					</View>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableHighlight
						style={styles.button}
						onPress={this.handleSave}>
						<Text style={styles.buttonText}>Create Spot</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	maincontainer: {
		marginTop: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		width: '100%',
	},
	buttonContainer: {
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	featuresContainer: {
		width: '100%',
		alignItems: 'center',
		marginTop: 20,
		paddingTop: 30,
		paddingRight: 30,
		paddingBottom: 30,
		paddingLeft: 40, 
	},
	button: {
		marginTop: 5,
		padding: 10,
		width: '40%',
		backgroundColor: "#7FDBFF",
		borderRadius: 5,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 20,
		textAlign: 'center',
	},
	featuresTextBox: {
		width: '100%',
		height: 20,
		alignItems: 'center'
	},
	feturesText: {
		fontSize: 30,
		fontWeight: '800',
		textAlign: 'center',
	},
	featuresContent: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	checkBoxContainer: {
		width: '50%',
	}
});