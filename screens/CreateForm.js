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

export default class CreateForm extends Component {

	state = {
		coordinate: this.props.navigation.state.params,
		name: '',
		desc: '',
		user: this.props.screenProps.currentUser
	}

	onNameChange(event) {
		this.setState({
			name: event
		});
	}

	onDescChange(event) {
		this.setState({
			desc: event
		});
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
		  this.props.navigation.navigate('Spots');

	};

	render() {
		// Imports coordinates for pin from CreateMap page
		console.log(this.state.coordinate);
		const { latitude, longitude } = this.props.navigation.state.params;
		console.log(this.props.screenProps.currentUser);
		const { currentUser } = this.props.screenProps;


		return(
			<View style={styles.container}>
				<FormLabel>Name</FormLabel>
				<FormInput 
					onChangeText={event => this.onNameChange(event)}/>
				<FormLabel>Description</FormLabel>
				<FormInput 
				onChangeText={event => this.onDescChange(event)} />
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
	container: {
		marginTop: 20,
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	button: {
		marginTop: 30,
		marginLeft: 70,
		marginRight: 70,
		padding: 20,
		backgroundColor: "#7FDBFF",
		borderRadius: 10,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 30,
		textAlign: 'center',
	}
});